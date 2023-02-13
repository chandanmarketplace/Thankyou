import React from "react";

export const FreeTextView = ({freeText}) => {

return (<>
    <section className="refer-to-friend-section-os">
        <div dangerouslySetInnerHTML={{ __html: freeText }}></div>
    </section>
  </>)
}