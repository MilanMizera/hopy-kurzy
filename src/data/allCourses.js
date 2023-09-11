import NetteFramework from "../images/courses/php-course.jpg"
import GoogleAds from "../images/courses/google-ads-course.png"
import Photoshop from "../images/courses/photoshop-course.jpg"
import javascript from "../images/courses/js-course.png"



const allCourses = [

    {
        courseName: "Nette framework",
        category: "programování/php",
        image: NetteFramework,
        lectoreName: "Filip",
        time: "10 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Google ads kampaně",
        category: "Marketing",
        image: GoogleAds,
        lectoreName: "Andrea",
        time: "6 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Profesionální práce v photoshopu",
        category: "grafika/photoshop",
        image: Photoshop,
        lectoreName: "Simona",
        time: "5 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Základy v javascriptu",
        category: "programování/javascript",
        image: javascript,
        lectoreName: "Roman",
        time: "12 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },





]

export default allCourses