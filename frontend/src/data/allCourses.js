import NetteFramework from "../images/courses/php-course.jpg"
import GoogleAds from "../images/courses/google-ads-course.png"
import Photoshop from "../images/courses/photoshop-course.jpg"
import javascript from "../images/courses/js-course.png"
import mma from "../images/courses/mma-course.jpg"
import rybolov from "../images/courses/fish-course.jpg"
import react from "../images/courses/react-course.png"
import angular from "../images/courses/angular-course.png"



const allCourses = [

    {
        courseName: "Nette framework",
        category: "IT/php",
        tag: "php",
        image: NetteFramework,
        lectoreName: "Filip",
        time: "10 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Google ads kampaně",
        category: "Marketing",
        tag: "marketing",
        image: GoogleAds,
        lectoreName: "Andrea",
        time: "6 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Profesionální práce ve photoshopu",
        category: "grafika/photoshop",
        tag: "grafika",
        image: Photoshop,
        lectoreName: "Simona",
        time: "5 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Základy v javascriptu",
        category: "IT/javascript",
        tag: "javascript",
        image: javascript,
        lectoreName: "Roman",
        time: "12 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Rybolov",
        category: "hobby/rybolov",
        tag: "rybolov",
        image: rybolov,
        lectoreName: "Roman",
        time: "5 hodin",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "MMA pro začátečníky",
        category: "sport/mma",
        tag: "mma",
        image: mma,
        lectoreName: "Karlos",
        time: "4 hodiny",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "React framework",
        category: "IT/javascript",
        tag: "javascript",
        image: react,
        lectoreName: "Adam",
        time: "24 hodiny",
        homework: "ano",
        id: crypto.randomUUID(),
    },

    {
        courseName: "Angular framework",
        category: "IT/javascript",
        tag: "javascript",
        image: angular,
        lectoreName: "Teodor",
        time: "18 hodiny",
        homework: "ano",
        id: crypto.randomUUID(),
    },













]

export default allCourses