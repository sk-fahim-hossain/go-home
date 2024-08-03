import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Destination from "../components/Destination/Destination";
import Location from "../components/Location/Location";
import Blog from "../components/Blog/Blog";
import SingleBlog from "../components/Blog/SIngleBlog/SingleBlog";
import Contact from "../components/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/destination",
                element: <Destination />
            },
            {
                path: "/destination/:vehicle",
                element: <Destination />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog/:id",
                element: <SingleBlog />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/location",
                element: <Location />
            }
        ]
    }
])