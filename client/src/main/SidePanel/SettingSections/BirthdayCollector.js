import "../SidePanel.css"
import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const BirthdayCollector = (props) => {


  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );


  const {updateConfig, dataset, type, deleteFromConfig} = props;
  const [value, setValue] = useState(props.data);

  useEffect(() => {
    setValue(dataset);
  }, [dataset])

  const handleFreeTextEvent = (html) => {
    updateConfig(type,{...dataset, free_text: html } )
  }

  const handleChange = (value, key) => {
    updateConfig(type,{...dataset, [key]: value } )
  }
  return (
    <>
      <div>
        <div className="header-LeftSide d-flex col-12 align-items-center bg-white">
          <a
            onClick={props.takeBack}
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
          </a>
          <div className="template-title-text template-title">Birthday Collector</div>
        </div>
      </div>
      <div className="d-flex flex-column border-custom-rownd-border mx-3 mt-3">
        <div
          data-target="#reconvertSectionsCarousel"
          data-id="row-608302"
          data-slide-to="row-608302"
          className="select-product-css-new slide-to col-12"
          title="Image with text"
        >
          <span
            onClick={props.takeBack}
            className="hover-button-close slide-to item-panel-product-list"
            data-slide-to="row-608302"
          >
            <svg
              viewBox="0 0 20 20"
              className="editor-icon-close"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z"
                fill="#5c5f62"
              ></path>
            </svg>
          </span>
          <span>Birthday Collector</span>
        </div>

        <div className="panel-body cust-min-height bg-white">
          <label className="custom-label-css padd-top-13px-flex">
            Settings
            <div>
              {" "}
              <a
                className="Polaris-Button 2 custome-polaris-button-hover"
                tabindex="-1"
              >
                {" "}
                Help video&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="">
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M10 19.5C15.523 19.5 20 15.2469 20 10C20 4.75315 15.523 0.5 10 0.5C4.477 0.5 0 4.75315 0 10C0 15.2469 4.477 19.5 10 19.5ZM8 7.0189V12.9811C8.00003 13.0643 8.02305 13.146 8.06676 13.2181C8.11047 13.2901 8.17334 13.3501 8.24907 13.3918C8.32481 13.4335 8.41075 13.4557 8.49831 13.4559C8.58587 13.4562 8.67197 13.4347 8.748 13.3934L14.24 10.4123C14.3165 10.3707 14.38 10.3107 14.4242 10.2383C14.4684 10.1659 14.4917 10.0837 14.4917 10C14.4917 9.9163 14.4684 9.83409 14.4242 9.76169C14.38 9.68928 14.3165 9.62926 14.24 9.5877L8.748 6.60565C8.6719 6.56435 8.5857 6.54278 8.49806 6.54311C8.41042 6.54343 8.3244 6.56563 8.24864 6.60749C8.17288 6.64935 8.11002 6.70939 8.06639 6.7816C8.02275 6.8538 7.99985 6.93564 8 7.0189Z"
                      fill="#5C5F62"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="20"
                        height="19"
                        fill="white"
                        transform="translate(0 0.5)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>{" "}
            </div>
          </label>

          <div className="form-group mx-3 my-3 bg-white text-start">
            <div className="select-ft mb-3">
              <label
                for="image_alignment2463415"
                className="control-label mb-1 fs-6"
              >
                Free Text
              </label>
              <Editor
                editorState={editorState}
                onEditorStateChange={(e) => {
                    setEditorState(e);
                    handleFreeTextEvent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
                  }}
              />
            </div>

            <div className="select-ia">
              <label
                for="image_alignment2463415"
                className="control-label mb-1 fs-6"
              >
                Date Format
              </label>
              <select className="form-select form-select-sm mb-3 " defaultValue={value?.dateFormat} value={value?.dateFormat}
               onChange={(e) => {
                handleChange(e.target.value, "dateFormat")
              }}>
                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                <option value="yyyy/dd/mm">YYYY/DD/MM</option>
                <option value="yyyy/mm/dd">YYYY/MM/DD</option>
              </select>
            </div>
            <label htmlFor="basic-url" className="form-label">
              Placeholder Text
            </label>
            <div className="input-group mb-3">
              <input
                value={value?.placeHolderText}
                defaultvalue={value?.placeHolderText}
                type="text"
                className="form-control"
                id="PlaceholderText"
                aria-describedby="basic-addon3"
                onChange={(e) => {
                    handleChange(e.target.value, "placeHolderText")
                  }}
              />
            </div>

            <label htmlFor="basic-url" className="form-label">
              Button Text
            </label>
            <div className="input-group mb-3">
              <input
                value={value?.buttonText}
                defaultvalue={value?.buttonText}
                type="text"
                className="form-control"
                id="ButtonText"
                aria-describedby="basic-addon3"
                onChange={(e) => {
                    handleChange(e.target.value, "buttonText")
                  }}
              />
            </div>
            {/* Button Background Color */}
            <div className="color-picker d-flex align-item-center gap-3 mb-3">
                 <input type="color" name="favcolor"
                 value={value?.buttonBg}
                 defaultvalue={value?.buttonBg}
                  onChange={(e) => {
                    handleChange(e.target.value, "buttonBg")
                  }}
                 />
                 <label
                    for="image_alignment2463415"
                    className="control-label mb-1 fs-6"
                    >
                    Button Background Color
                </label>

            </div>
            {/* Button Text Color */}
            <div className="color-picker d-flex align-item-center gap-3 mb-3">
                 <input type="color" name="favcolor"
                 value={value?.buttonTextColor}
                 defaultvalue={value?.buttonTextColor}
                  onChange={(e) => {
                    handleChange(e.target.value, "buttonTextColor")
                  }}
                   />
                 <label
                    for="image_alignment2463415"
                    className="control-label mb-1 fs-6"
                    >
                    Button Text Color
                </label>

            </div>
            {/* Thank You Message */}
            <label for="basic-url" className="form-label">
              Thank You Message Text
            </label>
            <div className="input-group mb-3">
              <input
                value={value?.thankyouText}
                defaultvalue={value?.thankyouText}
                 onChange={(e) => {
                   handleChange(e.target.value, "thankyouText")
                 }}
                type="text"
                className="form-control"
                id="PlaceholderText"
                aria-describedby="basic-addon3"
              />
            </div>
             {/* Thank You Message Text Color */}
            <div className="color-picker d-flex align-item-center gap-3 mb-3">
                 <input type="color" name="favcolor"
                 value={value?.thankyouTextClr}
                 defaultvalue={value?.thankyouTextClr}
                  onChange={(e) => {
                    handleChange(e.target.value, "thankyouTextClr")
                  }} />
                 <label
                    for="image_alignment2463415"
                    className="control-label mb-1 fs-6"
                    >
                    Thank You Message Text Color
                </label>

            </div>

            {/* Error Message */}
            <label for="basic-url" className="form-label">
              Error Message Text
            </label>
            <div className="input-group mb-3">
              <input
                value={value?.errorMsgText}
                defaultvalue={value?.errorMsgText}
                 onChange={(e) => {
                   handleChange(e.target.value, "errorMsgText")
                 }}
                type="text"
                className="form-control"
                id="PlaceholderText"
                aria-describedby="basic-addon3"
              />
            </div>
            {/* Error Message Text Color */}
            <div className="color-picker d-flex align-item-center gap-3 mb-3">
                 <input type="color" name="favcolor"
                 value={value?.errorMsgClr}
                 defaultvalue={value?.errorMsgClr}
                  onChange={(e) => {
                    handleChange(e.target.value, "errorMsgClr")
                  }}
                   />
                 <label
                    for="image_alignment2463415"
                    className="control-label mb-1 fs-6"
                    >
                    Error Message Text Color
                </label>

            </div>



          </div>
        </div>

        <div className="custom-me-new-find bg-white px-3 py-2">
          <a
            data-path="section-selector.php?method_name=deleted&amp;section=Image with text&amp;row_id=608302&amp;row_section_id=2463415&amp;shop=developement-store-test.myshopify.com"
            className="section_deleted margin-left-0-CSS Polaris-Button Polaris-Button--outline"
            data-common-section="section_delete[5][2463415]"
            tabindex="-1"
            href="#"
            onClick={()=> {
              deleteFromConfig(type, dataset);
              props.takeBack();
            }}
          >
            <span className="Polaris-Icon margin-right-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M7.2002 3.59459C7.2002 2.60369 8.0057 1.79999 9.0002 1.79999C9.9947 1.79999 10.8002 2.60369 10.8002 3.59459H14.4002C14.897 3.59459 15.3002 3.99599 15.3002 4.49189C15.3002 4.98689 14.897 5.38919 14.4002 5.38919H3.6002C3.1034 5.38919 2.7002 4.98689 2.7002 4.49189C2.7002 3.99689 3.1034 3.59459 3.6002 3.59459H7.2002ZM4.5002 13.0572V7.19999H6.3002V13.0572C6.30067 13.1762 6.34829 13.2902 6.43263 13.3742C6.51697 13.4582 6.63116 13.5054 6.7502 13.5054H8.1002V7.19999H9.9002V13.5054H11.2502C11.3692 13.5054 11.4834 13.4582 11.5678 13.3742C11.6521 13.2902 11.6997 13.1762 11.7002 13.0572V7.19999H13.5002V13.0572C13.4997 13.3522 13.4412 13.6442 13.3278 13.9166C13.2145 14.1889 13.0486 14.4363 12.8397 14.6446C12.6308 14.8528 12.3829 15.0179 12.1101 15.1304C11.8374 15.2428 11.5452 15.3005 11.2502 15.3H6.7502C5.5082 15.3 4.5002 14.2956 4.5002 13.0572Z"
                  fill="#5C5F62"
                ></path>
              </svg>
            </span>
            Delete section
          </a>

          <a
            className={"hide-show custom-hide-show"+ (value?.hide ? " cross-eye " : "")}
            value="section-selector.php?shop=developement-store-test.myshopify.com&amp;method_name=enable_disable&amp;section=Image with text&amp;status=1&amp;row_section_id=2463415"
            title="Hide"
            onClick={()=> {
              if (value?.hide) {
                updateConfig(type,{...dataset, hide: false } )
              } else {
                updateConfig(type,{...dataset, hide: true } )
              }
            }}
          >
            <span className="Polaris-Icon">
              <svg className="editor-icon enable-disable" viewBox="0 0 20 20">
                <path
                  className="eye_icon"
                  d="M17.928 9.628C17.836 9.398 15.61 4 9.998 4S2.163 9.4 2.07 9.628a1.017 1.017 0 0 0 0 .744C2.162 10.602 4.387 16 10 16s7.836-5.4 7.928-5.628a1.017 1.017 0 0 0 0-.744zM9.998 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6A2 2 0 1 0 10 12a2 2 0 0 0 0-4z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div
        className="Polaris-Banner Polaris-Banner--statusWarning Polaris-Banner--withinPage margin-bot-20px mt-3 mx-3 py-lg-4 py-3 px-3"
        tabindex="0"
        role="alert"
        aria-live="polite"
        aria-labelledby="PolarisBanner4Heading"
        aria-describedby="PolarisBanner4Content"
      >
        <div className="Polaris-Banner__ContentWrapper">
          <div className="Polaris-Banner__Content" id="PolarisBanner10Content">
            <p className="text-start m-0" style={{ fontSize: "14px" }}>
              Note: by deleting this section all past analytics data will be
              lost. If you want to keep your data, just hide this section using
              the eye icon.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { BirthdayCollector};
