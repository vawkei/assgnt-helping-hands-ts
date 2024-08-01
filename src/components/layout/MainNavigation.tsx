import { useState } from "react";
import Card from "../ui/card/Card";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const showNavHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  const hideMenu = () => {
    setShowNav(false);
  };

  return (
    <Card className={classes["nav-container"]}>
      <div
        className={classes["h2-container"]}
        onClick={showNav ? hideMenu : undefined}>
        <Link to={"/"}>
          <h2>HELPINGHANDS.CASH</h2>
        </Link>
        <div className={classes.hamburger} onClick={() => showNavHandler()}>
          {/* &#9776; */}
          {showNav ? "×" : "☰"}
        </div>
      </div>
      <div
        className={
          showNav
            ? `${classes["nav-background-wrapper"]} ${classes["show-nav-background-wrapper"]}`
            : `${classes["nav-background-wrapper"]}`
        }
        onClick={hideMenu}></div>

      <nav>
        <ul
          className={
            showNav ? `${classes["show-nav"]} ` : `${classes["hide-nav"]}`
          }
          onClick={() => showNavHandler()}>
          <li>
            <Link to={"/matrix"}>
              <h3>Matrix</h3>
            </Link>
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
