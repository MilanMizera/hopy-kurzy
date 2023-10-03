// automatické zprávy (flashmessage)
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



// registration messages

export const succesRegistrationNotify = () => {

    toast.success('Úspěšně jste se zaregistrovali', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

}


export const passwordOrEmailIsNotValidNotify = () => {

    toast.error('Vaše heslo nebo emailová adresa je neplatná', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

}

// Resetování hesla

export const succesResetPasswordNotify = () => {

    toast.success('Na váš email byl úspěšně odeslán odkaz pro resetování hesla', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

}