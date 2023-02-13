import React, { useContext, useEffect, useState } from "react";
import { addSettings, getSettings, getProducts, getCollections } from "../../Services/Settings.service";
import { AppStateContext } from "../AppStateContext";
import GeneralSettings from "./general-settings/GeneralSettings";
import { LeftListSection } from "./LeftListSection";
import { RightListSection } from "./RightListSection";
import "./SidePanel.css";

const SidePanel = () => {
  const { setInputConfig,setId, view, setView, shopId , setProducts, setCollections, id } = useContext(AppStateContext);
  // const queryParams = new URLSearchParams(window.location.search)
  // const shopId = queryParams.get("shop")

  const updateMax = (setting) => {
    let count = 0;
    setting?.left?.forEach(obj => {
      if (parseInt(obj?.id) > count) {
        count = parseInt(obj?.id) + 1;
      }
    })
    setting?.right?.forEach(obj => {
      if (parseInt(obj?.id) >= count) {
        count = parseInt(obj?.id) + 1;
      }
    })
    setId(count)
  }
  useEffect(() => {
    
    getSettings(shopId).then(res => {
      if (res.success) {
        if (res.data) {
          updateMax(res?.data?.setting)
          if (res?.data.setting?.left?.length === 0) {
            setInputConfig({
              left: [
                  {
                      label: "Order Confirmation",
                      type: "orderConfirmation",
                      disabled: true,
                      id: (id * +1) + (id * 2) + "order"
                  },
                  {
                      label: "Customer Information",
                      type: "customerInfo",
                      disabled: true,
                      id: id * +1 + id * 2 + "customerInfo"
                  }
              ],
              right: []
          });
          } else {
            setInputConfig(res?.data.setting);
          }
        } else {
          addSettings({
            shopId,
            shopName: "NA"
          }).then(res => {
            updateMax(res?.data?.setting)
            if (res?.data.setting?.left?.length === 0) {
              setInputConfig({
                left: [
                    {
                        label: "Order Confirmation",
                        type: "orderConfirmation",
                        disabled: true,
                        id: (id * +1) + (id * 2) + "order"
                    },
                    {
                        label: "Customer Information",
                        type: "customerInfo",
                        disabled: true,
                        id: id * +1 + id * 2 + "customerInfo"
                    }
                ],
                right: []
            });
            } else {
              setInputConfig(res?.data.setting);
            }
          })
        }

      }
      // console.log(res)
    })

    getProducts(shopId).then(res => {
      // console.log(res.data.data)
      
      let products = [];

      for(let product of res.data.data){
        let obj = {
          label: product.title,
          value: product.id,
          imgUrl: product?.image?.src,
          name: product.title,
          stars: "3",
          reviewCount: "2",
          price: product.variants[0].price,
          handle: product.handle,
          variants: product.variants
        }
        products.push(obj)
      }

      // console.log(products)

      setProducts(products)
    })

    getCollections(shopId).then(res => {
      console.log("Getting Data Collections")
      console.log(res.data.data)
      let collections = [];

      for(let collection of res.data.data.body.data.collections.nodes){
        let obj = {
          label: collection.title,
          value: collection.id,
          imgUrl: collection?.image?.src,
          name: collection.title,
          handle: collection.handle,
          stars: "3",
          reviewCount: "2",
          price: "$129",
        }
        collections.push(obj)
      }
      setCollections(collections)
    })
  }, [])

  const viewRight = () => {
    setView("right");
  };
  const viewLeft = () => {
    setView("left");
  };
  const viewGeneral = () => {
    setView("general");
  };

  if (view === "left") {
    return (
      <div className={`LeftArea h-100 `}>
        <LeftListSection closeFunction={setView} />
      </div>
    );
  } else if (view === "right") {
    return (
      <div className={`RightArea h-100 `}>
        <RightListSection closeFunction={setView} />
      </div>
    );
  } else if (view === "general") {
    return (
      <div className={`GenralSettings h-100 `}>
        <GeneralSettings closeFunction={setView} />
      </div>
    );
  }

  return (
    <>
      <div className={`default d-block`}>
        <div className="h-100 header-LeftSide d-flex col-12 align-items-center bg-white">
          <button className="exit currentPageTitle polaris-custom-back" >
            <svg
              viewBox="0 0 20 20"
              className="Polaris-Icon-back-menu"
              focusable="false"
              aria-hidden="true"
            >
              <path d="M1 0a1 1 0 00-1 1v3a1 1 0 002 0V2h16v16H2v-2a1 1 0 10-2 0v3a1 1 0 001 1h18a1 1 0 001-1V1a1 1 0 00-1-1H1z"></path>
              <path d="M6.414 9H14a1 1 0 110 2H6.414l3.293 3.293a.999.999 0 11-1.414 1.414l-5-5a.999.999 0 010-1.414l5-5a.999.999 0 111.414 1.414L6.414 9z"></path>
            </svg>
            <span>Exit</span>
          </button>
          <div className="template-title-text template-title">
            Empty template
          </div>
        </div>

        <div className="bottomContent-LefSide py-3">
          <ul className="nav custom-box-editor pb-1">
            <li
              onClick={() => {
                viewLeft();
              }}
              id="element-roll-608302"
              data-id="608302"
              data-slide-to="row-608302"
              className="reconvertSectionsCarousel list-group-item slide-to"
              title="Left Area"
            >
              <span className="Polaris-Icon icon disply-unset editor-set-icon">
                <svg
                  className="icon-postion"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M2.5 18L9 18L9 -3.49691e-07L2.5 -6.55671e-08C2.10217 -4.81776e-08 1.72064 0.158036 1.43934 0.439341C1.15803 0.720645 0.999999 1.10218 0.999999 1.5L1 16.5C1 16.8978 1.15804 17.2794 1.43934 17.5607C1.72064 17.842 2.10218 18 2.5 18V18ZM19 17C19 17.2652 18.8946 17.5196 18.7071 17.7071C18.5196 17.8946 18.2652 18 18 18L16 18L16 16L17 16L17 15L19 15L19 17ZM18 -7.43094e-07C18.2652 -7.54687e-07 18.5196 0.105355 18.7071 0.292892C18.8946 0.480428 19 0.734783 19 0.999999L19 3L17 3L17 2L16 2L16 -6.55671e-07L18 -7.43094e-07ZM14 18L11 18L11 16L14 16L14 18ZM11 2L14 2L14 -5.68248e-07L11 -4.37114e-07L11 2ZM17 13L17 10L19 10L19 13L17 13ZM17 5L17 8L19 8L19 5L17 5Z"
                      fill="#637381"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transhtmlform="translate(0 18) rotate(-90)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="title" data-key="608302_title">
                Left Area
              </span>
            </li>
          </ul>

          <ul className="nav custom-box-editor pb-1">
            <li
              onClick={() => {
                viewRight();
              }}
              id="element-roll-608303"
              data-id="608303"
              data-slide-to="row-608303"
              className="reconvertSectionsCarousel list-group-item slide-to"
              title="Right Area "
            >
              <span className="Polaris-Icon icon disply-unset editor-set-icon">
                <svg
                  className="icon-postion"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M15.5 -6.55671e-08L9 -3.49691e-07L9 18L15.5 18C15.8978 18 16.2794 17.842 16.5607 17.5607C16.842 17.2794 17 16.8978 17 16.5L17 1.5C17 1.10218 16.842 0.720644 16.5607 0.43934C16.2794 0.158035 15.8978 -4.81776e-08 15.5 -6.55671e-08V-6.55671e-08ZM-1 0.999999C-1 0.734783 -0.894644 0.480429 -0.707108 0.292892C-0.519571 0.105356 -0.265216 -7.54687e-07 0 -7.43094e-07L2 -6.55671e-07L2 2L1 2L1 3L-1 3L-1 0.999999ZM-7.86805e-07 18C-0.265217 18 -0.519572 17.8946 -0.707108 17.7071C-0.894645 17.5196 -1 17.2652 -1 17L-1 15L0.999999 15L0.999999 16L2 16L2 18L-7.86805e-07 18ZM4 -5.68248e-07L7 -4.37114e-07L7 2L4 2L4 -5.68248e-07ZM7 16L4 16L4 18L7 18L7 16ZM1 5L1 8L-1 8L-1 5L1 5ZM0.999999 13L1 10L-1 10L-1 13L0.999999 13Z"
                      fill="#637381"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transhtmlform="translate(18) rotate(90)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="title" data-key="608303_title">
                Right Area 
              </span>
            </li>
          </ul>

          <div className="nav custom-box-editor panel-line-spacer">
            <span></span>
          </div>

          <ul className="nav custom-box-editor pt-2">
            <li
              onClick={() => {
                viewGeneral();
              }}
              data-id="general-settings"
              data-slide-to="general-settings"
              className="reconvertSectionsCarousel kk list-group-item slide-to"
              title="General settings"
            >
              <svg
                className="Polaris-Icon icon disply-unset editor-set-icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.02712 0C8.78633 2.31057e-06 8.55363 0.0868852 8.37176 0.244689C8.18989 0.402492 8.07107 0.620619 8.03712 0.859L7.66712 3.457C6.97019 3.72296 6.32031 4.0987 5.74212 4.57L3.30512 3.59C3.08167 3.5002 2.83332 3.49405 2.60571 3.57268C2.37809 3.6513 2.18649 3.80943 2.06612 4.018L0.934116 5.981C0.813588 6.18944 0.772312 6.43437 0.817871 6.67079C0.86343 6.90722 0.992764 7.11927 1.18212 7.268L3.24812 8.889C3.13083 9.62502 3.13083 10.375 3.24812 11.111L1.18212 12.732C0.992764 12.8807 0.86343 13.0928 0.817871 13.3292C0.772312 13.5656 0.813588 13.8106 0.934116 14.019L2.06612 15.981C2.18649 16.1896 2.37809 16.3477 2.60571 16.4263C2.83332 16.505 3.08167 16.4988 3.30512 16.409L5.74312 15.43C6.32072 15.9011 6.96991 16.2768 7.66612 16.543L8.03812 19.141C8.07207 19.3794 8.19089 19.5975 8.37276 19.7553C8.55463 19.9131 8.78733 20 9.02812 20H11.2931C11.5339 20 11.7666 19.9131 11.9485 19.7553C12.1303 19.5975 12.2492 19.3794 12.2831 19.141L12.6541 16.543C13.3506 16.2772 14.0001 15.9018 14.5781 15.431L17.0161 16.409C17.2394 16.4985 17.4876 16.5045 17.7149 16.4259C17.9423 16.3473 18.1338 16.1893 18.2541 15.981L19.3871 14.019C19.5075 13.8104 19.5487 13.5654 19.5029 13.329C19.4572 13.0926 19.3276 12.8806 19.1381 12.732L17.0731 11.111C17.1904 10.375 17.1904 9.62503 17.0731 8.889L19.1381 7.268C19.3276 7.11941 19.4572 6.90743 19.5029 6.67099C19.5487 6.43455 19.5075 6.18955 19.3871 5.981L18.2541 4.019C18.1337 3.81043 17.9421 3.6523 17.7145 3.57368C17.4869 3.49505 17.2386 3.5012 17.0151 3.591L14.5781 4.57C14.0002 4.09881 13.3507 3.72307 12.6541 3.457L12.2831 0.86C12.2492 0.621619 12.1303 0.403492 11.9485 0.245689C11.7666 0.0878852 11.5339 0.00100231 11.2931 0.001H9.02712V0ZM10.1601 13C10.9558 13 11.7188 12.6839 12.2814 12.1213C12.844 11.5587 13.1601 10.7956 13.1601 10C13.1601 9.20435 12.844 8.44129 12.2814 7.87868C11.7188 7.31607 10.9558 7 10.1601 7C9.36447 7 8.60141 7.31607 8.0388 7.87868C7.47619 8.44129 7.16012 9.20435 7.16012 10C7.16012 10.7956 7.47619 11.5587 8.0388 12.1213C8.60141 12.6839 9.36447 13 10.1601 13Z"
                  fill="#5C5F62"
                ></path>
              </svg>
              <span className="title">General settings</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
