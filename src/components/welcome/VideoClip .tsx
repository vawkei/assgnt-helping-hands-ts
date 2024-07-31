import React from "react";
import classes from "./VideoClip.module.css";

// interface VideoComponentProps {
//     videoSrc: string;
//     title: string;
//   }


const VideoClip: React.FC<{ title: string; videoSrc: string }> = (props) => {

    const videoId = props.videoSrc.split("v=")[1];
    const embeddedUrl = `https://www.youtube.com/embed/${videoId}`

    return (
    <div className={classes["videoContainer"]}>
      <h2>{props.title}</h2>
      <div className={classes.videoWrapper}>
        <iframe
          className={classes.video}
          src={embeddedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={props.title}></iframe>
      </div>
    </div>
  );
};

export default VideoClip;
