import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import UseStatePage from "./pages/useStatePage";
import UseEffectPage from "./pages/useEffectPage";
import UseCallbackPage from "./pages/useCallback";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/useState" element={<UseStatePage/>}></Route>
                <Route path="/useEffect" element={<UseEffectPage/>}></Route>
                <Route path="/useCallback" element={<UseCallbackPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}