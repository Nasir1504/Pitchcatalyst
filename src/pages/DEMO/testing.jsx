import React, { useEffect, useState } from "react";
import "./testing.scss";

const Testing = () => {
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        let container = document.getElementById("container");
        let left = document.getElementById("left_panel");
        let right = document.getElementById("right_panel");

        document.onmousemove = function (e) {
            // we don't want to do anything if we aren't resizing.
            if (!isResizing) {
                return;
            }

            var offsetRight =
                container.clientWidth - (e.clientX - container.offsetLeft);

            left.style.right = offsetRight + "px";
            right.style.width = offsetRight + "px";
        };


    }, [isResizing]);

    return (

        <body>
            <div id="container" onMouseUp={() => { setIsResizing(false) }}>
                <div id="left_panel">

                    <div>

                        left content!
                    </div>
                </div>
                <div id="right_panel">
                    <div id="drag"
                        onMouseDown={() => { setIsResizing(true) }}
                    ></div>
                    <div>

                        right content!

                    </div>
                </div>
            </div>
        </body>
    );
};

export default Testing;

