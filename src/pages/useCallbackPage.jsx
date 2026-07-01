import { useCallback, useEffect, useState } from "react"

export const UseCallbackPage = () => {

    const [name,setName] = useState('')
    const [password, setPassword] = useState('')

    // const onChangeName = (event) => {
    //     setName(event.target.value)
    // }

    const onChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [])

    return(
        <>
            <h2>Bem vindo ao UseCallbackPage</h2>
            <input autoComplete="off" type="text" placeholder="Nome" value={name} onChange={onChangeName} />
            <input autoComplete="off" type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        </>
    )
}

export default UseCallbackPage