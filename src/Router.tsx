import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Project from "./pages/project/project";

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;