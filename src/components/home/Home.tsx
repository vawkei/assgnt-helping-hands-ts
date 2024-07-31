import classes from "./Home.module.css";
import Welcome from "../welcome/Welcome";
import Unlock from "../body/unlock/Unlock";
import Involvement from "../body/involvement/Involvement";

const Home = () => {
    return ( 
        <div className={classes["home-container"]}>
            <Welcome />
            <Unlock />
            <Involvement />
        </div>
     );
}
 
export default Home;