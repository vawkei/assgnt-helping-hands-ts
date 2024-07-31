import classes from "./Matrix.module.css"
import MatrixBody from "./MatrixBody";

const Matrix = () => {
    return ( 
        <div className={classes["matrix-container"]}>
            {/* <h1>The Matrix</h1> */}
            <MatrixBody />
        </div>
     );
}
 
export default Matrix;