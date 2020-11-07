//make is submit by enter
//window.addEventListener("keydown",commands(document.getElementById('txt1').value))
let write=(text)=> {
const x = document.createElement("li");                        // Create a <p> node
const t = document.createTextNode(text);    // Create a text node
x.appendChild(t);                                           // Append the text to <p>
document.getElementById("text-field").appendChild(x);                   
}

const openLeft=()=> document.getElementById("leftBar").style.width = "25%";
const  closeLeft=()=> document.getElementById("leftBar").style.width = "0";
swap1=()=> {
    document.getElementById("friend").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "visible";   
};

    let eatJokes = ["hai", " no","find","don't eat"] 
    harbor ={
        look :"Nice place",
        north:"city",
        east:"ocean",
        south:"home",
        west: "land",
        take:["phone","dept"]
    };
    land ={
        look:"There are shops around",
        east: "harbor"
    };
    city ={
        look:"init ending1"
    }

    let commands=(command)=> { 
        document.getElementById("txt1").value = ""
    
        switch (command) {
            case"look": case "where":
                write(currentLocation.look);
                write(currentLocation.take);
                    break;
            case "west":case "w":
             currentLocation.west
             write(currentLocation.look);
             break;
            case "east": case "e":
                currentLocation = currentLocation.east
                write(currentLocation.look);

                break;
            case "south":case "s":
                currentLocation = currentLocation.south
                write(currentLocation.look);

                break;
            case "north" :case "n":
                currentLocation = currentLocation.north
                write(currentLocation.look);

                break;
            case "take" :case "pick up" :case "pick":
               
                break;
            case "eat $(x)" :
            write(eatJokes[Math.floor(Math.random()*4) ]);
                break;
            default:
                write("Sorry I don't understand")
               
                break;
        }
     
};




let currentLocation = harbor;

harbor.north = city
harbor.east = ocean
harbor.south = home
harbor.west = land
//remove the case statements maybe ?
