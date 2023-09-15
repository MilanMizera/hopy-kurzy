import "./myCourses.css"
import teacherMyCourses from "../../../images/private/myCourses/teacher-my-courses.png"
import { Link } from "react-router-dom"

const MyCourses = () => {



    return (

        <div className="section-my-courses">

            <img className="my-courses-user-without-course-img" src={teacherMyCourses}></img>

            <p className="my-courses-paragraf">Vidím že zatím nemáte zakoupené žádné kurzy...</p>
            <Link className="my-courses-button">Prohlédnout si kurzy</Link>

        </div>

    )
}

export default MyCourses