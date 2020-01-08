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
    resultZone.innerText = "";



    let inputZone = document.createElement("div")
    inputZone.classList.add("inputZone");
    viewZone.appendChild(inputZone);

    let inputOperation = document.createElement("input")
    inputOperation.classList.add("inputOperation");
    inputOperation.placeholder = "0";
    //calcBtn.dataset.value = element; 
    inputZone.appendChild(inputOperation);
    //inputZone.innerText = "input";  

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
       calcBtn.id = `btn_${element}s`;
       calcBtn.innerText = element;
       calcBtn.dataset.value = element; 
       calcItem.appendChild(calcBtn);
       
       
    });

} 
createCalcZone(calcBtnList);

const handleClickOnButton = function(event){

    in_memory = 0;
    let clickedValue = event.currentTarget;
    const excepts = ["MR","M+","M-","AC"];

    if (excepts.includes(clickedValue.dataset.value)){

        if (clickedValue.dataset.value === "AC"){
            document.querySelector(".inputOperation").value = "";
            document.querySelector(".resultZone").innerText = ""; 
        }

        if (clickedValue.dataset.value === "M+"){

            function addInMem(){

                const tempMem =  parseFloat(document.querySelector(".resultZone").innerText || "");
                localStorage.setItem("memory",tempMem);

                // let tempMem = parseFloat(localStorage.getItem("memory"));
                // if (!tempMem || tempMem === ""){
                //     tempMem =  parseFloat(document.querySelector(".resultZone").innerText);
                //     localStorage.setItem("memory",tempMem);
                // }
                // else{
                //     const tempResult = parseFloat(document.querySelector(".resultZone").innerText || "");
                //     localStorage.setItem("memory",tempMem+tempResult);
                // }
                // let tempMem = parseFloat(localStorage.getItem("memory"));
                
                
                console.log(parseFloat(localStorage.getItem("memory") || ""));
            }
            return addInMem();

        }
        if (clickedValue.dataset.value === "M+"){
            localStorage.clear();
        }
        if (clickedValue.dataset.value === "MR"){
            const tempMem = localStorage.getItem("memory") || "";
            document.querySelector(".resultZone").innerText = tempMem; 
        }

    }
    else if(clickedValue.dataset.value === "="){
        const inputCurrentValue = document.querySelector(".inputOperation").value;
        result = eval(inputCurrentValue); //= inputCurrentValue+clickedValue.dataset.value;
        //document.querySelector(".inputOperation").value = inputCurrentValue;
        document.querySelector(".resultZone").innerText = result; 
        console.log(result);
    }
    else{
        let inputCurrentValue = document.querySelector(".inputOperation").value;
        inputCurrentValue = inputCurrentValue+clickedValue.dataset.value;
        document.querySelector(".inputOperation").value = inputCurrentValue;
        console.log(inputCurrentValue)
    }

    console.log(event.currentTarget);
}

const handleKeyPress = function(event){
    console.log(event.currentTarget);
}

// Interactive Zone click or keypress event 
const buttonClick = function(){
    btns = document.querySelectorAll(".calcBtn");
    console.log(btns);
    btns.forEach(element => {
        element.addEventListener("click",handleClickOnButton);
        element.addEventListener("keypress",handleKeyPress);
    } )
}
buttonClick();