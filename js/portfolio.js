let currentProject = 0;
let projects = [
{name:"Optum",description:"As a participant in the technical development program at Optum, I gained experience in two different software engineering positions over the course of a year. During this time, I honed my technical skills and gained experience working in an AGILE development environment. I contributed to several projects during my tenure, including adding unit tests to programs undergoing a major upgrade and creating a big data solution for drug pricing. Through these experiences, I learned valuable skills in project management and collaboration, and gained insight into the fast-paced world of software engineering in an industry setting.",dates:"May 2022-Now",link:"https://www.optum.com/"},
{name:"ECE-IT",description:"I worked for The University of Minnesot's Electronic and Computer Engineering IT department  as a student technician specialist between September 2021-May 2022. During this time, I had many responsibilities such as ensuring lab equipment stayed running, replacing/repairing any faulty equipment, and miscelanious tasks that the University Depended on to keep teaching Computer Engineering classes. This has helped me hone my technical skills, as well as work on my people skills by talking to fellow co-workers and people coming in to get equipment fixed.",dates:"September 2021-May 2022",link:"#"},
{name:"Vocaloid Reccomendation Algorithm",description:"I developed a personalized vocaloid music recommendation algorithm using Python, Numpy, and Pandas. By applying a K-Means clustering algorithm to a database of Vocaloid songs, I was able to group similar songs together and generate personalized recommendations based on my musical preferences. With this algorithm, I was able to discover new Vocaloid songs that I would likely enjoy, making it easier than ever to explore and expand my musical horizons.",dates:"Winter 2022",link:"#"},
{name:"Drone Search and Rescue",description:"Implemented part of a Drone Seach and rescue program in C++ for a class consisting of:<ul><li>An image processesing system for identifying a robot in an image</li><li>A search pattern facade</li><li>A simulation facade since we couldn't use real drones</li><li>A composite abstract factory pattern to create entities for the simulation</li></ul>All work was done with a team using the AGILE development process with daily scrums",dates:"October 2021-December 2021",link:"#"},
{name:"Gopher Grades bot",description:"GopherGrades Bot is a discord bot made for the University of Minnesota, based off of the website <a href=\"https://gophergrades.com/\"> of the same name</a>.Originally Written in Python I have been meaning to update it to Node.js since the wrapper I was using for Discord in python has become depreciated",dates:"Spring 2021-Now",link:"https://github.com/EmilyTheCleric/gopher_grades_bot"},
{name:"Stepset",description:"Stepset was a startup that aims to connect people looking to make startups. I was contacted due to my interest in the project and experience in web development from a class I took. An AGILE development porcess was used to ensure the team could finish on time. My responsibilites were mainly on the back-end working with a MySQL database and PHP to create dynamic webpages,  I created a login system with email verification as well as encrypted passwords, A way to store and search for projects, and storage of profiles. I also taught other team members about best practices with SQL to ensure SQL-injection was not possible and all data was properly encrypted.",dates:"Winter2021 - Spring 2022",link:"#"}
]

function swapText(index){
    let currentProject=projects[index];

    let projectName=document.getElementById("projectName")
    let projectDescription = document.getElementById("projectDesc")
    let projectDate = document.getElementById("projectDates")
    let projectlink = document.getElementById("projectLink")

    projectlink.innerHTML=currentProject.name;
    projectlink.setAttribute("href",currentProject.link)

    if(currentProject.link=='#'){
        projectlink.setAttribute("target","_self")
    }
    else{
        
        projectlink.setAttribute("target","_blank")
    }
    
    projectDescription.innerHTML=currentProject.description;
    projectDate.innerHTML=currentProject.dates



    document.getElementById("pageSelector").value=index
}

window.addEventListener("load", (event) => {
    swapText(0);

    document.getElementById("back").addEventListener("click",(Event)=>{
        currentProject --;

        //if out of bounds, set to last
        if(currentProject<0){
            currentProject=projects.length-1;
        }

        swapText(currentProject);
    });

    document.getElementById("next").addEventListener("click",(Event)=>{
        currentProject ++;

        //if out of bounds, set to first
        if(currentProject>projects.length-1){
            currentProject=0;
        }

        swapText(currentProject);
    });

    document.getElementById("pageSelector").addEventListener("change",(Event)=>{
        currentProject=Event.target.value
        swapText(Event.target.value);
    });
});