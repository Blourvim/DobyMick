
//Handles outputing text
let write=(text)=> {
const x = document.createElement("li");  
const t = document.createTextNode(text); 
x.appendChild(t);                                 
document.getElementById("text-field").appendChild(x);                   
}
//menu stuff
const openLeft=()=> document.getElementById("leftBar").style.width = "25%";
const  closeLeft=()=> document.getElementById("leftBar").style.width = "0";
swap1=()=> {
    document.getElementById("friend").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "visible";   
};
//command string to handle multiple word commands

//-item constructor
class item {
    constructor(name, state){
        this.name = name;
        this.state = state;
    };
};
//Game content
let items = [
    knife = new item("knife", 0),
    medicine = new item("medicine", 1)
]
    medicine.description = "Big medicine"
    let inventory = []

    harbor ={
        look :"Nice place",
        north:"city",
        east:"ocean",
        south:"home",
        west: "land",
        take:[knife.name ,medicine.name]
    };
    land ={
        look:"There are shops around",
        east: "harbor"
    };
    city ={
        look:"init ending1"
    };

    let eatJokes = ["hai", " no","find","don't eat"] 

//Main gameplay handler
//takes command from the list and handles it
//if there is command string, handles muliple words //work in progress
let commandString =[]

    let commands=(command)=> { 
        document.getElementById("txt1").value = ""
    if (commandString.length == 0){   
        switch (command) {
            case"look": case "where":
                write(currentLocation.look);
                write(currentLocation.take);
                    break;
            case "west":case "w": case "go west": 
             currentLocation = currentLocation.west
             write(currentLocation.look);
             break;
            case "east": case "e": case "go east": 
                currentLocation = currentLocation.east
                write(currentLocation.look);

                break;
            case "south":case "s": case "go south":
                currentLocation = currentLocation.south
                write(currentLocation.look);

                break;
            case "north" :case "n":case "go north":
                currentLocation = currentLocation.north
                write(currentLocation.look);

                break;
            case "take" :case "pick up" :case "pick":
                commandString += "take"
                write(command + " what ?")
                
                break;
            case "eat $(x)" :
            write(eatJokes[Math.floor(Math.random()*4) ]);
            write("write jokes")
                break;
            case "drop":
                write("Drop what ?")
                commandString = "drop"
                break;
            case items.keys:
                write("yes")
                break;
            default:
                write("Sorry I don't understand")
               
                break; }
    }
        else{
                switch (commandString) {
                    case "take": case "pickup":case "get":
                        if([currentLocation.take][0].indexOf(command) != -1  ){  
                            inventory.push(command); 
                            commandString ="";       
                            //command.state = 1;
                            write(command + "taken")
                            currentLocation.take                
                        }
                        else {
                        write("there is no " + command +" to take")
                        commandString = ""}
                        break;
                    case "drop":
                        inventory -= command;
                        write(command + " was dropped");
                    default:
                        break;
                }
        }

        
     
};

let take = (itemName)=>{
    inventory.push(itemName)



};


let currentLocation = harbor;
//needed to set room links otherwise get initilization error
harbor.north = city;
harbor.east = ocean;
harbor.south = home;
harbor.west = land;


//Plans and notes
//remove the case statements maybe ?

