import { useState } from 'react';
import { GoogleLogo } from 'phosphor-react';

import './styles.scss';

import { GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import { auth } from '../../services/firebase';


export  function SignIn(){
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);
          setUser(result.user);  
        })
        
        .catch((error) => {
          console.log(error);
        });
    }

    return (
        <div className="container">
        <div className="user">
            {user.photoURL && <img src= {user.photoURL} alt="foto do usuario google"/>}
            <strong>{user.displayName}</strong>
            <small>{user.email}</small>
        </div>

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