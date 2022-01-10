import { ReactNode } from "react";

interface Route {
    title: string,
    path: string,
    component?: ReactNode,
}

const routes: Route[] = [
    { title: 'route 1', path: 'route1', component: <div className="route">route 1 content</div> },
    { title: 'route 2', path: 'route2', component: <div className="route">route two content</div> },
    { title: 'route 3', path: 'route3', component: <div className="route">route three content</div> },
]

export default routes;