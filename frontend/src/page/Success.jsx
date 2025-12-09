import { Navigate, useNavigate } from 'react-router';

function Success(){
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    if(localStorage.getItem("token") === null || localStorage.getItem("token") === undefined){
        <Navigate to="/"/>
    }

    return (
        <>
            <h1>Connexion avec succès !</h1>
            <button onClick={logout}>Déconnexion</button>
        </>
    )
}

export default Success;