calcBtnValList = ["MR", "M+", "M-", "AC", "7", "8", "9", "/", "6", "5", "4", "*", "3", "2", "1", "-", "0", ".", "=", "+"];
const operators = ["/", "*", "+", "-"];

// AC button handling
const acButton = document.querySelector("#btn-ac");
acButton.addEventListener("click", function (e) {
    let clickedValue = e.currentTarget;
    document.querySelector(".input-operation").value = "";
    document.querySelector(".result-zone").innerText = "";
}
)

const memoryButtons = document.querySelectorAll(".memory-btn");
memoryButtons.forEach(function (memoryBtn) {
    memoryBtn.addEventListener("click", function (e) {
        let clickedValue = e.currentTarget;

        // Memory buttons click handling

        if (clickedValue.dataset.value === "M+") {

            const tempMem = parseFloat(document.querySelector(".result-zone").innerText || "");
        localStorage.setItem("memory", tempMem);

        }
        if (clickedValue.dataset.value === "M-") {
            localStorage.clear();
        }
        if (clickedValue.dataset.value === "MR") {
            let tempMem = localStorage.getItem("memory") || "";
            if (isNaN(tempMem)) {
                tempMem = "";
            }
            document.querySelector(".input-operation").value = tempMem;
            document.querySelector(".result-zone").innerText = "";
        }

    })
})

const operatorButtons = document.querySelectorAll(".operator-btn")
operatorButtons.forEach(function (operatorBtn) {
    operatorBtn.addEventListener("click", function (e) {
        let clickedValue = e.currentTarget;
        if (clickedValue.dataset.value!="="){
            document.querySelector(".input-operation").value += clickedValue.dataset.value;
        }
        let inputCurrentValue = document.querySelector(".input-operation").value;
        //handling dot for regexp 

        inputCurrentValue = inputCurrentValue.replace(/\./g, "@")
        let resultCurrentValue = document.querySelector(".result-zone");

        // In case there is no result in resultZone
        if (isNaN(resultCurrentValue.innerText) || resultCurrentValue.innerText === "") {
            let splitted = inputCurrentValue.split(/[+-/*]+/);
            let lastOperator = inputCurrentValue[splitted[0].length];
            splitted = splitted.map(element => element.replace(/@/g, "."));
            //As soon as there is 4 elements in inputOperation Zone
            if (splitted.length === 3) {
                splitted[0] = parseFloat(splitted[0])
                splitted[1] = parseFloat(splitted[1])

                if (clickedValue.dataset.value!="="){
                    document.querySelector(".input-operation").value += clickedValue.dataset.value;
                }
                
                switch (lastOperator) {
                    case "*":
                        // console.log(parseFloat(splitted[0] * splitted[1]));
                        resultCurrentValue.innerText = parseFloat(splitted[0] * splitted[1]);
                        break;
                    case "/":
                        resultCurrentValue.innerText = parseFloat(splitted[0] / splitted[1]);
                        break;
                    case "-":
                        resultCurrentValue.innerText = parseFloat(splitted[0] - splitted[1]);
                        break;
                    case "+":
                        resultCurrentValue.innerText = parseFloat(splitted[0] + splitted[1]);
                        break;
                }
            }
        }
        //If there is already an intermediary result
        else {
            splitted = inputCurrentValue.split(/[+-/*]+/);
            lastValue = splitted[splitted.length - 2];
            lastOperator = inputCurrentValue[(inputCurrentValue.length - 1) - (lastValue.length + 1)];
            parsedCurrentResult = parseFloat(resultCurrentValue.innerText);
            lastValue = lastValue.replace(/@/g, ".");
            lastValue = parseFloat(lastValue);
            switch (lastOperator) {
                case "*":
                    resultCurrentValue.innerText = parseFloat(parsedCurrentResult * lastValue);
                    break;
                case "/":
                    resultCurrentValue.innerText = parseFloat(parsedCurrentResult / lastValue);
                    break;
                case "-":
                    resultCurrentValue.innerText = parseFloat(parsedCurrentResult - lastValue);
                    break;
                case "+":
                    resultCurrentValue.innerText = parseFloat(parsedCurrentResult + lastValue);
                    break;
            }


        }
    })
});

const buttons = document.querySelectorAll(".calc-btn");
buttons.forEach(element => {
    element.addEventListener("click", function (e) {
        let clickedValue = event.currentTarget;
        document.querySelector(".input-operation").value += clickedValue.dataset.value;
    })
})


