import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyPress={onEnter}
                    onBlur={setNameCallback}
                />
                <div className={s.errorMessage}>{error}</div>
            </div>
            <button className={s.button} onClick={addUser} disabled={!name}>add</button>
            <div className={s.totalUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
