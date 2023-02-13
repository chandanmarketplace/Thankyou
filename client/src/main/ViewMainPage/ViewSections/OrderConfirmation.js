import React from "react";
import "../LeftView/LeftView.css";
import "./hideEle.css";

export const OrderConfirmation = () => {
  return (
    <>
      <div className="content-box order-confirmation show-on-admin" style={{display: "none"}}>
        <div
          className="content-box__row content-box__row--no-padding"
          style={{ marginBottom: " 4px" }}
        >
          <div className="map default-background">
            <img src="https://cdn.stilyoapps.com/v1/assets/img/map.png" />
          </div>
        </div>
        <div className="content-box__row">
          <h2 className="os-step__title" id="main-header" tabIndex="-1">
            Your order is confirmed
          </h2>
          <p className="SkeletonBodyText"></p>
          <p className="SkeletonBodyText col-7"></p>
          <p className="SkeletonBodyText col-5"></p>
          <div
            className="tracking-info section-element"
            data-gsid="track17"
            style={{ height: "50px", display: "none" }}
          >
            <div className="tracking-info__number" style={{ float: "left" }}>
              <strong>Tracking number</strong>
              <p>
                <a style={{ color: "#15669d" }}>XXXXXXXXXXXXX</a>
              </p>
            </div>
            <div style={{ float: "right" }}>
              <button
                name="button"
                type="button"
                className="field__input-btn btn"
                data-style="button-color-Track17"
                style={{
                  backgroundColor: "#197BBD",
                  color: "white",
                  margin: "0",
                  height: "35px",
                }}
              >
                <span
                  className="btn__content"
                  aria-hidden="true"
                  data-key="Track17_button-text"
                >
                  Track
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};