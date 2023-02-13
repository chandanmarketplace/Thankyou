import React from "react";

export const CollectionView = (props) => {
    // console.log(props);
    const {collectionTitleClr,
      collectionTitleFont,
      collectionTitleTransForm,
      collectionTitleFontBold,
      collectionTitleFontItallics,
      headingColor,
      headingFont,
      headingFontBold,
      headingFontItalics,
      headingText,
      headingTextTransform,
      collections} = props;

      console.log(collections)
    return ( <section className="product-collection-section-os">
    <div className="product-collection-heading-os" style={{
      color: headingColor,
      fontSize: headingFont + "px",
      textTransform: headingTextTransform,
      fontStyle: headingFontItalics ? "italic" : "normal",
      fontWeight: headingFontBold ? "700" : "400"
    }}>{headingText}</div>
    <div className="product-collection-data-row-os">

      {collections?.map(collection => (<div className="product-collection-data-col-os-1">
        <a href={"/collections/"+collection?.handle} className="product-collection-product-image-os">
          <img src={collection?.imgUrl} alt={collection?.label} />
        </a>
        <div className="product-collection-product-content-os">
          <div className="product-collection-name-os"
          style={{
            color: collectionTitleClr,
            fontSize: collectionTitleFont + "px",
            textTransform: collectionTitleTransForm,
            fontStyle: collectionTitleFontItallics ? "italic" : "normal",
            fontWeight: collectionTitleFontBold ? "700" : "400"
          }}
          >{collection?.label}</div>
        </div>
      </div>))}
    </div>
    <a href="/collections/all" className="you-may-interested-product-view-all-btn-os">
      View all
    </a>
  </section>)
}