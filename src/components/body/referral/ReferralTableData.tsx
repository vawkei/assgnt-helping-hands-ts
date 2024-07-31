import React, { useState } from "react";
import classes from "./ReferralTableData.module.css";

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
    <div>
      <div className={classes.topBackground}></div>
      <div className={classes["left-section"]}>
        <form action="" onSubmit={onSubmitUSDT}>
          <div className={classes.control}>
            <label htmlFor="">Add USDT to metamask</label>
            <input
              type="text"
              onChange={onChangeEnteredUSDTHandler}
              value={enteredUSDT}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="">Enter a valid referral address</label>
            <input type="text" placeholder="Enter address here" />
          </div>
        </form>
      </div>
      <div className={classes["right-section"]}>
            
      </div>
    </div>
  );
};

export default ReferralTableData;
