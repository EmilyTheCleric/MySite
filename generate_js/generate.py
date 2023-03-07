def generate_js():
    script = ""

    script += "let currentProject = 0;\n"

    script += "let projects = [\n"
    
    file = open("generate_js/projects.eri",encoding='utf-8')
    lines=file.read().split('\n')
    file.close()

    for line in lines:
        try:
            data = line.split('。')
            name = data[0]
            desc = data[1]
            dates= data[2]
            link = data[3]
        except:
            print(line)
            continue
            
        script+='{name:"'
        script+=name
        script+='",description:"'
        script+=desc
        script+='",dates:"'
        script+=dates
        script+='",link:"'
        script+=link
        script+='"},\n'
    
    #remove last comma
    script=script[:-2]

    script += "\n]\n"


    script+="""
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
});"""

    file=open("generate_js/output.js",'w')
    file.write(script)
    file.close()

def generate_selector():
    file = open("generate_js/projects.eri",encoding='utf-8')
    lines=file.read().split('\n')
    file.close()

    selector = '<select name="Page" id="pageSelector">\n'
    value=0
    

    for line in lines:
        try:
            data = line.split('。')
            name = data[0]
            desc = data[1]
        except:
            print(line)
            continue
        selector += '    <option value="' + str(value)+'">' + name +"</option>\n" 
        value+=1
    
    selector+='</select>'

    file=open("generate_js/output.txt",'w')
    file.write(selector)
    file.close()

def generate_both():
    generate_js()
    generate_selector()


generate_both();