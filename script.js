// Write your JavaScript code here!
const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        let selectedPlanet = pickPlanet(listedPlanets); 
        let { name, diameter, star, distance, moons, imageUrl } = selectedPlanet;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
        let list= document.getElementById("faultyItems");
        list.style.visibility = "hidden";
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event){

        
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });
    
 });