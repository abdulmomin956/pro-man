import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './firebase.init';
import googleIcon from '../../assest/image/google-icon.svg'


const SocialLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let navigate = useNavigate();


    const handleSignUp = async () => {
        await signInWithGoogle()

    }

    if (loading) {
        return <div className='h-screen flex justify-center items-center'>
            <h1>Loding....</h1>
        </div>
    }
    if (user) {
        navigate('/')
        console.log(user)
    }

    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    return (

        <>
            <button onClick={handleSignUp} className="btn btn-outline "><img style={{ width: '25px' }} src={googleIcon} alt="" />{children}  Google</button>
            {
                signInError
            }
        </>

    );
};

export default SocialLogin;