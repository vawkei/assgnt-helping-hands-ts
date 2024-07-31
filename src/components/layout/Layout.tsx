import React from "react";
import MainNavigation from "./MainNavigation";
import MainFooter from "./MainFooter";
import Socials from "../body/socials/Social";

const Layout:React.FC<{children:React.ReactNode}> = (props) => {
    return ( 
        <div>
            <MainNavigation />
            <main style={{width:"100%"}}>{props.children}</main>
            <Socials />
            <MainFooter />
        </div>
     );
}
 
export default Layout;