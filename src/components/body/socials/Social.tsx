import classes from "./Socials.module.css";
import { RiInstagramFill } from "react-icons/ri";
import { RiTelegramFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";

const Socials = () => {
    return ( 
        <div className={classes["socials-container"]}>
            <RiInstagramFill size={28} className={classes.icons}/>
            <RiTelegramFill size={28} className={classes.icons} />
            <RiYoutubeFill size={28} className={classes.icons} />
        </div>
     );
}
 
export default Socials;