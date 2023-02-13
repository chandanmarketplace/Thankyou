import React, { useContext, useEffect } from 'react'
import { updateSettings } from '../../Services/Settings.service';
import { AppStateContext } from '../AppStateContext';

const Bar = () => {
  const { inputConfig, shopId } = useContext(AppStateContext);

  // Saved changes alert on Save button
  useEffect(() => {
    document.querySelector("button.saveTemplate.Polaris-Button.Polaris-Button--primary.pull-right.editor-save-btn.customize-margin-left").onclick = function(){
      alert("Your Settings have been Saved")
    };
  }, []);

  // console.log(shopId)
  const queryParams = new URLSearchParams(window.location.search)
  // const shopId = queryParams.get("shop")
  return (
    <>
              <div className="RightSide d-flex col-12 align-items-center bg-white justify-content-evenly">
        <div className="col-6 text-start">
          <a
            className="Polaris-Button 5 polaris-right-ten-mrg custome-polaris-button-hover"
            data-id="help_video"
            tabIndex="-1"
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
              <g clipPath="">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
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
                    transhtmlform="translate(0 0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-end">
          <div className="customize-top-section postion-reletive width-80-top-bar">
            <div>
              <div>
                <button
                  className="Polaris-Button Polaris-Button-eee border-none box-shadow-none button-hover changeView"
                  type="button"
                  tabIndex="0"
                  aria-controls="Polarispopover20"
                  aria-owns="Polarispopover20"
                  aria-expanded="true"
                >
                  <span className="Polaris-Button__Content">
                    <span className="Polaris-Button__Text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.5 1C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V13.5C1 13.8978 1.15804 14.2794 1.43934 14.5607C1.72064 14.842 2.10218 15 2.5 15H7C7 15.525 6.985 15.793 6.856 16.053C6.736 16.292 6.44 16.663 5.553 17.106C5.34995 17.2076 5.18754 17.3753 5.09247 17.5816C4.99741 17.7878 4.97535 18.0202 5.02993 18.2406C5.08451 18.461 5.21247 18.6563 5.39277 18.7943C5.57308 18.9323 5.79499 19.0049 6.022 19H13.978C14.2068 19.0042 14.4301 18.9302 14.6111 18.7902C14.792 18.6502 14.9197 18.4525 14.973 18.23C15.0256 18.0073 15.0003 17.7732 14.9013 17.5669C14.8024 17.3605 14.6356 17.1944 14.429 17.096C13.556 16.657 13.263 16.29 13.144 16.053C13.014 15.793 13 15.525 13 15H17.5C17.8978 15 18.2794 14.842 18.5607 14.5607C18.842 14.2794 19 13.8978 19 13.5V2.5C19 2.10218 18.842 1.72064 18.5607 1.43934C18.2794 1.15804 17.8978 1 17.5 1H2.5ZM11.383 17C11.3738 16.9824 11.3648 16.9648 11.356 16.947C10.999 16.233 10.999 15.527 11 15.052V15H9V15.052C9 15.527 9.001 16.233 8.644 16.947C8.63518 16.9648 8.62618 16.9824 8.617 17H11.383ZM17 11H3V13H17V11Z"
                            fill="#5C5F62"
                          ></path>
                        </svg>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
              <div id="PolarisPortalsContainer" className="d-none">
                <div data-portal-id="popover-Polarisportal10">
                  <div
                    className="Polaris-PositionedOverlay Polaris-Popover__PopoverOverlay"
                    style={{top:" 44px", left:" 0px"}}
                  >
                    <div className="Polaris-Popover" data-polaris-overlay="true">
                      <div
                        className="Polaris-Popover__FocusTracker"
                        tabIndex="0"
                      ></div>
                      <div className="Polaris-Popover__Wrapper">
                        <div
                          tabIndex="-1"
                          className="Polaris-Popover__Content"
                          style={{height:" 98px"}}
                        >
                          <div
                            className="Polaris-Popover__Pane Polaris-Scrollable Polaris-Scrollable--vertical"
                            data-polaris-scrollable="true"
                          >
                            <div className="Polaris-ActionList">
                              <div className="Polaris-ActionList__Section--withoutTitle">
                                <ul className="Polaris-ActionList__Actions">
                                  <li>
                                    <a id="PolarisScrollTo6"></a>
                                    <a
                                      id="mobile-view"
                                      title="Mobile preview"
                                      type="button"
                                      className="Polaris-ActionList__Item"
                                    >
                                      <div className="Polaris-ActionList__Content">
                                        <div className="Polaris-ActionList__Prefix">
                                          <span className="Polaris-Icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3 1.5C3 0.7 3.7 0 4.5 0H15.5C16.3 0 17 0.7 17 1.5V18.5C17 19.3 16.3 20 15.5 20H4.5C3.7 20 3 19.3 3 18.5V1.5ZM5 2H15V16H5V2ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H11C11.2652 19 11.5196 18.8946 11.7071 18.7071C11.8946 18.5196 12 18.2652 12 18C12 17.7348 11.8946 17.4804 11.7071 17.2929C11.5196 17.1054 11.2652 17 11 17H9Z"
                                                fill="#5C5F62"
                                              ></path>
                                            </svg>
                                          </span>
                                        </div>
                                        <div className="Polaris-ActionList__Text">
                                          Mobile
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      id="desktop-view"
                                      title="Desktop preview"
                                      type="button"
                                      className="Polaris-ActionList__Item Polaris-ActionList--active"
                                    >
                                      <div className="Polaris-ActionList__Content">
                                        <div className="Polaris-ActionList__Prefix">
                                          <span className="Polaris-Icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.5 1C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V13.5C1 13.8978 1.15804 14.2794 1.43934 14.5607C1.72064 14.842 2.10218 15 2.5 15H7C7 15.525 6.985 15.793 6.856 16.053C6.736 16.292 6.44 16.663 5.553 17.106C5.34995 17.2076 5.18754 17.3753 5.09247 17.5816C4.99741 17.7878 4.97535 18.0202 5.02993 18.2406C5.08451 18.461 5.21247 18.6563 5.39277 18.7943C5.57308 18.9323 5.79499 19.0049 6.022 19H13.978C14.2068 19.0042 14.4301 18.9302 14.6111 18.7902C14.792 18.6502 14.9197 18.4525 14.973 18.23C15.0256 18.0073 15.0003 17.7732 14.9013 17.5669C14.8024 17.3605 14.6356 17.1944 14.429 17.096C13.556 16.657 13.263 16.29 13.144 16.053C13.014 15.793 13 15.525 13 15H17.5C17.8978 15 18.2794 14.842 18.5607 14.5607C18.842 14.2794 19 13.8978 19 13.5V2.5C19 2.10218 18.842 1.72064 18.5607 1.43934C18.2794 1.15804 17.8978 1 17.5 1H2.5ZM11.383 17C11.3738 16.9824 11.3648 16.9648 11.356 16.947C10.999 16.233 10.999 15.527 11 15.052V15H9V15.052C9 15.527 9.001 16.233 8.644 16.947C8.63518 16.9648 8.62618 16.9824 8.617 17H11.383ZM17 11H3V13H17V11Z"
                                                fill="#5C5F62"
                                              ></path>
                                            </svg>
                                          </span>
                                        </div>
                                        <div className="Polaris-ActionList__Text">
                                          Desktop
                                        </div>
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="Polaris-Popover__FocusTracker"
                        tabIndex="0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="customize-top-section SaveBtn customize-top-bar">
          <button type="button" className="saveTemplate Polaris-Button Polaris-Button--primary pull-right editor-save-btn customize-margin-left" onClick={() => {
            updateSettings({
              shopId,
              shopName: "NA",
              setting: inputConfig,
              html: {
                left: document.getElementById("left-view-html-code")?.innerHTML,
                right: document.getElementById("right-view-html-code").innerHTML,
              }
            }).then(res => {
              // console.log(res)
            })
          }}>Save</button>
            <span className="customize-margin-left Polaris-Badge add_draf_live_status Polaris-Badge--statuPolaris-Badge--progressComplete">
            <span className="Polaris-Badge__Pip"></span>Live-default template</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bar
