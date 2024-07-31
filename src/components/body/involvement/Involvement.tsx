import classes from "./Involvement.module.css";
import ChartIndex from "./ChartIndex";
// import PieChart from "./PieChart";

const Involvement = () => {
    return ( 
        <div className={classes["involvement-container"]}>
            <h1>YOUR INVOLVEMENT</h1>
            <p>Your involvement propels the cycle of support</p>
            <div>
                <ChartIndex />
            </div>
        </div>
     );
}
 
export default Involvement;