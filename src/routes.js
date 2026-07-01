import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import UseStatePage from "./pages/useStatePage";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/useState" element={<UseStatePage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}