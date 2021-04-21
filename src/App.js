import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/Sidebar";
import Content from "./pages/Content";

const App = () => {
    // open first
    const [isOpen, setOpen] = useState(true);
    const [previousWidth, setPreviousWidth] = useState(-1);


    // updateWidth();

    useEffect(()=>{
        const updateWidth = () => {
            const width = window.innerWidth;
            const widthLimit = 576;
            const isMobile = width <= widthLimit;
            const wasMobile = previousWidth <= widthLimit;

            if (isMobile !== wasMobile) {
                setOpen(!isMobile);
            }

            setPreviousWidth(width);
        }

        updateWidth();
        /**
        * Add event listener
        */
        window.addEventListener("resize", updateWidth);
        /**
        * Remove event listener
        */
        return () => {
            window.removeEventListener("resize", updateWidth);
        }
    });

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="App wrapper">
            <SideBar toggle={toggle} isOpen={isOpen} />
            <Content toggle={toggle} isOpen={isOpen} />
        </div>
    );
}

export default App;
