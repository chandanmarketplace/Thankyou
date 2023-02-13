import React from "react";
import { LeftView } from "./LeftView/LeftView";
import Bar from "../Components/Bar";
import "./ViewMainPage.css";
import { RightView } from "./RightView/RightView";
import ViewImageWithText from "./ViewSections/AddedImageWithText";
import AddedVideo from "./ViewSections/AddedVideo";
import { HTMLViewSection } from "./ViewSections/HTMLViewSection";
import { FreeTextView } from "./ViewSections/FreeTextView";
import { SocialMediaViews } from "./ViewSections/SocialMediaViews";
import { BirthdayCollectorView } from "./ViewSections/BirthdayCollectorView";
import { ProductRecommendationsView } from "./ViewSections/ProductRecommendationsView";
import { CollectionView } from "./ViewSections/CollectionView";
import { ProductUpsellView } from "./ViewSections/ProductUpsellView";
import { OrderConfirmation } from "./ViewSections/OrderConfirmation";
import {CustomerInfo} from "./ViewSections/CustomerInfo";

const getComponents = (props) => {
  console.log(props);
    const elementObj = {
      ImageWithText: (
        <ViewImageWithText
          img_url={props.img_url}
          free_text={props.free_text}
          redirect_url={props.redirect_url}
          img_alignment={props.img_alignment}
          img_layout={props.img_layout}
          bgColor={props.bgColor}
          borderRadius={props.borderRadius}
          space={props.space}
        />
      ),
      freeText: <FreeTextView freeText={props.free_text} />,
      collectionList: <CollectionView {...props} />,
      video: (
        <AddedVideo
          isChecked={props.ischecked}
          videoId={props.video_id}
          videoType={props.video_type}
          freeText={props.free_text}
        />
      ),
      html: <HTMLViewSection html={props?.html} />,
      dummy: <>{props.text}</>,
      SocialMediaLinks:<SocialMediaViews {...props} />,
      birthday: <BirthdayCollectorView {...props} />,
      productRecommendations: <ProductRecommendationsView {...props} />,
      upsell: <ProductUpsellView {...props} />,
      orderConfirmation: <OrderConfirmation {...props} />,
      customerInfo: <CustomerInfo {...props}/>
    };
    return elementObj[props.type];
  };

const ViewMainPage = () => {
  return (
    <>
      <div className="h-100 main">
        <Bar />
        <div className="content col-12 d-flex bg-white mt-3 h-80">
          <div className="col-6 eee-border-eee">
            <LeftView getComponents={getComponents} />
          </div>
          <div className="col-6 py-3 px-5">
            <RightView getComponents={getComponents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewMainPage;
