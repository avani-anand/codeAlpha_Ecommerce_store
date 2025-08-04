import { createBrowserRouter } from "react-router-dom";
import App  from "../App";
import Home from "../pages/Home";
import Search from "../components/Search";

 const router = createBrowserRouter([{
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "Search",
                element : <Search/>
                
            }
       ]
 }
])

export default router