import { useEffect, useMemo, useState } from "react"

export const UseMemoPage = () => {

    const [name,setName] = useState('')
    const [password, setPassword] = useState('')

    const validatePassword = useMemo(() => {
        return <ValidadePassword password={password}></ValidadePassword>
    }, [password])

    return(
        <>
            <h2>Bem vindo ao UseMemoPage</h2>
            <input autoComplete="off" type="text" placeholder="Nome" value={name} onChange={(event) => setName(event.target.value)} />
            <br />
            <input autoComplete="off" type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            <br />
            {validatePassword}
        </>
    )
}

const ValidadePassword = ({password}) => {
    if(password.length === 0) return <span>A senha deve ser preenchida !</span>
    if(password.length < 5) return <span>A senha deve ter mais que 5 caracteres !</span>
    return <span>Senha Aprovada !</span>
}

export default UseMemoPage