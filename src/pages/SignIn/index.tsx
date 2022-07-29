import './styles.scss';
import { GoogleLogo } from 'phosphor-react';

import { GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { auth } from '../../services/firebase';


export  function SignIn(){

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
    })

    .catch((error) => {
        console.log(error);
    });
}

    return (
        <div className="container">
            <h1>Faça seu login</h1>

            <span>
                Utilizando autenciação social, com o Google você <br />
                facilida a vida do agilizando seu login!
            </span>

            <button type="button" className="button" onClick={handleGoogleSignIn}>
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
    )
}