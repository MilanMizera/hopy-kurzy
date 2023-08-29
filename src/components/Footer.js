import "./footer.css"
import Logo from "../images/Hopy-kurzy.png"

/* icons*/
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {


  return (
    <div>


      <div className="footer-section">



        <div className="footer-row">

          <div className="col-footer-brand">

            <img className="footer-logo" src={Logo}></img>
          </div>

          <div className="cols-footer-wrapper">
            <div className="col-items-1">
              <p className="item-title-1">nadpis</p>
              <a className="footer-item-n">item</a>
              <a className="footer-item">item</a>
              <a className="footer-item">item</a>
              <a className="footer-item">item</a>



            </div>


            <div className="col-items-2">
              <p className="item-title-2">nadpis</p>
              <a className="footer-item-n">item</a>
              <a className="footer-item">item</a>
              <a className="footer-item">item</a>
              <a className="footer-item">item</a>
            </div>


          </div>

        </div>

        <div className="copyright-section">

          <div className="col-footer-copyright">
            <p className="footer-text">Milan Mizera &copy; {new Date().getFullYear()}. Všechna práva vyhrazena.</p>
          </div>


          <div className="col-social-icons">
            <p className="social-text">Sledujte nás na:</p>
            <BsFacebook className="social-icon"></BsFacebook>
            <BsInstagram className="social-icon"></BsInstagram>
            <BsTwitter className="social-icon"></BsTwitter>
          </div>


        </div>



      </div>

    </div>
  )


}

export default Footer
