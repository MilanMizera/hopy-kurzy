import "./home.css"
//pictures
import mainImg from "../../images/home/mainImg.png"
import jsCourse from "../../images/home/js-course.png"
import phpCourse from "../../images/home/php-course.jpg"
import googleAds from "../../images/home/google-ads-course.png"
import photoshop from "../../images/home/photoshop-course.jpg"
//icons
import { BsEmojiSmile } from "react-icons/bs";
import { IoManOutline } from "react-icons/io5";
import { MdTaskAlt, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineAccessTime } from "react-icons/md";

import { ImFileText2 } from "react-icons/im";
//boostrap mdi testimonials component
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
//lasts courses boostrap component
import {
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from 'mdb-react-ui-kit';

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


    <div className="testimonials-section">

      <MDBContainer className="py-5" id="testimonials-container">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="10" xl="8" className="text-center">
            <h3 className="mb-4" id="testimonials-title">Recenze</h3>
            <p className="mb-4 pb-2 mb-md-5 pb-md-0" id="testimonials-paragaraf">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center d-flex align-items-stretch" >
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch" id="testimonials-wrapper">
            <MDBCard id="testimonials-card" className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#9d789b" }}
              ></div>
              <div className="avatar mx-auto bg-white" id="testimonials-card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  className="rounded-circle img-fluid"
                  id="testimonials-img"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4" id="testimonials-persone-name">Maria Smantha</h4>
                <hr />
                <p className="dark-grey-text mt-4" id="testimonials-persone-recenz">
                  <MDBIcon id="note-icon" fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                  elit.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch" id="testimonials-wrapper">
            <MDBCard id="testimonials-card" className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#7a81a8" }}
              ></div>
              <div className="avatar mx-auto bg-white" id="testimonials-card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4" id="testimonials-persone-name">Lisa Cudrow</h4>
                <hr />
                <p className="dark-grey-text mt-4" id="testimonials-persone-recenz" >
                  <MDBIcon id="note-icon" fas icon="quote-left" className="pe-2" />
                  Neque cupiditate assumenda in maiores repudi mollitia
                  architecto.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch" id="testimonials-wrapper" >
            <MDBCard id="testimonials-card" className="testimonial-card">
              <div
                className="card-up"
                style={{ backgroundColor: "#6d5b98" }}
              ></div>
              <div className="avatar mx-auto bg-white" id="testimonials-card">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                  className="rounded-circle img-fluid"
                />
              </div>
              <MDBCardBody>
                <h4 className="mb-4" id="testimonials-persone-name">John Smith</h4>
                <hr />
                <p className="dark-grey-text mt-4" id="testimonials-persone-recenz">
                  <MDBIcon id="note-icon" fas icon="quote-left" className="pe-2" />
                  Delectus impedit saepe officiis ab aliquam repellat rem unde
                  ducimus.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>


    <div className="clip-path-main">
    </div>


    <div className="lasts-courses-section">
      <h6 className="lasts-courses-title"> Naposledy přidané kurzy</h6>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 justify-content-center' id="">
        <MDBCol id="col-lasts-courses">
          <MDBCard id="lasts-courses-card">
            <MDBCardImage id="lasts-courses-img"
              src={phpCourse}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle className="lasts-courses-heading">Nette framework</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <div className="courses-info-wrapper">
                <p className="courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="courses-info-bold">jméno lektora:</b> Filip</p>
                <p className="courses-info-paragraf"> <TbCategory2 className="courses-info-icon"></TbCategory2><b className="courses-info-bold">Kategorie:</b> programování/php</p>
                <p className="courses-info-paragraf">  <MdOutlineAccessTime className="courses-info-icon"></MdOutlineAccessTime><b className="courses-info-bold">Délka kurzu:</b> 10 hodin</p>
                <p className="courses-info-paragraf"> <ImFileText2 className="courses-info-icon"></ImFileText2> <b className="courses-info-bold">Úkoly k vypracování:</b> ano</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol id="col-lasts-courses">
          <MDBCard id="lasts-courses-card">
            <MDBCardImage id="lasts-courses-img"
              src={googleAds}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle className="lasts-courses-heading">Google ads kampaně</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <div className="courses-info-wrapper">
                <p className="courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="courses-info-bold">jméno lektora:</b> Andrea</p>
                <p className="courses-info-paragraf"> <TbCategory2 className="courses-info-icon"></TbCategory2><b className="courses-info-bold">Kategorie:</b> Marketing</p>
                <p className="courses-info-paragraf">  <MdOutlineAccessTime className="courses-info-icon"></MdOutlineAccessTime><b className="courses-info-bold">Délka kurzu:</b> 6 hodin</p>
                <p className="courses-info-paragraf"> <ImFileText2 className="courses-info-icon"></ImFileText2> <b className="courses-info-bold">Úkoly k vypracování:</b> ano</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol id="col-lasts-courses">
          <MDBCard id="lasts-courses-card">
            <MDBCardImage id="lasts-courses-img"
              src={photoshop}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle className="lasts-courses-heading">Profesionální práce v photoshopu</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <div className="courses-info-wrapper">
                <p className="courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="courses-info-bold">jméno lektora:</b> Simona</p>
                <p className="courses-info-paragraf"> <TbCategory2 className="courses-info-icon"></TbCategory2><b className="courses-info-bold">Kategorie:</b> Photoshop</p>
                <p className="courses-info-paragraf">  <MdOutlineAccessTime className="courses-info-icon"></MdOutlineAccessTime><b className="courses-info-bold">Délka kurzu:</b> 5 hodin</p>
                <p className="courses-info-paragraf"> <ImFileText2 className="courses-info-icon"></ImFileText2> <b className="courses-info-bold">Úkoly k vypracování:</b> ano</p>
              </div>
            </MDBCardBody>
          </MDBCard >
        </MDBCol>
        <MDBCol id="col-lasts-courses">
          <MDBCard id="lasts-courses-card">

            <MDBCardImage id="lasts-courses-img"
              src={jsCourse}
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle className="lasts-courses-heading">Základy v javascriptu</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
              <div className="courses-info-wrapper">
                <p className="courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="courses-info-bold">jméno lektora:</b> Roman</p>
                <p className="courses-info-paragraf"> <TbCategory2 className="courses-info-icon"></TbCategory2><b className="courses-info-bold">Kategorie:</b> programování/javascript</p>
                <p className="courses-info-paragraf">  <MdOutlineAccessTime className="courses-info-icon"></MdOutlineAccessTime><b className="courses-info-bold">Délka kurzu:</b> 12 hodin</p>
                <p className="courses-info-paragraf"> <ImFileText2 className="courses-info-icon"></ImFileText2> <b className="courses-info-bold">Úkoly k vypracování:</b> ano</p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>



  </div>

  )
}

export default Home
