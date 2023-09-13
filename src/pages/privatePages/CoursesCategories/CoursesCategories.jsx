import "./coursesCategories.css"
import allCourses from "../../../data/allCourses"
import { useState } from "react"
import PrivateSideBar from '../../../components/private/privateSideBar/PrivateSideBar'
//icons
import { BsEmojiSmile } from "react-icons/bs";
import { IoManOutline } from "react-icons/io5";
import { MdTaskAlt, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { MdOutlineAccessTime } from "react-icons/md";
import { ImFileText2 } from "react-icons/im";
//all courses boostrap component
import {
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,

} from 'mdb-react-ui-kit';

const CoursesCategories = () => {

    const [courses, setCourses] = useState(allCourses)

    return (<div>

        <div className="private-wrapper-courses-category">



            <MDBRow className='row-cols-1 row-cols-md-3 g-4 justify-content-start' id="private-courses-category">
                <PrivateSideBar />

                {courses.map((oneCourse) => {

                    /*destructuring zachytí se tak data z pole do proměnných musí být definovaný ve stejným pořadí jako vlastnosti u objektu */
                    const { courseName, category, image, lectoreName, time, homework, id } = oneCourse

                    return (
                        
                            <MDBCol id="private-col-lasts-courses" key={id}>
                                <MDBCard id="private-lasts-courses-card">
                                    <MDBCardImage id="private-lasts-courses-img"
                                        src={image}
                                        alt='...'
                                        position='top'
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle className="private-lasts-courses-heading">{courseName}</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                            This content is a little bit longer.
                                        </MDBCardText>
                                        <div className="private-courses-info-wrapper">
                                            <p className="private-courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="private-courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="private-courses-info-bold">jméno lektora:</b>{lectoreName}</p>
                                            <p className="private-courses-info-paragraf"> <TbCategory2 className="private-courses-info-icon"></TbCategory2><b className="private-courses-info-bold">Kategorie:</b> {category}</p>
                                            <p className="private-courses-info-paragraf">  <MdOutlineAccessTime className="private-courses-info-icon"></MdOutlineAccessTime><b className="private-courses-info-bold">Délka kurzu:</b> {time}</p>
                                            <p className="private-courses-info-paragraf"> <ImFileText2 className="private-courses-info-icon"></ImFileText2> <b className="private-courses-info-bold">Úkoly k vypracování:</b> {homework}</p>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                      
                    )
                })}

            </MDBRow>
        </div>
    </div>

    )
}

export default CoursesCategories