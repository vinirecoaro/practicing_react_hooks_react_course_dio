import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/userContext"

export const HomePage = () => {

    const {name, setName} = useContext(UserContext)

    return(
        <>
            <h1>Bem vindo aos Hooks ! {name}</h1>
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