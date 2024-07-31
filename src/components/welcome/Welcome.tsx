import VideoClip from "./VideoClip ";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes["welcome-container"]}>
      <div className={classes.welcomeText}>
        <h1 className={classes.firstH1}>WELCOME TO </h1>
        <h2>
          <span>HELPINGHANDS.CASH</span>
        </h2>
        <p>
          A groundbreaking decentralized platform, leveraging the BNB (Binance)
          Smart Chain, designed to elevate your financial opportunities through
          community support and blockchain innovation.
        </p>
      </div>
      <div className={classes.videoSection}>
        <VideoClip
          title={"Community-Driven Success: A New Way Forward"}
          videoSrc="https://www.youtube.com/watch?v=LZUZ8UDfLO8"
        />
      </div>
    </div>
  );
};

export default Welcome;
