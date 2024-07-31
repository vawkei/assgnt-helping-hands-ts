import classes from "./MatrixBody.module.css"

const MatrixBody = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h1>Matrix</h1>
        <h4>This is your Matrix Page</h4>
      </div>
      <div className={classes.body}>
        <p>
          The Community Matrix is where you can see the members who have joined
          you and the members who have joined them in HelpingHands.cash Matrix.
        </p>
        <p>
          Notice that all members are identified with their USDT wallet
          addresses.
        </p>
      </div>
      <div className={classes.action}>
        <button className={classes.btn}>Connect Wallet</button>
      </div>
    </div>
  );
};

export default MatrixBody;
