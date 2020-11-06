//make is submit by enter
//window.addEventListener("keydown",commands(document.getElementById('txt1').value))

const openLeft=()=> document.getElementById("leftBar").style.width = "25%";
const  closeLeft=()=> document.getElementById("leftBar").style.width = "0";
swap1=()=> {
    document.getElementById("friend").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "visible";   };

    let comm = document.getElementById('filename')

    let commandString = ""
    let inventory ={
        medicine:10

    }
    let = items ={
        rope: 10,
        net: 10,
        medicine:10,
    }    
    let eatJokes = ["hai", " no","find","don't eat"] 

    let takeItem = (item) =>{
        currentLocation.take 

    }
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
    
        switch (command) {
            case"look": case "where":
                console.log(currentLocation.look);
                console.log(currentLocation.take);
                    break;
            case "west":case "w":
             currentLocation.west
             console.log(currentLocation.look);
             break;
            case "east": case "e":
                currentLocation = currentLocation.east
                console.log(currentLocation.look);

                break;
            case "south":case "s":
                currentLocation = currentLocation.south
                console.log(currentLocation.look);

                break;
            case "north" :case "n":
                currentLocation = currentLocation.north
                console.log(currentLocation.look);

                break;
            case "take" :case "pick up" :case "pick":
                commandString += "take"
                console.log("take what?")
                //comm
                if (currentLocation.take == 0) { console.log("haii")}
                else{ takeItem(currentLocation.take);
                }break;
            case "eat $(x)" :
                    commandString += "eat";
                    console.log("eat what ?");
                    //take spesifier object from player
                    //code here
                    //--------------------------------

                console.log(eatJokes[Math.floor(Math.random()*4) ]);
                    commandString = ""
                break;
            default:
                console.log("listen here you lil")
                break;
        }
     
};

let currentLocation = harbor;


harbor.north = city
harbor.east = ocean
harbor.south = home
harbor.west = land
//remove the case statements
