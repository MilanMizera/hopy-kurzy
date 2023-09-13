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
                                <h5 class="card-title">Název třídy</h5>

                                <div className="private-courses-info-wrapper">
                                    <p className="private-courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="private-courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="private-courses-info-bold">jméno lektora:</b> Filip</p>
                                    <p className="private-courses-info-paragraf"> <TbCategory2 className="private-courses-info-icon"></TbCategory2><b className="private-courses-info-bold">Kategorie:</b> programování/php</p>
                                    <p className="private-courses-info-paragraf">  <MdOutlineAccessTime className="private-courses-info-icon"></MdOutlineAccessTime><b className="private-courses-info-bold">Délka kurzu:</b> 10 hodin</p>
                                    <p className="private-courses-info-paragraf"> <ImFileText2 className="private-courses-info-icon"></ImFileText2> <b className="private-courses-info-bold">Úkoly k vypracování:</b> ano</p>
                                </div>
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