import React from 'react';
import './LoginView.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginView() {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        if (password === "ICS4U1-20") {
            navigate('/movies/all');
        } else {
            alert("Incorect password! Please try again.");
        }
    }
}

return {
    
}

export default LoginView;