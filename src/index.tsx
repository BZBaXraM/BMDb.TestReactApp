import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw Error("There is no root container");

createRoot(rootContainer).render(
    <StrictMode>
        <App/>
    </StrictMode>
);