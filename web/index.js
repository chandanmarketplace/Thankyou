// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";
import CryptoJS from "crypto-js";

import sqlite3 from 'sqlite3';

let db = new sqlite3.Database(`${process.cwd()}/database.sqlite`);

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());

app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);

app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// app.post("/api/draftorder", async (_req, res) => {
//   const shop = _req.query.shopId;
//   let sql = `SELECT *
//            FROM shopify_sessions
//            WHERE shop  = ?`;

//   db.get(sql, [shop], async (err, row) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log(row);

//     // const data = await shopify.api.rest.Product.all({
//     //   session: {
//     //     shop: row.shop,
//     //     accessToken: row.accessToken
//     //   },
//     // });

//     res.status(200).send({ success: true, shop: shop, data: row });

//   });
// });

app.get("/api/getProducts", async (_req, res) => {
  const shop = _req.query.shopId;
  let sql = `SELECT *
           FROM shopify_sessions
           WHERE shop  = ?`;

  db.get(sql, [shop], async (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);

    const data = await shopify.api.rest.Product.all({
      session: {
        shop: row.shop,
        accessToken: row.accessToken
      },
    });

    res.status(200).send({ success: true, shop: shop, data: data });

  });
});

app.get("/api/getCollections", async (_req, res) => {
  const shop = _req.query.shopId;
  let sql = `SELECT *
           FROM shopify_sessions
           WHERE shop  = ?`;

  db.get(sql, [shop], async (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);

    // const data = await shopify.api.rest.SmartCollection.all({
    //   session: {
    //     shop: row.shop,
    //     accessToken: row.accessToken
    //   },
    // });

    const session = {
      shop: row.shop,
      accessToken: row.accessToken
    };
    

    const client = new shopify.api.clients.Graphql({ session });

    const response = await client.query({
      data: `{
        collections(first: 250) {
          nodes {
            image {
              src
            }
            id
            handle
            title
            productsCount
          }
        }
      }`,
    });

    res.status(200).send({ success: true, shop: shop, data: response });

  });
});

app.get("/api/script_tag", async (_req, res) => {
  const shop = _req.query.shopId;

  let sql = `SELECT *
           FROM shopify_sessions
           WHERE shop  = ?`;

  db.get(sql, [shop], async (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);

    const session = {
      shop: row.shop,
      accessToken: row.accessToken
    };

    let src = "https://square.codersarray.com/public/thankyou.js"

    let newtag = `mutation MyMutation {
      scriptTagCreate(input: {src: "${src}", displayScope:ORDER_STATUS}){
        scriptTag {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
    `;

    try{

    const client = new shopify.api.clients.Graphql({ session });

    const response = await client.query({
      data: `{
        scriptTags(first:5 src: "${src}") {
          nodes {
            id
            src
            displayScope
            createdAt
          }
        }
      }`,
    });

    // let data = JSON.parse(response.data)

    // console.log(response.body.data)

    // console.log(newtag)

    if(response.body.data.scriptTags.nodes.length == 0){
      const response = await client.query({
        data: newtag,
      });
        console.log("new tag")
    }

    res.status(200).send({ status: true, shop: shop, data: response });
  }
  catch(e){
    res.status(200).send({ success: true, shop: shop, data: e });
    console.log(e);
  }

    // res.status(200).send({ success: true, shop: shop, data: response });

  });
});


app.use(express.json());

app.post("/api/draftorder", async (_req, res) => {
  console.log(_req.body.data)
  const shop = _req.query.shopId;
  let sql = `SELECT *
           FROM shopify_sessions
           WHERE shop  = ?`;

  db.get(sql, [shop], async (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(row);

    // const data = await shopify.api.rest.Product.all({
    //   session: {
    //     shop: row.shop,
    //     accessToken: row.accessToken
    //   },
    // });


    const session = {
      shop: row.shop,
      accessToken: row.accessToken
    };

    let varId = _req.body.data.varId
    let qty = _req.body.data.qty
    

    const client = new shopify.api.clients.Graphql({ session });

    const response = await client.query({
      data: `mutation {
        draftOrderCreate(input: {
          lineItems: [
            {
              variantId: "gid://shopify/ProductVariant/${varId}",
              quantity: ${qty},
              appliedDiscount: {
                value: 50.00,
                valueType:PERCENTAGE
              }
            }
          ]
        }) {
          userErrors {
            field
            message
          }
          draftOrder {
            id
            invoiceUrl
            lineItems(first: 10) {
              edges {
                node {
                  variant {
                    title
                  }
                  originalUnitPrice
                  discountedUnitPrice
                }
              }
            }
          }
        }
      }`,
    });

    console.log(response)

    res.status(200).send({ success: true, shop: shop, data: response });

  });
});

// All endpoints after this point will require an active session
app.use("/api/*", shopify.validateAuthenticatedSession());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});

app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.get("/api/getUrl", async (_req, res) => {
  const shop = res.locals.shopify.session.shop;
  const secretPass = `${process.env.SHOPIFY_API_SECRET}`;

  var ency = CryptoJS.AES.encrypt(JSON.stringify(shop), secretPass).toString();
  const myOtherUrl = process.env.EDITOR_URL + "?d=" + ency;
  console.log("myOtherUrl", secretPass);
  res.status(200).send(myOtherUrl);
});

app.get("/api/checkTag", async (_req, res) => {
  const shop = res.locals.shopify.session.shop;

  const session = res.locals.shopify.session
  // const secretPass = `${process.env.SHOPIFY_API_SECRET}`;
  const client = new shopify.api.clients.Graphql({ session });

  
  let src = "https://square.codersarray.com/public/thankyou.js"

  let newtag = `mutation MyMutation {
    scriptTagCreate(input: {src: "${src}", displayScope:ORDER_STATUS}){
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
  `;

    const response = await client.query({
      data: `{
        scriptTags(first:5 src: "${src}") {
          nodes {
            id
            src
            displayScope
            createdAt
          }
        }
      }`,
    });

    if(response.body.data.scriptTags.nodes.length == 0){
      const response = await client.query({
        data: newtag,
      });
        console.log("new tag")
    }else{
      console.log("tag already exists")
    }
  // var ency = CryptoJS.AES.encrypt(JSON.stringify(shop), secretPass).toString();
  // const myOtherUrl = process.env.EDITOR_URL + "?d=" + ency;
  // console.log("myOtherUrl", secretPass);
  res.status(200).send(response);
});

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});

app.listen(PORT);
