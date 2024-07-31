import Referral from "../referral/Referral";
import CardContent from "./CardContent";
import classes from "./Unlock.module.css";

const Unlock = () => {
  const cardContent = [
    {
      id: "1",
      heading: "Instant Referrals",
      content:
        "Receive 25% directly to your USDT wallet for each person you invite.",
    },
    {
      id: "2",
      heading: "Dynamic Matrix Gains",
      content:
        "Benefit from a 50% redistribution within the HelpingHands.cash Matrix that supports everyone's growth.",
    },
    {
      id: "3",
      heading: "Consistent Rewards",
      content:
        "Qualify for Daily Recurring Rewards, making every day a step towards financial empowerment.",
    },
  ];

  return (
    <div className={classes["unlock-container"]}>
      <div className={classes.top}>
        <h1>UNLOCK YOUR POTENTIAL</h1>
        <p>
          Unlock your potential to receive USDT with these three straightforward
          avenues
        </p>
      </div>
      <div className={classes["cardContent"]}>
        {cardContent.map((content) => {
          return (
            <CardContent
              id={content.id}
              key={content.id}
              heading={content.heading}
              content={content.content}
            />
          );
        })}
      </div>
      <div className={classes["referral-section"]}>
        <p>
          With HelpingHands.cash, your membership seamlessly renews every 30
          days, ensuring you're always in the loop of opportunity.
        </p>
        <Referral />
      </div>
    </div>
  );
};

export default Unlock;
