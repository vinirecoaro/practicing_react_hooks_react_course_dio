import { useState } from "react"
import { Link } from "react-router-dom"

export const HomePage = () => {

    return(
        <>
            <h1>Bem vindo aos Hooks !</h1>
            <Link to={"/useState"}>Vá para o UseStatePage</Link>
            <br />
            <Link to={"/useEffect"}>Vá para o UseEffectPage</Link>
            <br />
            <Link to={"/useCallback"}>Vá para o UseCallbackPage</Link>
            <br />
            <Link to={"/useMemo"}>Vá para o UseMemoPage</Link>
            <br />
            <Link to={"/useRef"}>Vá para o UseRefPage</Link>
        </>
    )
}

export default HomePage