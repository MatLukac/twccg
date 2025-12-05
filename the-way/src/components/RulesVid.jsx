import React from "react";

const RulesVid = ({ videoId }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-4xl m-2 overflow-hidden shadow-lg aspect-video rounded-xl">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default RulesVid;
