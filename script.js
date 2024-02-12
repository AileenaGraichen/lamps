"use strict";
window.addEventListener("load", start);

let lightSwitches = [];
let chaselight = false;


function start() {
  console.log("Javascript kører");
  findAllTheLampsAndTheirCheckboxes();
  enableAllCheckboxes();
  enableChaseLight();
}

function enableChaseLight(){
  const button = document.querySelector("#chase_light");
  button.addEventListener("click", () => {
    console.log(`start løbelys`)
    chaselight = true;
    lightSwitches[0].checkbox.click();
  })
}

function enableAllCheckboxes(){
  for(const lightSwitch of lightSwitches){
    const lamp = lightSwitch.lamp;
    const checkbox = lightSwitch.checkbox;

    checkbox.addEventListener("click", (event) => {

      if(chaselight && lightSwitch.next){
        setTimeout(() => lightSwitch.next?.checkbox.click(), 500);
      } else {
        chaselight = false;
      }

      if(checkbox.checked){
        lamp.classList.add("on");
      } else {
        lamp.classList.remove("on");
      }
    })
  }
}

function findAllTheLampsAndTheirCheckboxes(){
  const lamps = document.querySelectorAll(".lamp");
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  for(let i = 0; i < lamps.length; i++){
    const theLamp = lamps[i];
    const theCheckbox = checkboxes[i];

    const lightSwitch = {
      lamp: theLamp,
      checkbox: theCheckbox
    }
    lightSwitches.push(lightSwitch);
  }
  lightSwitches[0].next = (lightSwitches[1]);
  lightSwitches[1].next = (lightSwitches[2]);
  lightSwitches[2].next = (lightSwitches[3]);
  lightSwitches[3].next = (lightSwitches[4]);
  lightSwitches[4].next = null;
}