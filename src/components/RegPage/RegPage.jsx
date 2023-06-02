import { useNavigate } from "react-router-dom";

export default function RegPage({ setUser }) {
    const navigate = useNavigate();

    const regHandler = (e) => {
        e.preventDefault()
        setUser({ name: e.target[0].value })
        navigate('/')
    };

    return (
        <>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '20px 0'
            }} onSubmit={regHandler}>

                <h1 style={{textAlign: 'center', margin: '20px 0'}}>Регистрация</h1>
                <input style={{
                        marginBottom: '10px'
                    }}
                    type="text" placeholder='Введите имя' />

                <button>Регистрация</button>
            </form>
        </>
    )
}
