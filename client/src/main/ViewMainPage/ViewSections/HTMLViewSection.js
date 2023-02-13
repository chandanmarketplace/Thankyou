import React from "react";

export const HTMLViewSection = ({html}) => {

return (<>
    <section className="refer-to-friend-section-os">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </section>
  </>)
}