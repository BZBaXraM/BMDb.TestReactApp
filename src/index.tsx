import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "./App";

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw Error("There is no root container");

const queryClient = new QueryClient();

createRoot(rootContainer).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </StrictMode>
);