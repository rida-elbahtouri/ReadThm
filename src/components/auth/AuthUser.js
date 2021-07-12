import { useState } from 'react';
import LoginComponent from './LoginComponent'
import SignUpComponent from './SignUpComponent'

export default function AuthUser(props) {
    const [activeComp, setActiveComp] = useState('login')
    
    const SwitchForm = (tocomp) => {
        setActiveComp(tocomp)
    }
    
    const Switchto = () => {
        if(activeComp === "login"){
            return <LoginComponent authUser={props.authUser} SwitchForm={SwitchForm} />
        } else {
            return <SignUpComponent authUser={props.authUser} SwitchForm={SwitchForm} />
        }
    }

    return (
        <div className="auth-form">
                {Switchto('login')}
        </div>
    )
}
