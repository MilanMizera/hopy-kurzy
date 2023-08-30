import "./home.css"
//pictures
import mainImg from "../../images/home/mainImg.png"
//icons
import { BsEmojiSmile } from "react-icons/bs";
import { IoManOutline } from "react-icons/io5";
import { MdTaskAlt } from "react-icons/md";


export const Home = () => {

  return (<div>

    <div className="main-section-row">
      <div className="col-main-section-text">
        <h1 className="main-title"> Vyberte si ze stovky našlapaných kurzů</h1>
        <p className="main-paragraf"> Které Vás obohatí o nové zkušenosti od našich profesionálních lektorů</p>
        <a className="main-button">Zobrazit kurzy</a>
      </div>
      <div className="col-main-section-img">
        <img className="main-img" src={mainImg}></img>
      </div>
    </div>



    <div className="benefits-section-row">

      <div className="benefits-col">
        <BsEmojiSmile className="benefits-icon"></BsEmojiSmile>
        <h6 className="benefits-text">stovky spokojených uživatelů</h6>
      </div>

      <div className="benefits-col">
        <IoManOutline className="benefits-icon"></IoManOutline>
        <h6 className="benefits-text">profesionální lektoři</h6>
      </div>

      <div className="benefits-col">
        <MdTaskAlt className="benefits-icon"></MdTaskAlt>
        <h6 className="benefits-text">úkoly k vypracování</h6>
      </div>




    </div>
    
  </div>

  )
}

export default Home
