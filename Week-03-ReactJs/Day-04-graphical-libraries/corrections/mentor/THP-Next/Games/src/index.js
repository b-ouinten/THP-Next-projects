import './style/_index.scss';
import routes from './routes';

const appElement = document.getElementById('app');

const setRoute = () => {
    const path = window.location.hash.substring(1).split("/");

    const pageName = path[0] || "";
    const pageArgument = path[1] || undefined;

    appElement.innerHTML = '';

    if (!Object.keys(routes).includes(pageName)) {
        routes.notFound(appElement);
        return;
    }

    routes[pageName](appElement, pageArgument);
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
