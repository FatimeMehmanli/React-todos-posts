import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import SingleUser from "../pages/SingleUser";
import Posts from "../pages/Posts";
import Todos from "../pages/todos";

export const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/user/:id",
        element: <SingleUser />
    },
    {
        path: "/posts/:id",
        element: <Posts />
    },
    {
        path: "/todos/:id",
        element: <Todos />
    }
])