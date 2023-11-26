import Home from "../pages/Home";
import About from "../pages/About";

interface RoutingItem {
    path: string;
    element: JSX.Element;
}

const Routing: RoutingItem[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
];

export default Routing;