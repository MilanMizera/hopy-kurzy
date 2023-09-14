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
    const [title, setTitle] = useState("Všechny kurzy")


    const handleOnlyJavascript = () => {


     

        const onlyJavascript = allCourses.filter((oneCourse) => {

            return oneCourse.tag === "javascript"


        })

        setCourses(onlyJavascript)
        setTitle("Javascript")

    }

    const handleOnlyPhp = () => {

        setCourses(allCourses)

        const onlyPhp = allCourses.filter((oneCourse) => {

            return oneCourse.tag === "php"


        })

        setCourses(onlyPhp)
        setTitle("PHP")

    }

    const handleAllCourses = () => {

        setCourses(allCourses)
       setTitle("Všechny kurzy")
    }



    return (<div>



        <div className="row-p-courses-categories">

            <PrivateSideBar handleOnlyJavascript={handleOnlyJavascript} handleAllCourses={handleAllCourses} handleOnlyPhp={handleOnlyPhp} />
            <div className="p-courses-categories-all-without-sidebar">
                <p className="p-last-courses-title">{title}</p>
                <div class="row row-cols-1 row-cols-md-4 g-4 " id="row-p-courses-categories">

                    {courses.map((oneCourse) => {
                        const { courseName, category, image, lectoreName, time, homework, id } = oneCourse


                        return (

                            <div class="col" id="col-p-courses-categories" key={id}>
                                <div class="card h-100">
                                    <img src={image} alt="Skyscrapers" />
                                    <div class="card-body">
                                        <h5 class="card-title" id="private-courses-categories-nameofcourse">{courseName}</h5>

                                        <div className="private-courses-info-wrapper">
                                            <p className="private-courses-info-paragraf"> <MdOutlineDriveFileRenameOutline className="private-courses-info-icon"></MdOutlineDriveFileRenameOutline><b className="private-courses-info-bold">jméno lektora: </b> {lectoreName}</p>
                                            <p className="private-courses-info-paragraf"> <TbCategory2 className="private-courses-info-icon"></TbCategory2><b className="private-courses-info-bold">Kategorie: </b> {category}</p>
                                            <p className="private-courses-info-paragraf">  <MdOutlineAccessTime className="private-courses-info-icon"></MdOutlineAccessTime><b className="private-courses-info-bold">Délka kurzu: </b>{time}</p>
                                            <p className="private-courses-info-paragraf"> <ImFileText2 className="private-courses-info-icon"></ImFileText2> <b className="private-courses-info-bold">Úkoly k vypracování: </b>{homework}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                        )



                    })}
                </div>
            </div>
        </div>
    </div>

    )
}

export default CoursesCategories