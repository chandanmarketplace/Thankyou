import React from "react";
import ReactPlayer from "react-player"

const AddedVideo = ({ isChecked, videoId, videoType, freeText }) => {
  // console.log(isChecked, videoId, videoType, freeText);
  return (
    <>
      <div className="addedVideo-section-os row col-12 justify-content-center align-items-center py-3">
        <div dangerouslySetInnerHTML={{ __html: freeText }}></div>
        {videoId && (
          <>
            {videoType === "vimeo" ? (
              <ReactPlayer
              url={`https://vimeo.com/${videoId}`}
              className='react-player'
              playing
              width='100%'
              height='100%'
              controls={true}
              config={{
                vimeo: {
                  autoplay: isChecked
                }
              }}
            />
            ) : (
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=${
                  isChecked == true ? 1 : 0
                }`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                autoPlay
              ></iframe>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default AddedVideo;
