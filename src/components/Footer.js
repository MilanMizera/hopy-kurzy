import "./footer.css"
import Logo from "../images/logo.png"
import { Link } from "react-router-dom";

import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {

  return (
    <MDBFooter className='text-center' color='white' bgColor='dark' id="section-footer">
      <MDBContainer className='p-4' id="container-footer">
       
        <section id="section-footer-email-subscribe" className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol id="col-footer-subscribe-button" size="auto">
                <p className='pt-2' id="footer-subscribe-paragraf">
                  <strong>Zde můžete odebírat novinky</strong>
                </p>
              </MDBCol>

              <MDBCol id="col-footer-email-input" md='5' start >
               <input id="footer-email-input" type="email" placeholder="Váš e-mail"></input>
              </MDBCol>

              <MDBCol id="col-footer-subscribe-button" size="auto">
                <MDBBtn id="footer-subscribe-button" outline color='light' type='submit' className='mb-4'>
                  Odebírat
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

       

        <section className=''>
          <MDBRow id="row-footer-links">
           
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' id="footer-li">Stránky</h5>

              <ul className='list-unstyled mb-0'>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Úvod
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Seznam kurzů
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Předplatné
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </MDBCol>

          
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' id="footer-li">Odkazy</h5>

              <ul className='list-unstyled mb-0'>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                   Staň se lektorem
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Obchodní podmínky
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                    Ochrana osobních údajů
                  </Link>
                </li>
                <li id="footer-li">
                  <Link id="footer-item-link" href='#!' className='text-white'>
                  Cookies
                  </Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3'id="wrapper-footer-down" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       
        
      <div className="col1-footer-copyright">
            <p className="footer-text">Hopy kurzy &copy; {new Date().getFullYear()}. Všechna práva vyhrazena.</p>
          </div>

          <div className="col2-footer-copyright"> <p className="paragraf-col2-footer-copyright">Sledujte nás na:</p>
          <section id="section-footer-socials-icons" className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon id="footer-socials-icons" fab icon='github' />
          </MDBBtn>
        </section>

          </div>



        
      </div>
    </MDBFooter>
  );
}