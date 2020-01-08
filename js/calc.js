calcBtnList = ["MR","M+","M-","AC","7","8","9","/","6","5","4","*","3","2","1","-","0",".","=","+"];


const createCalcZone = function(calcBtnList){
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    //left div
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("leftDiv");
    container.appendChild(leftDiv);
    leftDiv.innerText = "left";

    //Operation and result view zone
    const viewZone = document.createElement("div");
    viewZone.classList.add("viewZone");
    container.appendChild(viewZone);

    let resultZone = document.createElement("div")
    resultZone.classList.add("resultZone");
    viewZone.appendChild(resultZone);
    resultZone.innerText = "resultS";

    let inputZone = document.createElement("div")
    inputZone.classList.add("inputZone");
    viewZone.appendChild(inputZone);
    inputZone.innerText = "input";  

    //left div
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("rightDiv");
    container.appendChild(rightDiv);
    rightDiv.innerText = "right";

    //Interactive buttons zone
    const interactiveZone = document.createElement("div");
    interactiveZone.classList.add("interactiveZone");
    container.appendChild(interactiveZone);

    calcBtnList.forEach(element => {
       let calcItem = document.createElement("div")
       calcItem.classList.add("item");
       interactiveZone.appendChild(calcItem);

       let calcBtn = document.createElement("button")
       calcBtn.classList.add("calcBtn");
       calcBtn.innerText = element;
       calcBtn.dataset.value = element; 
       calcItem.appendChild(calcBtn);   
    });

} 
createCalcZone(calcBtnList);