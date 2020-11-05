
const openLeft=()=> document.getElementById("leftBar").style.width = "25%";
const  closeLeft=()=> document.getElementById("leftBar").style.width = "0";


swap1=()=> {
    document.getElementById("friend").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "visible";   };

    let = items ={
        rope: 10,
        net: 10,
        medicine:10,
    }    
    harbor ={
        look :"Nice place",
        north:"city",
        east:"ocean",
        south:"home",
        west: "land",
        take:0
    };
    land ={
        look:"There are shops around",
        east: "harbor"
    };
    city ={
        look:"init ending1"
    }

    let currentLocation = harbor;


    let command=(input)=> { 
        switch (input) {
            case"look": case "where":
                console.log(currentLocation.look);
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
               
                if (currentLocation.take == 0) { console.log("haii")}
                else{  console.log("hello");
                }break;
            default:
                console.log("listen here you lil")
                break;
        }
     
};

harbor.north = city
harbor.east = ocean
harbor.south = home
harbor.west = land

