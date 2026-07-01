import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import UseStatePage from "./pages/useStatePage";
import UseEffectPage from "./pages/useEffectPage";
import UseCallbackPage from "./pages/useCallbackPage";
import UseMemoPage from "./pages/useMemoPage";
import UseRefPage from "./pages/useRefPage";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/useState" element={<UseStatePage/>}></Route>
                <Route path="/useEffect" element={<UseEffectPage/>}></Route>
                <Route path="/useCallback" element={<UseCallbackPage/>}></Route>
                <Route path="/useMemo" element={<UseMemoPage/>}></Route>
                <Route path="/useRef" element={<UseRefPage/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}