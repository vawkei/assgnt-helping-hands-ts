import Card from "../ui/card/Card";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <Card className={classes["nav-container"]}>
      <Link to={"/"}><h2>HELPINGHANDS.CASH</h2></Link>
      <nav>
        <ul>
          <li>
            <Link to={"/matrix"}><h3>Matrix</h3></Link>
          </li>
          <li className={classes.connect}>
            <h3>Connect Wallet</h3>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MainNavigation;
