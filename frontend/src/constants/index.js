import { sdg1, sdg3, sdg4, sdg5, sdg6 } from "../assets/images";
import homeImg1  from '../assets/images/home1.jpg'
import homeImg2 from '../assets/images/home2.jpg'
import homeImg3 from '../assets/images/home3.jpg'
import homeImg4 from '../assets/images/home4.jpg'


export const navLinks = [
    {lable: "About Us"},
    { lable:"Our Works"},
    {lable:"Get Involved"},
    { lable:"Media Center"},
    { lable :"Resource Center"},
    { lable:"Contact Us"}
];

export const heroImg = [
    {imgsrc:homeImg1, alt:"homeimage" },
    {imgsrc:homeImg2, alt:"homeimage" },
    {imgsrc:homeImg3, alt:"homeimage" },
    {imgsrc:homeImg4, alt:"homeimage"}
]

export const subLinks = [
    {
        title:"About Us", 
        links : [
           {name : "About Us", link:"/about-us"},
           {name:"Team ZMF", link:"/zmf"},
        //    {name:"Impact on Society", link:"/impact"},
        //    {name:"Reach & Presence", link: "/reach"}
        ],
    },
    {
        title:"Our Works",
        links: [
            {name:"Health", link:"/health"},
            {name:"Education", link:"/education"}
        ]
    },
    {
        title:"Get Involved",
        links: [
            {name:"Individual Support", link:"/individual"},
            {name:"Corporate Partnerships", link:"/corporate"},
            {name:"Volunteer", link:"/volunteer"},
        ]
    },
    {
        title:"Media Center",
        links:[
            // {name:"Press Release", link:"/"},
            {name:"Gallery", link:"/gallery"},
            // {name:"Events / Workshops", link:"/events"},
            // {name:"Workshop & Events", link:"/"}
        ]
    },
    {
        title:"Resource Center",
        links:[
            {name:"ZMF Blog", link:"/zmfblog"},
            {name:"Newsletter", link:"/newsletter"},
            // {name:"Annual Impact Reports", link:"/annual-reports"},
            // {name:"Films", link:"/"},
            // {name:"Strories of Change", link:"/"},
            // {name:"Perspective", link:""}
        ]

    },
    {
        title:"Contact Us",
        links:[
            {name:"Contact", link:"/contact"},
            {name:"FAQs", link:"/faqs"}
        ]
    }
]
 export const Impacts = [

    {value: "15+",label:"Lac" },
    {value:"2000+", label:"Villages"},
    {value:"400+", label:"Projects" },
    {value:"25+", label:"States"}

 ]



 export const SustainableIcons = [
    {alt:"sd1 image", img:sdg1},
    {alt:"sd3 image", img:sdg3},
    {alt:"sd4 image", img:sdg4},
    {alt:"sd5 image", img:sdg5},
    {alt:"sd6 image", img:sdg6}

 ]
 export const StateOptions = [
    
    "--Select state--",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
     "Haryana",
    "Himachal Pradesh",
   "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"

 ]
