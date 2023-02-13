import React, { useContext } from "react";
import { AppStateContext } from "../../AppStateContext";
import "./LeftView.css";

const LeftView = ({ getComponents }) => {
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
      <div className="main left-area" role="main">
        <div className="main__header banner-wrap px-5 pt-3">
          <div className="banner-logo alignment left logo_not_set ">
            <a className="logo logo--left" href="#">
              <span
                className="logo__text heading-1"
                data-style="logo-text-448566"
                style={{ color: "black" }}
              >
                Developement store test
              </span>
            </a>
          </div>

          <h1 className="visually-hidden">Thank you htmlFor your purchase!</h1>
        </div>{" "}
        <div className="main__content px-5">
          <div className="step left-area-content" data-step="thank-you">
            <div className="section">
              <div className="section__header os-header">
                <div className="tt_width_height_20px tt_responsive">
                  <span className="Polaris-Icon Polaris-Icon--colorBlack Polaris-Icon--isColored dataTippyContent">
                    <svg className="Polaris-Icon__Svg" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M11 11H9v-.148c0-.876.306-1.499 1-1.852.385-.195 1-.568 1-1a1.001 1.001 0 00-2 0H7c0-1.654 1.346-3 3-3s3 1 3 3-2 2.165-2 3zm-2 4h2v-2H9v2zm1-13a8 8 0 100 16 8 8 0 000-16z"
                        fill="#5C5F62"
                      ></path>
                    </svg>
                  </span>
                </div>{" "}
                <svg
                  width="50"
                  height="50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  className="os-header__hanging-icon checkmark"
                >
                  <path
                    className="checkmark__circle"
                    d="M25 49c13.255 0 24-10.745 24-24S38.255 1 25 1 1 11.745 1 25s10.745 24 24 24z"
                  ></path>
                  <path
                    className="checkmark__check"
                    d="M15 24.51l7.307 7.308L35.125 19"
                  ></path>
                </svg>
                <div className="os-header__heading">
                  <span className="os-order-number">Order #1001</span>
                  <div className="d-flex">
                    <h2
                      className="os-header__title"
                      id="main-header"
                      tabIndex="-1"
                    >
                      Thank you (first name)!
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section__content">
                <div id="row-608302">
                  {/* <div className="content-box order-confirmation">
                    <div
                      className="content-box__row content-box__row--no-padding"
                      style={{ marginBottom: " 4px" }}
                    >
                      <div className="map default-background">
                        <img src="https://cdn.stilyoapps.com/v1/assets/img/map.png" />
                      </div>
                    </div>
                    <div className="content-box__row">
                      <h2
                        className="os-step__title"
                        id="main-header"
                        tabIndex="-1"
                      >
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
                        <div
                          className="tracking-info__number"
                          style={{ float: "left" }}
                        >
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
                  </div> */}
                  {/* <div className="content-box customer-inhtmlFormation">
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
                  </div> */}
                  <div
                    id="section-2463416"
                    className="content-box section-element d-none"
                    data-id="section-2463416"
                  >
                    <div
                      className="content-box__row"
                      id="social_like_2463416"
                      data-key="2463416_social_like"
                    >
                      <br />
                    </div>
                  </div>
                  <div
                    id="section-2463415"
                    className="content-box section-element d-none"
                    data-id="section-2463415"
                  >
                    <div className="section__content">
                      <div className="content-box__row image-with-text">
                        <div className="section__content__column section__content__column--half imageSecDiv2463415">
                          <img
                            className="square img-2463415"
                            src="https://cdn.stilyoapps.com/v1/assets/img/placeholder.png"
                          />
                        </div>
                        <div className="section__content__column section__content__column--half">
                          <div
                            id="text_2463415"
                            data-key="2463415_text"
                            data-style="image_with_text"
                          >
                            <p>
                              In the text editor you have multiple options:
                              <br />
                              Bold, Underline, Italic and Strikethrough the
                              text.
                              <br />
                              Change the htmlFormat and size
                              <br />
                              Change the text’s color and background
                              <br />
                              Change the font
                              <br />
                              Use a link
                              <br />
                              Change the alignment
                              <br />
                              Insert a horizontal line
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="section-2463417"
                    className="content-box section-element d-none"
                    data-id="section-2463417"
                  >
                    <div
                      className="content-box__row colletion-title"
                      id="text_2463417"
                      data-key="heading-2463417"
                      data-style="heading-2463417"
                    >
                      Collection list
                    </div>
                    <div
                      className="content-box__row sub-content-box__row"
                      id="navigation_bar__2463417"
                      data-key="2463417_navigation_bar_"
                      data-style="navigation_bar_"
                    >
                      <div className="section__content__column defaultText2463417">
                        You didn't add any collections yet. Once you'll add
                        collections, this text will disappear.
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>

          <div id="left-view-html-code">
            {inputConfig?.left?.map((list, index) => !list?.hide && (
              <div
              id={`id-left-view-${list?.id}`}
                key={list.id + index + "left" + index}
                onClick={() => {
                  if (!list?.disabled) {
                    selectForSetting(list);
                    setfirst("none");
                    setSecond("block");
                    setView("left");
                  }
                }}
                style={
                  selected?.id === list?.id ? { border: "2px dashed grey" } : {}
                }
                className="main__header1 banner-wrap pt-3"
              >
                {getComponents(list)}
              </div>
            ))}
          </div>

          <div className="step__footer left-area-footer">
            <p className="step__footer__info"></p>
            <div className="TooltipRPParentDiv" style={{ width: "unset" }}>
              <span>
                Need help? <a data-tekkie-id="contact_us_link"> Contact us</a>
                &nbsp;&nbsp;
              </span>
              <div className="tt_width_height_20px">
                <span
                  className="Polaris-Icon Polaris-Icon--colorBlack Polaris-Icon--isColored"
                  data-tippy-content="This is the contact us link from Shopify- will be displayed in the store's language in a live thank you page. You cannot change or delete this section"
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
              </div>{" "}
            </div>
          </div>
        </div>
        {/* // Add HTML components  */}
        {/*
        <div className="container-os py-5 mt-5">


        <section className="product-collection-section-os">
          <div className="product-collection-heading-os">Collection</div>
          <div className="product-collection-data-row-os">
            <div className="product-collection-data-col-os-1">
              <a href="#" className="product-collection-product-image-os">
                <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/collection-img.webp?v=1672908435" alt="" />
              </a>
              <div className="product-collection-product-content-os">
                <div className="product-collection-name-os">Men's Fashion</div>
              </div>
            </div>

            <div className="product-collection-data-col-os-1">
              <a href="#" className="product-collection-product-image-os">
                <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/collection-img1.webp?v=1672908435" alt="" />
              </a>
              <div className="product-collection-product-content-os">
                <div className="product-collection-name-os">Men's Accessories</div>
              </div>
            </div>

            <div className="product-collection-data-col-os-1">
              <a href="#" className="product-collection-product-image-os">
                <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/collection-img2.webp?v=1672908436" alt="" />
              </a>
              <div className="product-collection-product-content-os">
                <div className="product-collection-name-os">Men's Swimwear</div>
              </div>
            </div>
          </div>
          <a href="#" className="you-may-interested-product-view-all-btn-os">
            View all
          </a>
        </section>

        <section className="refer-to-friend-section-os">
          <div className="refer-to-friend-data-row-os">
            <div className="refer-to-friend-data-col-os-1">
              <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/refer-to-friend-img.webp?v=1672908436" alt="" />
            </div>
            <div className="refer-to-friend-data-col-os-2">
              <div className="refer-to-friend-text-os">
                Refer a friend Get $10 free
              </div>
              <a href="#" className="refer-to-friend-Learn-more-btn-os">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="video-section-os">
          <div className="video-section-heading-os">Video</div>
          <div className="video-data-row-os">
            <iframe
              width="560"
              height="315"
              // src="https://www.youtube.com/embed/S8zuyP4UB6o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section className="discount-offer-section-os">
          <div className="discount-offer-all-data-os">
            <div className="discount-offer-heading-os">Get more for 50% OFF!</div>
            <div className="discount-offer-deadline-os">
              Offer expires in:
              <span className="discount-offer-deadline-duration">4:20</span>
            </div>
            <div className="discount-offer-data-row-os">
              <div className="discount-offer-data-col-os-1">
                <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/discount-offer-img.webp?v=1672908436" alt="" />
              </div>
              <div className="discount-offer-data-col-os-2">
                <div className="discount-offer-product-name-os">Plaid Shirt</div>
                <div className="discount-offer-price-data-os">
                  <div className="discount-offer-sale-os">Sale</div>
                  <div className="discount-offer-product-price-os">$99.99</div>
                  <div className="discount-offer-compare-at-price-os">$180.00</div>
                </div>
                <div className="discount-offer-review-os">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="58"
                      height="10"
                      viewBox="0 0 58 10"
                      fill="none"
                    >
                      <path
                        d="M9.34276 3.80512C9.30374 3.68262 9.22871 3.57473 9.12745 3.49552C9.0262 3.41631 8.90342 3.36946 8.77513 3.36109L6.45519 3.19873L5.59459 1.03168C5.54802 0.911872 5.46634 0.808931 5.36026 0.736341C5.25418 0.663751 5.12865 0.6249 5.00011 0.624878H4.9995C4.87116 0.625107 4.74588 0.664057 4.64003 0.736636C4.53418 0.809215 4.4527 0.912044 4.40624 1.03168L3.53282 3.21124L1.22569 3.36109C1.09741 3.36946 0.97463 3.41631 0.873373 3.49552C0.772116 3.57473 0.697085 3.68262 0.658068 3.80512C0.616907 3.92935 0.614107 4.0631 0.650032 4.18894C0.685957 4.31479 0.758942 4.4269 0.859484 4.51068L2.63439 6.01093L2.10643 8.08765C2.07004 8.22753 2.07673 8.37515 2.12563 8.51117C2.17453 8.64719 2.26335 8.76528 2.38048 8.84998C2.49356 8.93225 2.62879 8.97858 2.76856 8.98293C2.90834 8.98728 3.04619 8.94946 3.16417 8.87439L4.99523 7.71442C4.99767 7.71259 5.00011 7.71137 5.0056 7.71442L6.97582 8.96259C7.08278 9.03093 7.20787 9.06539 7.33474 9.06147C7.46161 9.05755 7.58434 9.01543 7.68688 8.94061C7.793 8.8639 7.8735 8.75693 7.91782 8.6337C7.96215 8.51048 7.96823 8.37674 7.93529 8.25L7.37438 5.98132L9.14134 4.51068C9.24189 4.4269 9.31487 4.31479 9.3508 4.18894C9.38672 4.06309 9.38392 3.92935 9.34276 3.80512Z"
                        fill="#F5D13F"
                      ></path>
                      <path
                        d="M21.3428 3.80512C21.3037 3.68262 21.2287 3.57473 21.1275 3.49552C21.0262 3.41631 20.9034 3.36946 20.7751 3.36109L18.4552 3.19873L17.5946 1.03168C17.548 0.911872 17.4663 0.808931 17.3603 0.736341C17.2542 0.663751 17.1286 0.6249 17.0001 0.624878H16.9995C16.8712 0.625107 16.7459 0.664057 16.64 0.736636C16.5342 0.809215 16.4527 0.912044 16.4062 1.03168L15.5328 3.21124L13.2257 3.36109C13.0974 3.36946 12.9746 3.41631 12.8734 3.49552C12.7721 3.57473 12.6971 3.68262 12.6581 3.80512C12.6169 3.92935 12.6141 4.0631 12.65 4.18894C12.686 4.31479 12.7589 4.4269 12.8595 4.51068L14.6344 6.01093L14.1064 8.08765C14.07 8.22753 14.0767 8.37515 14.1256 8.51117C14.1745 8.64719 14.2634 8.76528 14.3805 8.84998C14.4936 8.93225 14.6288 8.97858 14.7686 8.98293C14.9083 8.98728 15.0462 8.94946 15.1642 8.87439L16.9952 7.71442C16.9977 7.71259 17.0001 7.71137 17.0056 7.71442L18.9758 8.96259C19.0828 9.03093 19.2079 9.06539 19.3347 9.06147C19.4616 9.05755 19.5843 9.01543 19.6869 8.94061C19.793 8.8639 19.8735 8.75693 19.9178 8.6337C19.9621 8.51048 19.9682 8.37674 19.9353 8.25L19.3744 5.98132L21.1413 4.51068C21.2419 4.4269 21.3149 4.31479 21.3508 4.18894C21.3867 4.06309 21.3839 3.92935 21.3428 3.80512Z"
                        fill="#F5D13F"
                      ></path>
                      <path
                        d="M33.3428 3.80512C33.3037 3.68262 33.2287 3.57473 33.1275 3.49552C33.0262 3.41631 32.9034 3.36946 32.7751 3.36109L30.4552 3.19873L29.5946 1.03168C29.548 0.911872 29.4663 0.808931 29.3603 0.736341C29.2542 0.663751 29.1286 0.6249 29.0001 0.624878H28.9995C28.8712 0.625107 28.7459 0.664057 28.64 0.736636C28.5342 0.809215 28.4527 0.912044 28.4062 1.03168L27.5328 3.21124L25.2257 3.36109C25.0974 3.36946 24.9746 3.41631 24.8734 3.49552C24.7721 3.57473 24.6971 3.68262 24.6581 3.80512C24.6169 3.92935 24.6141 4.0631 24.65 4.18894C24.686 4.31479 24.7589 4.4269 24.8595 4.51068L26.6344 6.01093L26.1064 8.08765C26.07 8.22753 26.0767 8.37515 26.1256 8.51117C26.1745 8.64719 26.2634 8.76528 26.3805 8.84998C26.4936 8.93225 26.6288 8.97858 26.7686 8.98293C26.9083 8.98728 27.0462 8.94946 27.1642 8.87439L28.9952 7.71442C28.9977 7.71259 29.0001 7.71137 29.0056 7.71442L30.9758 8.96259C31.0828 9.03093 31.2079 9.06539 31.3347 9.06147C31.4616 9.05755 31.5843 9.01543 31.6869 8.94061C31.793 8.8639 31.8735 8.75693 31.9178 8.6337C31.9621 8.51048 31.9682 8.37674 31.9353 8.25L31.3744 5.98132L33.1413 4.51068C33.2419 4.4269 33.3149 4.31479 33.3508 4.18894C33.3867 4.06309 33.3839 3.92935 33.3428 3.80512Z"
                        fill="#F5D13F"
                      ></path>
                      <path
                        d="M45.3428 3.80512C45.3037 3.68262 45.2287 3.57473 45.1275 3.49552C45.0262 3.41631 44.9034 3.36946 44.7751 3.36109L42.4552 3.19873L41.5946 1.03168C41.548 0.911872 41.4663 0.808931 41.3603 0.736341C41.2542 0.663751 41.1286 0.6249 41.0001 0.624878H40.9995C40.8712 0.625107 40.7459 0.664057 40.64 0.736636C40.5342 0.809215 40.4527 0.912044 40.4062 1.03168L39.5328 3.21124L37.2257 3.36109C37.0974 3.36946 36.9746 3.41631 36.8734 3.49552C36.7721 3.57473 36.6971 3.68262 36.6581 3.80512C36.6169 3.92935 36.6141 4.0631 36.65 4.18894C36.686 4.31479 36.7589 4.4269 36.8595 4.51068L38.6344 6.01093L38.1064 8.08765C38.07 8.22753 38.0767 8.37515 38.1256 8.51117C38.1745 8.64719 38.2634 8.76528 38.3805 8.84998C38.4936 8.93225 38.6288 8.97858 38.7686 8.98293C38.9083 8.98728 39.0462 8.94946 39.1642 8.87439L40.9952 7.71442C40.9977 7.71259 41.0001 7.71137 41.0056 7.71442L42.9758 8.96259C43.0828 9.03093 43.2079 9.06539 43.3347 9.06147C43.4616 9.05755 43.5843 9.01543 43.6869 8.94061C43.793 8.8639 43.8735 8.75693 43.9178 8.6337C43.9621 8.51048 43.9682 8.37674 43.9353 8.25L43.3744 5.98132L45.1413 4.51068C45.2419 4.4269 45.3149 4.31479 45.3508 4.18894C45.3867 4.06309 45.3839 3.92935 45.3428 3.80512Z"
                        fill="#F5D13F"
                      ></path>
                      <path
                        d="M57.3428 3.80512C57.3037 3.68262 57.2287 3.57473 57.1275 3.49552C57.0262 3.41631 56.9034 3.36946 56.7751 3.36109L54.4552 3.19873L53.5946 1.03168C53.548 0.911872 53.4663 0.808931 53.3603 0.736341C53.2542 0.663751 53.1286 0.6249 53.0001 0.624878H52.9995C52.8712 0.625107 52.7459 0.664057 52.64 0.736636C52.5342 0.809215 52.4527 0.912044 52.4062 1.03168L51.5328 3.21124L49.2257 3.36109C49.0974 3.36946 48.9746 3.41631 48.8734 3.49552C48.7721 3.57473 48.6971 3.68262 48.6581 3.80512C48.6169 3.92935 48.6141 4.0631 48.65 4.18894C48.686 4.31479 48.7589 4.4269 48.8595 4.51068L50.6344 6.01093L50.1064 8.08765C50.07 8.22753 50.0767 8.37515 50.1256 8.51117C50.1745 8.64719 50.2634 8.76528 50.3805 8.84998C50.4936 8.93225 50.6288 8.97858 50.7686 8.98293C50.9083 8.98728 51.0462 8.94946 51.1642 8.87439L52.9952 7.71442C52.9977 7.71259 53.0001 7.71137 53.0056 7.71442L54.9758 8.96259C55.0828 9.03093 55.2079 9.06539 55.3347 9.06147C55.4616 9.05755 55.5843 9.01543 55.6869 8.94061C55.793 8.8639 55.8735 8.75693 55.9178 8.6337C55.9621 8.51048 55.9682 8.37674 55.9353 8.25L55.3744 5.98132L57.1413 4.51068C57.2419 4.4269 57.3149 4.31479 57.3508 4.18894C57.3867 4.06309 57.3839 3.92935 57.3428 3.80512Z"
                        fill="#F5D13F"
                      ></path>
                    </svg>
                  </span>
                  <p className="discount-offer-reviews">2 review</p>
                </div>
                <div className="discount-offer-quantity-selector-os">
                  <span
                    // onclick="decrement()"
                    className="discount-offer-quantity-increment-os"
                  >
                    -
                  </span>
                  <input type="text" placeholder="1"  />
                  <span className="discount-offer-quantity-decrement-os">+</span>
                </div>
                <a href="#" className="discount-offer-get-50per-off-btn-os">
                  GET 50% Off
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="marketplace-server-section-os">
          <div className="marketplace-server-data-row-os">
            <div className="marketplace-server-data-col-os-1">
              <img src="https://cdn.shopify.com/s/files/1/0268/0124/2288/files/marketplace-img.webp?v=1672908435" alt="" />
            </div>
            <div className="marketplace-server-data-col-os-2">
              <h2>Join the Marketplace Savers Club</h2>
              <p>arn points while you shop</p>
              <a href="#" className="marketplace-server-join-now-btn-os">
                Join Now
              </a>
              <a href="#" className="marketplace-server-learn-more-btn-os">
                Learn More
              </a>
            </div>
          </div>
        </section>

        <section className="recorder-get-15per-off-section-os">
          <div className="recorder-get-15per-off-data-row-os">
            <h2>Reorder and get 15% OFF!</h2>
            <a href="#" className="recorder-get-15per-off-join-now-btn-os">
              Join Now
            </a>
          </div>
        </section>
      </div> */}
      </div>
    </>
  );
};

export { LeftView };