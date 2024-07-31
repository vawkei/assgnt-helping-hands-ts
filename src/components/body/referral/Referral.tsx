import classes from "./Referral.module.css";
import ReferralTable from "./ReferralTable";

const Referral = () => {
  return (
    <div>
      <div className={classes.top}>
        <div className={classes.firstDiv}>
          <label>If you have no Referral Link, please use the address below:</label>
          <input placeholder="0x7291C4Ba40497139e0276a818bEB08E6e86Bdd69 " />
        </div>
        <div className={classes.secondDiv}>
          <label>Your Referral Link</label>
          <input placeholder="Connect your wallet first" />
        </div>
      </div>
      <div> <ReferralTable /> </div>
    </div>
  );
};

export default Referral;
