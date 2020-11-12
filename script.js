
//handles getting items
let take=(item)=>{
    commandString = " ";
    switch (item) {
        case "knife":
            inventory.knife =(knife);
            delete currentLocation.take.knife;
            
            break;
        default:
            break;
    }
   

}
let drop=(command)=>{
    commandString = " ";
    switch(command){
       case "knife":
        delete inventory.knife;
        currentLocation.take.knife = knife;
    }

}

let use=(input)=>{
    commandString = " ";
switch (input) {
    case "knife":
        write("use knife on what ?")
        
        break;

    default:
        break;
}


}


let useStationary=(input)=>{
    commandString = " ";
    switch(input){
        case "atm":
            write("It is out of service")
            break;

    }


}
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
    medicine = new item("medicine", 1),
    atm = new item("atm",1)
]
    medicine.description = "Big medicine"
    let inventory = {}

    harbor ={
        look :"Nice place",
        north:"city",
        east:"ocean",
        south: "home",
        west: "land",
        take: {knife, medicine},
        useableItems: {atm},
    };
    land ={
        look:"There are shops around",
        north:"",
        east: "harbor",
        south:"ocean",
        west: "land",
        take:{}
    };
    city ={
        look:"Huge buildings lay upon you, you have "
    };

    let eatJokes = ["hai", " no","find","don't eat"] 

//Main gameplay handler
//takes command from the list and handles it
//if there is command string, handles muliple words //work in progress
let commandString =[]
let commandArray = []
    let commands=(command)=> { 
        document.getElementById("txt1").value = "";
        commandArray =command.split(` `);
    if (commandString.length == 0){   
        switch (command) {
            case"look": case "where": case "look around":
                write(currentLocation.look);
                write(Object.keys(currentLocation.take))
           
                
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
            case "eat" :
            write(eatJokes[Math.floor(Math.random()*4) ]);
            break;
            case "drop":
                write("Drop what ?")
                commandString = "drop"
                break;
            case "inventory": case "i":
                if(Object.keys(inventory).length == 0){
                    write("You carry nothing of value");
                }
                else write(Object.keys(inventory));

                break;
            case "use": 
            commandString = "use"
            write("use what ?")
            //add stuff
            break;
            default:
                if(commandArray.length == 2){
                switch (commandArray[0]) {
                    case "take": case "get": case "pick up":
                        if(currentLocation.take[commandArray[1]] != undefined){ 
                        take(commandArray[1]);
                        write(commandArray[1] + " taken");
                    }
                        else write(commandArray[1] + " not getable");
                    
                        break;
                    case "use":
                        if(inventory[commandArray[1]] != undefined){
                            use(commandArray[1]);
                        }
                        else if(currentLocation.useableItems[commandArray[1]] != undefined){ 
                            useStationary(commandArray[1]);

                        }
                        break;
                    default:
                        write("Sorry I don't understand") //sorry she won't understand ?, it would break her ?, must keep illusion, no wake up yet
                        break;
                }  
            }
                else write("sorry she won't understand that")

                               
                break; }
    }
        else{
                switch (commandString) {
                    case "take": case "pickup":case "get":
                        if(currentLocation.take[`${command}`]!= undefined ){  
                        take(command);
                        write(`You got ${command}`)
                        commandString = "";
                        }
                        else {
                        write("there is no " + command +" to take")
                        commandString = ""}
                        break;
                    case "drop":
                        if(inventory[`${command}`]!= undefined){
                            drop(command);
                            write(command + " dropped");
                        }
                    case "use":
                        if(inventory[`${command}`] != undefined){
                            use(command);
                        }
                        else if(currentLocation.useableItems[`${command}`] != undefined){
                            useStationary(command);
                        }
                        else write(`sorry there is no ${command} to use` );
                        break;
                    default:
                        write("she won't understand that")
                        break;
                }
        }
    
        
     
};


let currentLocation = harbor;
//needed to set room links at the end otherwise get initilization error
//harbor.north = city;
//harbor.east = ocean;
//harbor.south = home;
//harbor.west = land;


//Plans and notes
//remove the case statements maybe ?
