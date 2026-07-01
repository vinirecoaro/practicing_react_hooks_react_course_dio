import { useState } from "react"
import { Link } from "react-router-dom"

export const HomePage = () => {

    return(
        <>
            <h1>Bem vindo aos Hooks !</h1>
            <Link to={"/useState"}>Vá para o UseStatePage</Link>
        </>
    )
}

export default HomePage