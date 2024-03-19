// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetDiv = document.getElementById("missionTarget");
missionTargetDiv.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}" > `; ////alt="${name} image
 } 
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus =  document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");


    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!"); 
    }else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
    }else {
    document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";

    if (fuelLevel < 10000  && cargoLevel <= 10000) {
       // document.getElementById("faultyItems").style.visibility = "visible";
        fuelStatus.textContent = "Fuel level too low for launch"
        cargoStatus.textContent = "Cargo mass low enough for launch"
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
        
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        fuelStatus.textContent = "Fuel level high enough for launch";
        cargoStatus.textContent = "Cargo mass too heavy for launch"
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';

    }else if (fuelLevel < 10000 && cargoLevel > 10000) {
        fuelStatus.textContent = "Fuel level too low for launch";
        cargoStatus.textContent = "Cargo mass too heavy for launch"
        launchStatus.textContent = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    }else {
        fuelStatus.textContent = "Fuel level high enough for launch";
        cargoStatus.textContent = "Cargo mass low enough for launch";
        launchStatus.textContent = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
    } 
 }
}
 
 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
        .then(function (response) {
            return response.json()
        });

    return planetsReturned;
}
 
 function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;