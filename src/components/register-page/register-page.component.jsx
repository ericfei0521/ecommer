import React from 'react';


import SignIn from '../sign-in/sign-in.component'
import SignUp from '../sign-up/signup.component'

import './register-page.style.scss';

const RegisterPage = () => (
    <div className="register">
         <SignIn/>
         <SignUp/>
    </div>
);
export default RegisterPage;