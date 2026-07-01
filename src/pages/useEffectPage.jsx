import { useEffect, useState } from "react"

export const UseEffectPage = () => {

    const [name,setName] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(name)
    }, [name])

    return(
        <>
            <h2>Bem vindo ao UseEffectPage</h2>
            <input autoComplete="off" type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
            <input autoComplete="off" type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        </>
    )
}

export default UseEffectPage