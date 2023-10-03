import "./forgotPassword.css"
//automatické zprávy (flashmessage)
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//db firebase
import { auth } from "../../../data/firebase"
import { sendPasswordResetEmail } from "firebase/auth";
// flashmessage
import { succesResetPasswordNotify } from "../../../data/notifications"
//img
import passwordReset from "../../../images/resetPassword/reset-password.png"






function ForgotPassword() {


    const handleSubmit = async (e) => {
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(auth, emalVal).then(data => {
            succesResetPasswordNotify()
        }).catch(err => {
            alert(err.code)
        })
    }
    return (


        <div className="sign-in-section">

            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={2}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />




            <div className="forgot-password-form-wrapper">
                <div className="col-1-forgot-password">

                    <img src={passwordReset} className="forgot-password-img"></img>
                </div>
                <div className="col-2-forgot-password">

                    <form className="forgot-password-form" onSubmit={(e) => handleSubmit(e)}>
                        <h1 className="sign-in-title">Resetování hesla</h1>
                        <input className="sign-in-input" name="email" placeholder="Váš e-mail" />
                        <input className="sign-in-button" type="submit" value="Resetovat" ></input>
                    </form>

                </div>

            </div>


        </div>






    )
}
export default ForgotPassword;