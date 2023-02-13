import React from "react";
import "../LeftView/LeftView.css";
import "./hideEle.css";

export const CustomerInfo = () => {
  return (
    <>
      <div className="content-box customer-inhtmlFormation show-on-admin" style={{display: "none"}}>
        <div className="content-box__row content-box__row--no-border">
          <div className="TooltipRPParentDiv">
            <div className="tt_width_100pr">
              <h2>Customer information</h2>
            </div>
            <div className="tt_width_height_22px">
              <span
                className="Polaris-Icon Polaris-Icon--colorBlack Polaris-Icon--isColored"
                data-tippy-content="This is the Customer information from Shopify- will be displayed in the store's language, and include the real customer data in a live thank you page. You cannot change or delete this section, however, you can change it's position by dragging the elements around it"
                data-tippy-theme="light"
                data-tippy-arrow="false"
                data-tippy-duration="0"
                data-tippy-delay="[0, 0]"
                tabIndex="0"
              >
                <svg className="Polaris-Icon__Svg" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11 11H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2H9v2zm1-13a8 8 0 100 16 8 8 0 000-16z"
                    fill="#5C5F62"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="content-box__row">
          <div className="section__content col-12 d-flex gap-3">
            <div className="section__content__column section__content__column--half col-lg-6 col-12 pe-lg-3">
              <h3>Shipping address</h3>
              <p className="SkeletonBodyText"></p>
              <p className="SkeletonBodyText col-7"></p>
              <p className="SkeletonBodyText col-5"></p>
              <p className="SkeletonBodyText col-3"></p>
              <h3>Shipping method</h3>
              <p className="SkeletonBodyText col-7"></p>
            </div>
            <div className="section__content__column section__content__column--half col-lg-6 col-12 pe-lg-3">
              <h3>Billing address</h3>
              <p className="SkeletonBodyText"></p>
              <p className="SkeletonBodyText col-7"></p>
              <p className="SkeletonBodyText col-5"></p>
              <p className="SkeletonBodyText col-3"></p>
              <h3>Payment method</h3>
              <p className="SkeletonBodyText col-7"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};