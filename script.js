var formInput = document.querySelector("#form");
var formInput2 = document.querySelector("#form2");
var formInput3 = document.querySelector("#form3");
var formInput4 = document.querySelector("#form4");
var formInput5 = document.querySelector("#form5");
var formInput6 = document.querySelector("#form6");
var formInput7 = document.querySelector("#form7");
var saveButton = document.querySelector(".saveBtn");
var saveButton2 = document.querySelector(".saveBtn2");
var saveButton3 = document.querySelector(".saveBtn3");
var saveButton4 = document.querySelector(".saveBtn4");
var saveButton5 = document.querySelector(".saveBtn5");
var saveButton6 = document.querySelector(".saveBtn6");
var saveButton7 = document.querySelector(".saveBtn7");
recordForm();
recordForm2();
recordForm3()
recordForm4();
recordForm5();
recordForm6();
recordForm7();


var NowDate = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var sDay = NowDate.getDate();
var sMonth = NowDate.getMonth() + 1;
var sYear = NowDate.getFullYear();
var eDisplayDate = document.getElementById('displayDate');
eDisplayDate.innerHTML = sMonth+'-'+sDay+'-'+sYear;

function recordForm() {
    
  document.getElementById("form").value = localStorage.getItem("form");
}

saveButton.addEventListener("click", function(event) {
   event.preventDefault();
  

    var formCall = document.querySelector("#form").value;

    if (formInput === "") {
        displayMessage("Thank you for your input");
    } else {
        localStorage.setItem("form", formCall);
        recordForm();
    } console.log(saveButton)
});

function recordForm2() {
    document.getElementById("form2").value = localStorage.getItem("form2");
  }

  saveButton2.addEventListener("click", function(event) {
    event.preventDefault();
   
 
     var formCall2 = document.querySelector("#form2").value;
 
     if (formInput2 === "") {
         displayMessage("Thank you for your input");
     } else {
         localStorage.setItem("form2", formCall2);
         recordForm2();
     } 
 });

 function recordForm3() {
    document.getElementById("form3").value = localStorage.getItem("form3");
  }
  
  saveButton3.addEventListener("click", function(event) {
     event.preventDefault();
    
  
      var formCall3 = document.querySelector("#form3").value;
  
      if (formInput3 === "") {
          displayMessage("Thank you for your input");
      } else {
          localStorage.setItem("form3", formCall3);
          recordForm();
      } 
  });

  function recordForm4() {
    document.getElementById("form4").value = localStorage.getItem("form4");
  }
  
  saveButton4.addEventListener("click", function(event) {
     event.preventDefault();
    
  
      var formCall4 = document.querySelector("#form4").value;
  
      if (formInput4 === "") {
          displayMessage("Thank you for your input");
      } else {
          localStorage.setItem("form4", formCall4);
          recordForm4();
      } 
  });

  function recordForm5() {
    document.getElementById("form5").value = localStorage.getItem("form5");
  }
  
  saveButton5.addEventListener("click", function(event) {
     event.preventDefault();
    
  
      var formCall5 = document.querySelector("#form5").value;
  
      if (formInput5 === "") {
          displayMessage("Thank you for your input");
      } else {
          localStorage.setItem("form5", formCall5);
          recordForm();
      } 
  });

  function recordForm6() {
    document.getElementById("form6").value = localStorage.getItem("form6");
  }
  
  saveButton6.addEventListener("click", function(event) {
     event.preventDefault();
    
  
      var formCall6 = document.querySelector("#form6").value;
  
      if (formInput6 === "") {
          displayMessage("Thank you for your input");
      } else {
          localStorage.setItem("form6", formCall6);
          recordForm6();
      } 
  });

  function recordForm7() {
    document.getElementById("form7").value = localStorage.getItem("form7");
  }
  
  saveButton7.addEventListener("click", function(event) {
     event.preventDefault();
    
  
      var formCall7 = document.querySelector("#form7").value;
  
      if (formInput7 === "") {
          displayMessage("Thank you for your input");
      } else {
          localStorage.setItem("form7", formCall7);
          recordForm7();
      } 
  });