import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import App from "./App";
import AboutUsPage from "./Components/AboutUsPage";
import ContactUsPage from "./Components/ContactUsPage";
import PropertySearchPage from "./Components/Search/PropertySearchPage";
import ProjectsPage from "./Components/ProjectPage";

export const router = createBrowserRouter([
    {
        path : '',
        element : <App />,
        children : [
            {path : '/' , element : <Home />},
            {path : '/project' , element : <ProjectsPage />},
            {path : '/about' , element : <AboutUsPage />},
            {path : '/contact' , element : <ContactUsPage />},
            {path : 'search/:query' , element : <PropertySearchPage />}
        ]
    },
])