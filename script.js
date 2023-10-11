const rForm = document.getElementById("registrationform");

rForm.addEventListener("submit", handleRForm);

function handleRForm(event) {

 event.preventDefault();

 const uID = document.getElementById("uID").value;

 const name = document.getElementById("name").value;

 const reason = document.getElementById("reason").value;

 const designation = document.getElementById("designation").value;

 const startDate = document.getElementById("startDate").value;

 const endDate = document.getElementById("endDate").value;

 const overseer = document.getElementById("overseer").value;

 const status = "Pending";

 if (startDate === endDate) {

  alert("Start Date and End Date can't be same, please change.");

  return;

 }

 const data = {

  uID,

  name,

  reason,

  designation,

  startDate,

  endDate,

  overseer,

  status

 };



 var savedData = JSON.parse(localStorage.getItem("LeaveData")) || [];

 savedData.push(data);

 localStorage.setItem("LeaveData", JSON.stringify(savedData));



 document.getElementById("uID").value = "";

 document.getElementById("name").value = "";

 document.getElementById("reason").value = "";

 document.getElementById("designation").value = "";

 document.getElementById("startDate").value = "";

 document.getElementById("endDate").value = "";

 document.getElementById("overseer").value = "";

}

