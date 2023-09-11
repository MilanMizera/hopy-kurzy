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

    return (
        <div className="wrapper-courses-category">
            <PrivateSideBar />
            <MDBRow className='row-cols-1 row-cols-md-4 g-4 justify-content-center' id="">
                {courses.map((oneCourse) => {

                    /*destructuring zachytí se tak data z pole do proměnných musí být definovaný ve stejným pořadí jako vlastnosti u objektu */
                    const { courseName, category, image, lectoreName, time, homework, id } = oneCourse

                    return (

                        <MDBCol id="col-lasts-courses" key={id}>
                            <MDBCard id="lasts-courses-card">
                                <MDBCardImage id="lasts-courses-img"
                                    src={image}
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardBody>
                                    <MDBCardTitle className="lasts-courses-heading">{courseName}</MDBCardTitle>
                                    <MDBCardText>
                                        This is a longer card with supporting text below as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </MDBCardText>
                                    <div className="courses-info-wrapper">
                                        <p className="courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="courses-info-bold">jméno lektora:</b>{lectoreName}</p>
                                        <p className="courses-info-paragraf"> <TbCategory2 className="courses-info-icon"></TbCategory2><b className="courses-info-bold">Kategorie:</b> {category}</p>
                                        <p className="courses-info-paragraf">  <MdOutlineAccessTime className="courses-info-icon"></MdOutlineAccessTime><b className="courses-info-bold">Délka kurzu:</b> {time}</p>
                                        <p className="courses-info-paragraf"> <ImFileText2 className="courses-info-icon"></ImFileText2> <b className="courses-info-bold">Úkoly k vypracování:</b> {homework}</p>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>


                    )



                })}
            </MDBRow>
        </div>
    )
}

export default CoursesCategories