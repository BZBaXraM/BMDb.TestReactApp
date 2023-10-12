import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw Error("There is no root container");

const queryClient = new QueryClient();

createRoot(rootContainer).render(
    <StrictMode>
        {/*<Button variant='primary'>Click me!</Button>*/}
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </StrictMode>
);