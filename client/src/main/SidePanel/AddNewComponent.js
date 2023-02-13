import React, { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../AppStateContext";
import "./SidePanel.css";
import CollectionList from "./SettingSections/CollectionList";
import FreeText from "./SettingSections/FreeText";
import ImageWithText from "./SettingSections/ImageWithText";
import SocialMediaLinks from "./SettingSections/SocialMediaLinks";
import Video from "./SettingSections/Video";
import HTMLSettings from "./SettingSections/HTMLSettings";
import { BirthdayCollector } from "./SettingSections/BirthdayCollector";
import ProductRecommendationSettings from "./SettingSections/ProductRecommendationSettings";
import ProductUpsellSettings from "./SettingSections/ProductUpsellSettings";

const componentList = [
  // {
  //   label: "Order Confirmation",
  //   type: "orderConfirmation",
  //   disabled: true,
  // },
  {
    label: "Image with Text",
    type: "ImageWithText",
    bgColor: "#2D2D2D",
    borderRadius: 8,
    img_layout: "square",
    img_alignment: "left",
    img_url: null,
    free_text: "<p>Default text</p>",
    redirect_url: "",
  },
  {
    label: "Product Upsell",
    type: "upsell",
    discountType: "price",
        offerTimer: "",
        titleText: "Title",
        productTitle: "Product Title",
        discount: 10,
        product: {
          label: "",
          value: "",
          imgUrl:"",
          name: "",
          handle:"",
          price: "99",
          variants: "",
        }
  },
  {
    label: "Custom HTML",
    type: "html",
    html: `<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    <p>Add content here</p>
    
    </body>
    </html>`
  },
  {
    label: "Free Text",
    type: "freeText",
    free_text: "<p>Add Content Here</p>"
  },
  {
    label: "Product Recommendations",
    type: "productRecommendations",
    products: [
      {
        label: "Product 1",
        value: "Product 1",
        imgUrl: null,
        name: "Denim Jacket",
        stars: "3",
        reviewCount: "2",
        price: "$129",
      },
      {
        label: "Product 2",
        value: "Product 2",
        imgUrl: null,
        
        name: "Leather jacket",
        stars: "3",
        reviewCount: "2",
        price: "$139",
      },
      {
        label: "Product 3",
        value: "Product 3",
        imgUrl: null,
        
        name: "Black jacket",
        stars: "4",
        reviewCount: "4",
        price: "$99",
      },
    ]
  },
  {
    label: "Birthday Collector",
    type: "birthday",
    buttonBg: "#197BBD",
    buttonText: "Submit",
    buttonTextColor: "white",
    dateFormat: "dd/mm/yyyy",
    errorMsgClr: "red",
    errorMsgText: "Please enter date",
    free_text: "<p>Let us know your birthday. A special gift will be heading your way!</p>",
    placeHolderText: "Select your Birthday",
    thankyouText: "Thanks",
    thankyouTextClr: "Grey",
  },  
  {
    label: "Video",
    type: "video"
  },
  {
    label: "Social media links",
    type: "SocialMediaLinks",
    viewFacebook: true,
  viewLinkedIn: true,
  viewPinterest: true,
  viewTwitter: true,
  free_text: "<p>Share your order on social media</p>"
  },
  {
    label: "Collection List",
    type: "collectionList",
    collections: []
  },
];

const AddNewComponent = (props) => {
  const {list, type} = props;
  const { addToConfig, selected, selectForSetting, updateConfig, deleteFromConfig } = useContext(AppStateContext);
  console.log(props, "props")
  const settings = (props) => ({
    ImageWithText: <ImageWithText deleteFromConfig={deleteFromConfig}  dataset={props} type={type} updateConfig={updateConfig} selectForSetting={selectForSetting} data={props} takeBack={takeBack}   />,
    freeText: <FreeText deleteFromConfig={deleteFromConfig}  dataset={props} type={type} updateConfig={updateConfig} takeBack={takeBack} />,
    collectionList: <CollectionList takeBack={takeBack} deleteFromConfig={deleteFromConfig}  dataset={props} type={type} updateConfig={updateConfig}   />,
    video: <Video deleteFromConfig={deleteFromConfig}  dataset={props} type={type} updateConfig={updateConfig} takeBack={takeBack} />,
    SocialMediaLinks: <SocialMediaLinks deleteFromConfig={deleteFromConfig}  dataset={props} type={type} updateConfig={updateConfig} takeBack={takeBack} />,
    html: <HTMLSettings deleteFromConfig={deleteFromConfig} dataset={props} type={type} selected={props.id} takeBack={takeBack} updateConfig={updateConfig} />,
    birthday: <BirthdayCollector deleteFromConfig={deleteFromConfig} dataset={props} type={type} selected={props.id} takeBack={takeBack} updateConfig={updateConfig} />,
    productRecommendations: (<ProductRecommendationSettings deleteFromConfig={deleteFromConfig} updateConfig={updateConfig} dataset={props} data={props} type={type} takeBack={takeBack} />),
    upsell: <ProductUpsellSettings deleteFromConfig={deleteFromConfig} updateConfig={updateConfig} dataset={props} data={props} type={type} takeBack={takeBack}  />
  });

  function takeBack() {
    selectForSetting(null);
    setTimeout(()=>{
      document.querySelector("span.hover-button-close.slide-to.item-panel-product-list").click();
    },100)
  }

  if (selected) {
    return (list?.map((field, index) => selected.id === field.id && <React.Fragment key={`${index}-${field?.id}`} >{settings(field)[selected.type]}</React.Fragment>));
  }
  return (
    <>
      <div className={`default-eee-ad d-block`}>
        <div>
          <div className="header-LeftSide d-flex col-12 align-items-center bg-white">
            <button
              onClick={props.closeSectionFunction}
              className="exit currentPageTitle polaris-custom-back"
            >
              <svg
                viewBox="0 0 20 20"
                className="Polaris-Icon-back-menu"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M1 0a1 1 0 00-1 1v3a1 1 0 002 0V2h16v16H2v-2a1 1 0 10-2 0v3a1 1 0 001 1h18a1 1 0 001-1V1a1 1 0 00-1-1H1z"></path>
                <path d="M6.414 9H14a1 1 0 110 2H6.414l3.293 3.293a.999.999 0 11-1.414 1.414l-5-5a.999.999 0 010-1.414l5-5a.999.999 0 111.414 1.414L6.414 9z"></path>
              </svg>
              <span>Back</span>
            </button>
            <div className="template-title-text template-title">
              Add section
            </div>
          </div>

        </div>
        <div className="border-custom-rownd-border add-section-list my-3 mx-4">
          <div className="select-product-css">
            <span>Add section</span>
            <span
              className="hover-button-close slide-to item-panel-product-list"
              data-slide-to="section-list"
              data-back=""
              onClick={props.closeSectionFunction}
            >
              <svg
                viewBox="0 0 20 20"
                className="editor-icon-close"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  fill="#5c5f62"
                  d="M11.414 10l6.293-6.293a1 1 0 1 0-1.414-1.414L10 8.586 3.707 2.293a1 1 0 0 0-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 1 0 1.414 1.414L10 11.414l6.293 6.293A.998.998 0 0 0 18 17a.999.999 0 0 0-.293-.707L11.414 10z"
                ></path>
              </svg>
            </span>
          </div>

          {componentList.map((list, index) => (<div
          key={`${index}-${list.label}`}
            style={{ borderBottom: " 1px solid #ced3d7" }}
            className=" list-group-item preliminary bg-white"
            data-path="section-selector.php?method_name=preview&amp;section=Image with text&amp;shop=developement-store-test.myshopify.com"
          >
            <div className="back-border-padd">
              <span>{list.label}</span>
              <a
                href="#"
                data-section="image with text"
                data-path="section-selector.php?method_name=created&amp;shop=developement-store-test.myshopify.com&amp;section_id=5&amp;section=Image with text&amp;display_name=Image with text&amp;page_id=448566"
                data-section-id="5"
                data-count="3"
                className="confirm-section-add Polaris-Button Polaris-Button--primary pull-right"
                style={{ display: "none" }}
                onClick={() => {
                  addToConfig(type, list);
                }}
              >
                Add
              </a>
            </div>
          </div>))}

          {/* <div
            style={{    borderBottom:" 1px solid #ced3d7"}}
            className=" list-group-item preliminary bg-white"
            data-path="section-selector.php?method_name=preview&amp;section=Image with text&amp;shop=developement-store-test.myshopify.com"
          >
            <div className="back-border-padd">
              <span>Image with text</span>
              <a
                href="#"
                data-section="image with text"
                data-path="section-selector.php?method_name=created&amp;shop=developement-store-test.myshopify.com&amp;section_id=5&amp;section=Image with text&amp;display_name=Image with text&amp;page_id=448566"
                data-section-id="5"
                data-count="3"
                className="confirm-section-add Polaris-Button Polaris-Button--primary pull-right"
                style={{display:"none"}}
                onClick={addIWT}
              >
                Add
              </a>
            </div>
          </div>

          <div
            style={{    borderBottom:" 1px solid #ced3d7"}}
            className=" list-group-item preliminary bg-white"
            data-path="section-selector.php?method_name=preview&amp;section=Image with text&amp;shop=developement-store-test.myshopify.com"
          >
            <div className="back-border-padd">
              <span>Free text</span>
              <a
                href="#"
                data-section="image with text"
                data-path="section-selector.php?method_name=created&amp;shop=developement-store-test.myshopify.com&amp;section_id=5&amp;section=Image with text&amp;display_name=Image with text&amp;page_id=448566"
                data-section-id="5"
                data-count="3"
                className="confirm-section-add Polaris-Button Polaris-Button--primary pull-right"
                style={{display:"none"}}
                onClick={addFT}
              >
                Add
              </a>
            </div>
          </div>

          <div
            style={{    borderBottom:" 1px solid #ced3d7"}}
            className=" list-group-item preliminary bg-white"
            data-path="section-selector.php?method_name=preview&amp;section=Image with text&amp;shop=developement-store-test.myshopify.com"
          >
            <div className="back-border-padd">
              <span>Collection list</span>
              <a
                href="#"
                data-section="image with text"
                data-path="section-selector.php?method_name=created&amp;shop=developement-store-test.myshopify.com&amp;section_id=5&amp;section=Image with text&amp;display_name=Image with text&amp;page_id=448566"
                data-section-id="5"
                data-count="3"
                className="confirm-section-add Polaris-Button Polaris-Button--primary pull-right"
                style={{display:"none"}}
                onClick={addCL}
              >
                Add
              </a>
            </div>
          </div>

          <div
            className=" list-group-item preliminary bg-white"
            data-path="section-selector.php?method_name=preview&amp;section=Image with text&amp;shop=developement-store-test.myshopify.com"
          >
            <div className="back-border-padd">
              <span>Video</span>
              <a
                href="#"
                data-section="image with text"
                data-path="section-selector.php?method_name=created&amp;shop=developement-store-test.myshopify.com&amp;section_id=5&amp;section=Image with text&amp;display_name=Image with text&amp;page_id=448566"
                data-section-id="5"
                data-count="3"
                className="confirm-section-add Polaris-Button Polaris-Button--primary pull-right"
                style={{display:"none"}}
                onClick={addVid}
              >
                Add
              </a>
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
};

export {
  AddNewComponent
};
