import React, { useEffect, useState } from "react";

const ViewImageWithText = ({
  img_url="",
  free_text,
  redirect_url,
  img_alignment,
  img_layout = "square",
  bgColor,
  borderRadius,
  space,
}) => {

  const SectionOne = () => (
    <div className="refer-to-friend-data-col-os-1">
      <a href={redirect_url}>
      <img src={img_url || "https://cdn.stilyoapps.com/v1/assets/img/placeholder.png"} style={img_alignment !== "right" ? {borderTopLeftRadius: borderRadius + "px", borderBottomLeftRadius: borderRadius + "px"} : {borderTopRightRadius: borderRadius + "px", borderBottomRightRadius: borderRadius + "px"}} alt="" />
      </a> </div>
  );
  const SectionOneCircle = () => (
    <div className="refer-to-friend-data-col-os-1">
      <img style={{ borderRadius: "50%" }} src={img_url} alt="" />
    </div>
  );

  const SectionTwo = () => (
    <div className="refer-to-friend-data-col-os-2">
      <div className="refer-to-friend-text-os" dangerouslySetInnerHTML={{ __html: free_text }}></div>
      <a href="#" className="refer-to-friend-Learn-more-btn-os">
        Learn More
      </a>
    </div>
  );

  return (
    <>
      <section className="refer-to-friend-section-os">
        <div className="refer-to-friend-data-row-os" style={{backgroundColor: bgColor, borderRadius: borderRadius + "px"}}>
          {img_alignment !== "right" ? (
            <>
              {img_layout === "square" ? <SectionOne />: <SectionOneCircle />}
              <SectionTwo />
            </>
          ) : (
            <>
              <SectionTwo />
              {img_layout === "square" ? <SectionOne />: <SectionOneCircle />}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ViewImageWithText;

/** Before backup
return (
  <>
    {" "}
    <div
      className={`col-12 row py-3 m-0 justify-content-center align-items-center ${
        props.img_alignment == "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="col-6">
        <a href={props.redirect_url}>
          <img
            className={`img-fluid rounded-${props.img_layout}`}
            src={props.img_url}
            alt=""
          />
        </a>
      </div>
      <div className="col-6">
        <div dangerouslySetInnerHTML={{ __html: props.free_text }}></div>{" "}
      </div>
    </div>
  </>
);
 */
