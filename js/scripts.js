// //Buisness Logic
function beepBoop(number) {
  
  const parsedNumber = parseInt(number, 10);
  let arrayValues = [];
  
  if ((!Number.isInteger(parsedNumber))|| (parsedNumber <= 0)) {
    return {
      error: true,
      message:"A positive Integer was not entered"
    };
  } else {
    for ( i = 0 ; i <= parsedNumber; i += 1) {
      arrayValues.push(i);
    }
  }
  const numberString = arrayValues.toString().split(","); //Putting a note here just so I dont forget about this in our meeting. I have a question regarding (",").
  const outArrayString =  replaceElements(numberString);
  
  return outArrayString;
}

function replaceElements(numberString) {

  const subFor1s = "Beep!";
  const subFor2s = "Boop!";
  const subFor3s = "Won't you be my neighbor?";
  const subFor69s = "Heh Noice!";
  const outputString = numberString.map (function (element) {  
    if (element.includes(3)) {
      return subFor3s;

    } else if (element.includes(2)) {
        return subFor2s;

    } else if (element.includes(69)) {
        return subFor69s
        //("#noiceGif").show(); Putting a note here just so I dont forget about this in our meeting. I have a question regarding image.
      
    } else if (element.includes(1)) {
        return subFor1s;
    
    } else {      
        return element;
    }  
  });

return outputString;
}

// UI logic

function handleInput(event) {

  const inputString = document.getElementById("inputNumber").value;
  const outputString = beepBoop(inputString);

  document.getElementById("outputList").innerText = outputString;
  event.preventDefault();
}


window.addEventListener("load", function() {
  document.getElementById("userInput").addEventListener("submit", handleInput);
  
  let form = document.querySelector("form");
  let submitBtn = document.getElementById("submitBtn");
  let resetBtn = document.getElementById("resetBtn");

  submitBtn.removeAttribute("hidden");
  
  form.addEventListener("submit", function() {
    submitBtn.setAttribute("hidden","hidden");
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    submitBtn.removeAttribute("hidden");
    document.getElementById("results").innerText = null;
    resetBtn.setAttribute("class","hidden")
  });

});
