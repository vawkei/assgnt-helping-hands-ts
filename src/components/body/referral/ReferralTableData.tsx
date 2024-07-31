import React, { useState } from "react";
import classes from "./ReferralTableData.module.css";
import Card from "../../ui/card/Card";

const ReferralTableData = () => {
  const [enteredUSDT, setEnteredUSDT] = useState<string>("");

  // onChangeEnteredUSDTHandler Function=====================================>
  const onChangeEnteredUSDTHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredUSDT(e.target.value);
  };

  //onSubmitUSDT Function==============================================>
  const onSubmitUSDT = (e: React.FormEvent) => {
    e.preventDefault();

    if (enteredUSDT.trim().length === 0) {
      return console.log("input field shouldn't be empty");
    }

    try {
      console.log(enteredUSDT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes["main-container"]}>
      <div className={classes.topBackground} />
      {/*============== left-hand side============================= */}
      <div className={classes["content"]}>
        <Card className={classes["left-section"]}>
          <form action="" onSubmit={onSubmitUSDT}>
            <div className={classes.control}>
              <label htmlFor="">Add USDT to metamask</label>
              <input
                type="text"
                onChange={onChangeEnteredUSDTHandler}
                value={enteredUSDT}
              />
              <button className={classes.btn}>APPROVE</button>
            </div>
            <div className={classes.control}>
              <label htmlFor="">Enter a valid referral address</label>
              <input type="text" placeholder="Enter address here" />
            </div>
          </form>
        </Card>

        {/*============== right-hand side============================= */}
        <Card className={classes["right-section"]}>
          <form action="" onSubmit={onSubmitUSDT}>
            <h4>Invite & Claim your Rewards</h4>

            <section className={classes["daily-rewards-section"]}>
              <div>
                <label>Daily rewards</label>
              </div>
              <div className={classes.action}>
                <button>Claim Rewards</button>
              </div>
              <div className={classes.pending}>
                <label>Pending:9.916316 USDT</label>
              </div>
              <div className={classes.paid}>
                <label>Paid:0 USDT</label>
              </div>
            </section>
            <div className={classes["boxes-below"]}>
              <Card className={classes.box}>
                <small>Referral-USDT</small>
                <h2>7.50</h2>
              </Card>
              <Card className={classes.box}>
                <small>Matrix-USDT</small>
                <h2>62.00</h2>
              </Card>
              <Card className={classes.box}>
                <small>Referral Count</small>
                <h2>6</h2>
              </Card>
              <Card className={classes.box}>
                <small>Referral with 3</small>
                <h2>3</h2>
              </Card>
            </div>
            <div className={classes.actionTwo}>
              <button>GIFT MEMBERSHIP</button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ReferralTableData;
