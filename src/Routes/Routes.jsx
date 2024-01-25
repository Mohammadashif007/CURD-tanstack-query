import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Post from "../Pages/Post/Post";
import EditPage from "../Pages/EditPage/EditPage";

export  const route = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/post/:id',
        element: <Post></Post>
    },
    {
        path: '/post/:id/edit',
        element: <EditPage></EditPage>
    }
])