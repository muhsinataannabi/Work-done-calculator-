let force = document.getElementById("force");
let distance = document.getElementById("distance");
let displayInput1 = document.getElementById("displayInput1");
let displayInput2 = document.getElementById("displayInput2");
let answer = document.getElementById("answer");
let  calculateBtn = document.getElementById("calculateBtn");
let step1 = document.getElementById("step1");
force.addEventListener("input", ()=>{
    displayInput1.innerHTML=`${force.value} N`;
});
distance.addEventListener("input", ()=>{
    displayInput2.innerHTML=`${distance.value} m`;
});
calculateBtn.addEventListener("click", (event)=>{
    let forceValue = parseFloat(force.value);
    let distanceValue = parseFloat(distance.value);
    if(!isNaN(force.value) && ! isNaN(distance.value)) {
        let  workDone = forceValue * distanceValue;
        answer.innerHTML = `Work Done: ${workDone} J`;
            step1.innerHTML = ` F = ${forceValue} N`;
            step2.innerHTML = ` d = ${distanceValue} m`;
            step3.innerHTML = `Work = F × d = ${forceValue} × ${distanceValue}`;
            finalStep.innerHTML = `Work Done = ${workDone} joules`;
            }else {
                answer.innerHTML = "please enter a valid values";
                step1.innerHTML = "";
                step2.innerHTML = "";
                step3.innerHTML = "";
                finalStep.innerHTML = "";
            }  
});
          