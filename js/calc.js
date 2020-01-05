calcBtnList = ["MR","M+","M-","AC","7","8","9","/","6","5","4","*","3","2","1","-","0",".","=","+"];


const createCalcZone = function(calcBtnList){
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    //Operation and result view zone
    const viewZone = document.createElement("div");
    viewZone.classList.add("viewZone");
    container.appendChild(viewZone);

    let resultZone = document.createElement("div")
    resultZone.classList.add("resultZone");
    viewZone.appendChild(resultZone);

    let inputZone = document.createElement("div")
    resultZone.classList.add("inputZone");
    viewZone.appendChild(inputZone);

    //Interactive buttons zone
    const interactiveZone = document.createElement("div");
    interactiveZone.classList.add("interactiveZone");
    container.appendChild(interactiveZone);

    calcBtnList.forEach(element => {
       let calcBtn = document.createElement("div")
       calcBtn.classList.add("item");
       calcBtn.dataset.value = element;
       calcBtn.innerText = element;
       interactiveZone.appendChild(calcBtn);

    });
} 
createCalcZone(calcBtnList);