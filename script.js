var formInput = document.querySelector("#form");
var saveButton = document.querySelector("#saveBtn");

recordForm();
function recordForm() {
    var form = localStorage.getItem("form");
    if (form === null) {
        return;
    }
    formInput.textContent = form;
} 
console.log(saveButton)
// saveButton.addEventListener("click", function(event) {
//    event.preventDefault();
  

//     var form = document.querySelector("#form").value;

//     if (form === "") {
//         displayMessage("Thank you for your input");
//     } else {
//         localStorage.setItem("form", form);
//         recordForm();
//     }
// });