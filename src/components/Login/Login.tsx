import React, { FormEvent, useState } from 'react';
import './Login.scss'
import axios from 'axios';

import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'
import Lottie from 'react-lottie'
import howdy from '../../lotties/howdy.json'

type setTokenFunction = (val: string) => void

const loginFctn = async (username: string, password: string) => {

    return await axios.post('http://localhost:3333/login', { username: username, password: password })
        .then(data => { console.log(data); return data.data })
        .catch(err => console.log(err))

}


const Login = ({ setToken }: { setToken: setTokenFunction }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = await loginFctn(username, password)
        setToken(token)
    }

    return (
        <div className={'login__container'}>
            <div className={'login__wrapper'}>
                <form id={'login'} onSubmit={() => setToken('fake-token')}>
                    <Lottie options={{ animationData: howdy, autoplay: true, loop: true }} width={'100%'} height={200} />
                    <label style={{ width: '100%' }}>
                        <p>Username</p>
                        <input className={'login--input'} type={'text'} onChange={(event) => setUsername(event.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input className={'login--input'} type={'password'} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                </form>
                <input value='Submit' form={'login'} className={'login--button'} type={'submit'} />
                <p>Sign up or login with an existing account</p>
                <div className="login--icon__container">
                    <FcGoogle className='login--icon' fill={'red'} size={30} />
                    <ImFacebook className='login--icon' fill={'#3b5998'} size={30} />
                    <ImGithub className='login--icon' size={30} />
                </div>
            </div>
            <div className='login--image'>
                <section>
                    <h1 className='maintext'>Login or Sign up</h1>
                    <h4 className='subtext'> I am not much of a designer, but I did my best! The internet is great for inspiration ♥︎</h4>
                </section>
            </div>
        </div>
    )
}

export default Login