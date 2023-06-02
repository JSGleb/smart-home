import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainPage({ user }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.name)
            navigate('/reg')
    }, [])

    return (
        <>
            <h1 style={{textAlign: 'center', margin: '20px 0'}}>Главная страница</h1>

            <div>Привет, {user?.name}
                <button style={{marginLeft: '10px'}} onClick={() => {
                    toast('🦄 Wow so easy!', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }}>Магия</button>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}
