

let take = (item) => {
  commandHistory = "";
  switch (item) {
    case "knife":
      inventory.knife = knife;
      delete currentLocation.take.knife;

      break;
    default:
      write("yay you found an error");
      break;
  }
};



const takeNew=(item)=>{
  console.error('hiiiiii')
 }
let drop = (command) => {
  commandHistory = "";
  switch (command) {
    case "knife":
      delete inventory.knife;
      currentLocation.take.knife = knife;
  }
};

let use = (input) => {
  commandHistory = "";
  switch (input) {
    case "knife":
      write("use knife on what ?");
      break;

    default:
      break;
  }
};

let useStationary = (input) => {
  commandHistory = "";
  switch (input) {
    case "atm":
      write("It is out of service");
      break;
  }
};
//Handles outputing text

let write = (text) => {
  const x = document.createElement("li");
  const t = document.createTextNode(text);
  x.appendChild(t);
  const textField = document.getElementById("text-field");
  textField.appendChild(x);
  textField.scrollTop = textField.scrollHeight;
};

//-item constructor
class item {
  constructor(name, state) {
    this.name = name;
    this.state = state;
  }
}

//Game content
let items = [
  (knife = new item("knife", 0)),
  (medicine = new item("medicine", 1)),
  (atm = new item("atm", 1)),
];
medicine.description = "Big medicine";
let inventory = {};

harbor = {
  look: `It is a nice place, during this time of the day, no ship is here, your ship and child awaits you in the 
  east, from far in the south, you see your home, to the west is the beach that goes as long as your eye can see,
  back north is the city, where you might be able to shop before your journey`,
  north: "city",
  east: "ocean",
  south: "home",
  west: "land",
  take: { knife, medicine },
  useableItems: { atm },
};
land = {
  look: "There are shops around",
  north: "",
  east: "harbor",
  south: "ocean",
  west: "land",
  take: {},
};
city = {
  look: "Huge buildings lay upon you, you have ",
};

//Handles one word commands such as use, //use what ?
let commandHistory = [];

//Main gameplay handler
//takes command from the list and handles it

let commands = (command) => {
  document.getElementById("txt1").value = "";
  write(">" + command);
  if (commandHistory.length == 0) {
    switch (command) {
      case "look":
      case "where":
      case "look around":
        write(currentLocation.look);
        write(Object.keys(currentLocation.take));

        break;
      case "west":
      case "w":
      case "go west":
        currentLocation = currentLocation.west;
        write(currentLocation.look);

        break;
      case "east":
      case "e":
      case "go east":
        currentLocation = currentLocation.east;
        write(currentLocation.look);

        break;
      case "south":
      case "s":
      case "go south":
        currentLocation = currentLocation.south;
        write(currentLocation.look);

        break;
      case "north":
      case "n":
      case "go north":
        currentLocation = currentLocation.north;
        write(currentLocation.look);

        break;
      case "take":
      case "pick up":
      case "pick":
        commandHistory = "take";
        write(command + " what ?");

        break;
      case "eat":
        let eatJokes = ["hai", " no", "find", "don't eat"];
        write(eatJokes[Math.floor(Math.random() * 4)]);

        break;
      case "drop":
        write("Drop what ?");
        commandHistory = "drop";

        break;
      case "inventory":
      case "i":
        if (Object.keys(inventory).length == 0) {
          write("You carry nothing of value");
        } else write(Object.keys(inventory));

        break;
      case "use":
        commandHistory = "use";
        write("use what ?");

        break;
      case "clear":
      case "clr":
      case "cls":
        document.getElementById("text-field").innerHTML = " ";

        break;

      default:
        if (command.split(` `).length == 2) {
          switch (command.split(` `)[0]) {
            case "take":
            case "get":
            case "pick up":
              if (currentLocation.take[command.split(` `)[1]] != undefined) {
                take(command.split(` `)[1]);
                write(command.split(` `)[1] + " taken");
              } else write(command.split(` `)[1] + " not getable");

              break;
            case "use":
              if (inventory[command.split(` `)[1]] != undefined) {
                use(command.split(` `)[1]);
              } else if (
                currentLocation.useableItems[command.split(` `)[1]] != undefined
              ) {
                useStationary(command.split(` `)[1]);
              } else write("not possible");
              break;
            default:
              write("Sorry I don't understand"); //sorry she won't understand ?, it would break her ?, must keep illusion, no wake up yet
              break;
          }
        } else write("sorry she won't understand that");

        break;
    }
  } else {
    switch (commandHistory) {
      case "take":
      case "pickup":
      case "get":
        if (currentLocation.take[`${command}`] != undefined) {
          take(command);
          write(`You got ${command}`);
          commandHistory = "";
        } else {
          write("there is no " + command + " to take");
          commandHistory = "";
        }
        break;
      case "drop":
        if (inventory[`${command}`] != undefined) {
          drop(command);
          write(command + " dropped");
        }
      case "use":
        if (inventory[`${command}`] != undefined) {
          use(command);
        } else if (currentLocation.useableItems[`${command}`] != undefined) {
          useStationary(command);
        } else write(`sorry there is no ${command} to use`);
        commandHistory = "";

        break;
      default:
        write("she won't understand that");
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

//code reform concept for cleaner code
//swtich command.split(` `)[0]
//case use:
//if command.split(` `)[1] != undefined
let windState = true;
let windDirection = 2;
const directionNames = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
const direction4x = [0, +2, +2, 2, 0, -2, -2, -2, 0];
const direction4y = [+2, +2, 0, -2, -2, -2, 0, +2, +2];
let shipInfo = {
  fuel: 100,
  x: 0,
  y: 0,
  direction: "west",
  directionValue: 0,
};
let ahoy = () => {
  //handles rng every call
  let rng = Math.random() * (100 - 1) + 1;
  if (rng > 80) {
    windState = true;
    windDirection = Math.floor(Math.random() * (9 - 0) + 0);
    console.log("change direction" + directionNames[windDirection]);
    document.getElementById("wind").innerHTML =
      directionNames[windDirection] + "  wind";
  } else if (rng < 20) {
    windState = false;
    console.log("no wind");
    document.getElementById("wind").innerHTML = "no wind";
  }
  //engine
  if (engineState == true) {
    if (shipInfo.fuel > 0) {
      shipInfo.fuel -= gasSlider.value;
      //handles cordinatess
      shipInfo.x += Math.floor(
        direction4x[Math.round(shipInfo.directionValue / 45)] *
          (gasSlider.value * 0.1)
      );
      shipInfo.y += Math.floor(
        direction4y[Math.round(shipInfo.directionValue / 45)] *
          (gasSlider.value * 0.1)
      );
      document.getElementById("fuel").style.height = `${shipInfo.fuel}%`;
    } else {
      shipInfo.fuel = 0;
      engineState = false;
      document.getElementById("engine").innerHTML = "Start Ship";
      alert("out");
    }
  }

  //sailing
  if (sailState == true) {
    if (windState == true) {
      if (sailSlider.value == windDirection) {
        shipInfo.x += direction4x[windDirection] * 10;
        shipInfo.y += direction4y[windDirection] * 10;
      }
    } else {
    }
  } else {
    shipInfo.x += direction4x[windDirection];
    shipInfo.y += direction4y[windDirection];
  }
  document.getElementById("coordinates").innerHTML =
    directionNames[windDirection] + shipInfo.x + "  " + shipInfo.y;
  console.log(shipInfo.x + "-" + shipInfo.y);
};

let directionText = document.getElementById("direction-text");
let movement; //name of interval
movement = setInterval(ahoy, 1000, "engine");

let sailState = false;
const sailButton = document.getElementById("sail-button");
let sail = () => {
  if (sailState == false) {
    sailButton.innerHTML = "Sail Up";
    sailState = true;
  } else {
    sailButton.innerHTML = "Drop Sails";
    sailState = false;
  }
};
//slider with controls and display direction name
const shipWheelSlider = document.getElementById("wheel");
const direction = document.getElementById("direction");
shipWheelSlider.oninput = function () {
  direction.innerHTML = shipWheelSlider.value;
  shipInfo.directionValue = shipWheelSlider.value;
  directionText.innerHTML =
    directionNames[Math.round(shipInfo.directionValue / 45)];
};
//gas slider
const gasSlider = document.getElementById("gas");
const gauge = document.getElementById("gauge");
gauge.innerHTML = gasSlider.value;
gasSlider.oninput = function () {
  gauge.innerHTML = this.value;
};
//sail slider
const sailSlider = document.getElementById("sail");
const sailAngle = document.getElementById("sail-angle");
sailAngle.innerHTML = sailSlider.value;
sailSlider.oninput = function () {
  sailAngle.innerHTML = this.value;
};

let engineState = false;
const startEngine = () => {
  if (engineState == false && shipInfo.fuel != 0) {
    document.getElementById("engine").innerHTML = "Stop ship";
    console.log("working");
    engineState = true;
  } else if (engineState == true) {
    document.getElementById("engine").innerHTML = "Start Ship";
    engineState = false;
    console.log("stop");
  }
};
