import classes from "./ReferralTable.module.css";

const Countdown = () => {
  return (
    <div className={classes["countdown-container"]}>
      <div className={classes["top-buttons"]}>
        <button className={classes["usdt-button"]}>5 USDT</button>
        <button className={classes["usdt-button"]}>10 USDT</button>
        <button className={classes["usdt-button"]}>20 USDT</button>
      </div>
      <button className={classes["connect-wallet"]}>Connect Wallet</button>
      <h1 className={classes.title}>COUNTDOWN TO RENEWAL</h1>
      <div className={classes.timer}>
        <div className={classes["time-box"]}>
          <span className={classes["time-value"]}>00</span>
          <span className={classes["time-label"]}>Days</span>
        </div>
        <div className={classes["time-box"]}>
          <span className={classes["time-value"]}>00</span>
          <span className={classes["time-label"]}>Hours</span>
        </div>
        <div className={classes["time-box"]}>
          <span className={classes["time-value"]}>00</span>
          <span className={classes["time-label"]}>Minutes</span>
        </div>
        <div className={classes["time-box"]}>
          <span className={classes["time-value"]}>00</span>
          <span className={classes["time-label"]}>Seconds</span>
        </div>
      </div>
      <p className={classes.footer}>Connect your wallet to continue</p>
    </div>
  );
};

export default Countdown;
