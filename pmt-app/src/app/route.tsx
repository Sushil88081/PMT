import { createBrowserRouter } from "react-router";
import Home from "../container/home/home";
import Project from "../container/project/project";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App, // Sidebar + Header + Footer layout
        children: [
            { index: true, Component: Home },        // `/`
            { path: "home", Component: Home },       // `/home`
            { path: "projects", Component: Project } // `/projects`
        ],
    },
])
