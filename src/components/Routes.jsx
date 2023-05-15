import App from "../App";
import Contact from "./Contact";

const routes = [
    {path: '/', element: <App/>},
    {path: '/contact', element:<Contact/>},
    {path: '*', element: <h1>Not Found</h1>},

]

export default routes;