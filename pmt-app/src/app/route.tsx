import { createBrowserRouter } from "react-router";
import Home from "../container/home/home";
import Project from "../container/project/project";
import App from "../App";
import Inbox from "../container/inbox/inbox";
import Task from "../container/task/task";
import Analytics from "../container/analytics/analytics";
import Notification from "../container/notification/notification";
import Profile from "../container/profile/profile";
import Chat from "../container/chat/chat";
import Setting from "../container/setting/setting";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App, // Sidebar + Header + Footer layout
        children: [
            { index: true, Component: Home },        // `/`
            { path: "home", Component: Home },       // `/home`
            { path: "projects", Component: Project },
            { path: "inbox", Component: Inbox },
            { path: "tasks", Component: Task },
            { path: "analytics", Component: Analytics },
            { path: "notifications", Component: Notification },
            { path: "profile", Component: Profile },
            { path: "chat", Component: Chat },
            { path: "settings", Component: Setting }


            
        ],
    },
])
