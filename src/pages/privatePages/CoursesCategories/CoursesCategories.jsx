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



        <div className="row-p-courses-categories">

            <PrivateSideBar></PrivateSideBar>
            <div className="p-courses-categories-all-without-sidebar">
                <p className="p-last-courses-title">Všechny kurzy</p>
                <div class="row row-cols-1 row-cols-md-4 g-4 " id="row-p-courses-categories">

                    <div class="col" id="col-p-courses-categories">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp" class="card-img-top" alt="Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col" id="col-p-courses-categories">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div class="col" id="col-p-courses-categories">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show
                                    that equal height action.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>


                    <div class="col" id="col-p-courses-categories">
                        <div class="card h-100">
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to show
                                    that equal height action.
                                </p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default CoursesCategories