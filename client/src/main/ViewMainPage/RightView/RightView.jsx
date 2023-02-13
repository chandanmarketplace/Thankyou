import React, { useContext } from "react";
import { AppStateContext } from "../../AppStateContext";

const RightView = ({ getComponents }) => {
  const {
    inputConfig,
    selected,
    selectForSetting,
    setfirst,
    setSecond,
    setView,
  } = useContext(AppStateContext);

  return (
    <>
      <div
        className="RCT-order-summary order-summary order-summary--is-collapsed"
        data-order-summary=""
      >
        <h2 className="visually-hidden">Order summary</h2>
        <div className="order-summary__sections">
          <div className="order-summary__section order-summary__section--product-list">
            <div className="order-summary__section__content">
              <table className="product-table">
                <caption className="visually-hidden">Shopping cart</caption>
                <thead>
                  <tr>
                    <th scope="col">
                      <span className="visually-hidden">Product image</span>
                    </th>
                    <th scope="col">
                      <span className="visually-hidden">Description</span>
                    </th>
                    <th scope="col">
                      <span className="visually-hidden">Quantity</span>
                    </th>
                    <th scope="col">
                      <span className="visually-hidden">Price</span>
                    </th>
                  </tr>
                </thead>
                <tbody data-order-summary-section="line-items">
                  <tr
                    className="product "
                    data-product-id="856203132985"
                    data-variant-id="8589924335673"
                    data-product-type="Shoes, Sandals"
                    data-customer-ready-visible=""
                  >
                    <td className="product__image">
                      <div className="product-thumbnail">
                        <div className="product-thumbnail__wrapper">
                          <img
                            alt="Product name here"
                            className="product-thumbnail__image"
                            src="https://cdn.stilyoapps.com/v1/assets/img/placeholder.png"
                          />
                        </div>
                        <span
                          className="product-thumbnail__quantity"
                          aria-hidden="true"
                        >
                          1
                        </span>
                      </div>
                    </td>
                    <td className="product__description">
                      <span className="product__description__name order-summary__emphasis">
                        Product name here...
                      </span>
                      <br />
                      <span className="product__description__variant order-summary__small-text">
                        Variant here...
                      </span>
                    </td>
                    <td className="product__quantity visually-hidden">1</td>
                    <td className="product__price">
                      <span className="order-summary__emphasis">Rs. 34.45</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="order-summary__section order-summary__section--total-lines"
            data-order-summary-section="payment-lines"
          >
            <table className="total-line-table">
              <caption className="visually-hidden">Cost summary</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Description</span>
                  </th>
                  <th scope="col">
                    <span className="visually-hidden">Price</span>
                  </th>
                </tr>
              </thead>
              <tbody className="total-line-table__tbody pb-3">
                <tr className="total-line total-line--subtotal">
                  <th className="total-line__name" scope="row">
                    Subtotal
                  </th>
                  <td className="total-line__price">
                    <span
                      className="order-summary__emphasis"
                      data-checkout-subtotal-price-target="21172"
                    >
                      Rs. 34.45{" "}
                    </span>
                  </td>
                </tr>
                <tr className="total-line total-line--shipping">
                  <th className="total-line__name" scope="row">
                    Shipping
                  </th>
                  <td className="total-line__price">
                    <span
                      className="order-summary__emphasis"
                      data-checkout-total-shipping-target="2500"
                    >
                      Rs. 25.00{" "}
                    </span>
                  </td>
                </tr>
                <tr
                  className="total-line total-line--taxes"
                  data-checkout-taxes=""
                >
                  <th className="total-line__name" scope="row">
                    Taxes
                  </th>
                  <td className="total-line__price">
                    <span
                      className="order-summary__emphasis"
                      data-checkout-total-taxes-target="0"
                    >
                      Rs. 0
                    </span>
                  </td>
                </tr>
                {/* <br /> */}
              </tbody>
              <tfoot className="total-line-table__footer">
                <tr className="total-line">
                  <th
                    className="total-line__name payment-due-label"
                    scope="row"
                  >
                    <span className="payment-due-label__total">Total</span>
                  </th>
                  <td className="total-line__price payment-due">
                    <div className="prdocut-price-usd">
                      <span
                        className="payment-due__price"
                        data-checkout-payment-due-target="23672"
                      >
                        Rs. 59.45{" "}
                      </span>
                      <div className="tt_width_height_20px tt_price_responsive">
                        <span
                          className="Polaris-Icon Polaris-Icon--colorBlack Polaris-Icon--isColored "
                          data-tippy-content="This is the total paid amount from Shopify- will be displayed in the store's currency in a live thank you page. You cannot change or delete this section"
                          data-tippy-theme="light"
                          data-tippy-arrow="false"
                          data-tippy-duration="0"
                          data-tippy-delay="[0, 0]"
                          tabIndex="0"
                        >
                          <svg
                            className="Polaris-Icon__Svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11 11H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2H9v2zm1-13a8 8 0 100 16 8 8 0 000-16z"
                              fill="#5C5F62"
                            ></path>
                          </svg>
                        </span>
                      </div>{" "}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div
              className="visually-hidden"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              Updated total price:
              <span data-checkout-payment-due-target="23672">Rs. 236.72</span>
            </div>
          </div>
        </div>
      </div>
      <div id="right-view-html-code">

      {inputConfig?.right?.map((list) => !list?.hide && (
        <div
          key={list.id + "right"}
          id={`id-right-view-${list?.id}`}
          onClick={() => {
            selectForSetting(list);
            setfirst("none");
            setView("right");
            setSecond("block");
          }}
          style={selected?.id === list?.id ? { border: "2px dashed grey" } : {}}
          className="main__header banner-wrap px-5 pt-3"
        >
          {getComponents(list)}
        </div>
      ))}
        </div>
    </>
  );
};

export { RightView };
