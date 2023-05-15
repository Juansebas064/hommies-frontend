import App from "../App";
import Contact from "./Contact";
import Calendar from "./Calendar";

const routes = [
    {path: '/', element: <App/>},
    {path: '/contact', element:<Contact/>},
    {path: '/calendar', element:<Calendar/>},
    {path: '*', element: <h1>Not Found</h1>},

]

export default routes;