const leaveData = JSON.parse(localStorage.getItem("LeaveData")) || [];

const approvedData = JSON.parse(localStorage.getItem("approved")) || [];

const rejectedData = JSON.parse(localStorage.getItem("rejected")) || [];



function getNumberOfDays(startDate, endDate) {

 const startDateObj = new Date(startDate);

 const endDateObj = new Date(endDate);

 const timeDiff = endDateObj - startDateObj;

 const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

 return daysDiff;

}

const table = document.getElementById("table");

var data = `

 <tr>

 <th>Unique ID</th>

 <th>Name</th>

 <th>Days of leave</th>

 <th>Overseer</th>

 <th>Status</th>

 </tr>

 `;

leaveData.forEach((e, i) => {

 data += `

       <tr>

         <td>${e.uID}</td>

         <td>${e.name}</td>

         <td>${getNumberOfDays(e.startDate, e.endDate)}</td>

         <td>${e.overseer}</td>

         <td>${e.status}</td>

       </tr>

       `;

});

approvedData.forEach((e, i) => {

 data += `

        <tr>

          <td>${e.uID}</td>

          <td>${e.name}</td>

          <td>${getNumberOfDays(e.startDate, e.endDate)}</td>

          <td>${e.overseer}</td>

          <td>${e.status}</td>

        </tr>

        `;

});

rejectedData.forEach((e, i) => {

 data += `

        <tr>

          <td>${e.uID}</td>

          <td>${e.name}</td>

          <td>${getNumberOfDays(e.startDate, e.endDate)}</td>

          <td>${e.overseer}</td>

          <td>${e.status}</td>

        </tr>

        `;

});

table.innerHTML = data;

