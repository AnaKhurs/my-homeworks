import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string>('');

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        const valueTrim = e.currentTarget.value.trim();
        if (valueTrim) {
            setName(valueTrim);
            setError('');
        } else {
            setName('');
            setError('name is require!');
        }

    }
    const addUser = () => {
        alert(`Hello ${name} !`);
        addUserCallback(name);
        setName('');
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && name) {
            addUser()
        } else if (e.key === "Enter" && !name) {
            setError('name is require!')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
