import selfPicture from '../../imgs/IMG_02.jpg';
import lungsPicture from '../../imgs/IMG_03.jpg';
import webscrapePicture from '../../imgs/IMG_04.jpg';
import googleCloudPicture from '../../imgs/IMG_05.jpg';
import umlPicture from '../../imgs/IMG_06.jpg';
import correlationPicture from '../../imgs/IMG_07.jpg';
import kClusterPicture from '../../imgs/IMG_08.jpg';
import digitalMenuPicture from '../../imgs/IMG_09.jpg';
import parallelProgrammingPicture from '../../imgs/IMG_10.jpg';
import pathfindingPicture from '../../imgs/IMG_11.jpg';
import robotPicture from '../../imgs/IMG_12.jpg';
import searchSortAlgorithms from '../../imgs/IMG_13.jpg';

const galleryData =[
    {
        id:1,
        image:lungsPicture,
        title:"Covid-19 Convolutional Neural Network for Computed Tomography scans",
        description:"My dissertation project to detect Covid-19 positive patients using open source CT scan data. This project involved studying symptoms of Covid that can appear in CT scans such as ground glass opacities and the potential benefit and downsides of implementation",
        tags:["Python"],
        URL:"https://github.com/JosesChan/CNN_COVID_19",
       
    },
    {
        id:2,
        image:webscrapePicture,
        title:"Inventory Web Scraper",
        description:"A small project that checks when a product is in stock through reading HTML in Beautiful Soup 4 and available JSON objects. This project was made to notify and log which products are back in stock for a friend.",
        tags:["Python"],
        URL:"https://github.com/JosesChan/webScraperNotification",
       
    },
    {
        id:3,
        image:googleCloudPicture,
        title:"Google Cloud IAAS Provisioning",
        description:"Project made during my studies in university. This project developed my experience in interacting with cloud vendors and helped consolidate my cloud computing knowledge.",
        tags:["Jinja"],
        URL:"https://github.com/JosesChan/Cloud-GCP",
       
    },
    {
        id:4,
        image:umlPicture,
        title:"MySQL Database Planning",
        description:"A small and simple project made during university. This project was to satisfy a university module where I was required to develop and normalise a schema for a parcel delivery service.",
        tags:["SQL"],
        URL:"https://github.com/JosesChan/parcelDeliveryDatabase",
       
    },
    {
        id:5,
        image:correlationPicture,
        title:"Big Data: Multivariate Analysis Nuclear Reactors",
        description:"Another university project which tested my ability to analyse big data. This project led me to learn how to implement data pipelines and use algorithms to analyse.",
        tags:["Python"],
        URL:"frontend",
       
    },
    {
        id:6,
        image:kClusterPicture,
        title:"Machine Learning Algorithms",
        description:"This project helped solidify my skills in machine learning techniques. This allowed to demonstrate and use K-Clustering, K-fold cross validation, polynomial regression equation and data visualisation tools.",
        tags:["Python"],
        URL:"https://github.com/JosesChan/machineLearning",
       
    },
    {
        id:7,
        image:digitalMenuPicture,
        title:"Object Oriented Digital Menu",
        description:"Simple project for university that demonstrates OOP features and utilises automatic garbage collection through smart pointers. Despite already knowing OOP at the time, I thought it would be a good chance to not just practise my OOP abilities but also improve my general development skills like a focus on how user's will operate the solution and considerations for performance with automatic garbage collection.",
        tags:["C++"],
        URL:"https://github.com/JosesChan/DigitalMenu",
       
    },
    {
        id:8,
        image:robotPicture ,
        title:"Digital Robotics Project",
        description:"Digital prototype of a robot for university. Originally made for a module on work with a group of other computer scientist, this prototype was created using Coppeliasim during Covid-19 which prevented us from making a physical model.",
        tags:["Python", "Lua"],
        URL:"https://github.com/JosesChan/TSE_Robotics",
    },
    {
        id:9,
        image:parallelProgrammingPicture,
        title:"Parallel Processing Kernels",
        description:"This project tested my ability to understand Parallel Programming concepts and judgement to apply them appropriately to achieve efficiency.",
        tags:["C++"],
        URL:"https://github.com/JosesChan/ParallelProgrammingAssignment",
    },
    {
        id:10,
        image:searchSortAlgorithms,
        title:"Search and Sort Algorithms",
        description:"Small project that looked at implementing search and sort algorithms. These include simple ones like bubble sort and introsort which is a hybrid sorting algorithm",
        tags:["C#"],
        URL:"https://github.com/JosesChan/Algorithms",
    },    
    {
        id:11,
        image:pathfindingPicture,
        title:"A* and Djikstra Pathfinding",
        description:"This was a fun project that helped me understand the beauty of Djikstra's algorithm and how different variations evolved.",
        tags:["C++"],
        URL:"https://github.com/JosesChan/ParallelProgrammingAssignment",
    },
]

export default galleryData;