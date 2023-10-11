function OTP() {

    return Math.floor(1000 * Math.random() + 9000);
   
   }
   
   
   
   function renderData() {
   
    const leaveData = JSON.parse(localStorage.getItem("LeaveData"));
   
    const table = document.getElementById("table");
   
    var data = `
   
     <tr>
   
     <th>Unique ID</th>
   
     <th>Name</th>
   
     <th>Reason</th>
   
     <th>Designation</th>
   
     <th>Leave Start Date</th>
   
     <th>Leave End Date</th>
   
     <th>Overseer</th>
   
     <th>OTP</th>
   
     <th>Confirm</th>
   
     <th>Reject</th>
   
     </tr>
   
     `;
   
    leaveData.forEach((e, i) => {
   
     data += `
   
           <tr>
   
             <td>${e.uID}</td>
   
             <td>${e.name}</td>
   
             <td>${e.reason}</td>
   
             <td>${e.designation}</td>
   
             <td>${e.startDate}</td>
   
             <td>${e.endDate}</td>
   
             <td>${e.overseer}</td>
   
             <td id="o-${i}" >${OTP()}</td>
   
             <td><button class="cbutton" onclick="confirm(${i})">Confirm</button></td>
   
             <td><button class="rbutton" onclick="reject(${i})">Reject</button></td>
   
           </tr>
   
           `;
   
    });
   
    table.innerHTML = data;
   
   }
   
   renderData();
   
   //
   
   
   
   function confirm(i) {
   
    const otp = parseInt(document.getElementById(`o-${i}`).innerText);
   
    const eOTP = prompt("Please Enter the OTP");
   
    if (eOTP && parseInt(eOTP) === otp) {
   
     leaveApproved(i);
   
    } else {
   
     alert("Wrong OTP.");
   
    }
   
   }
   
   function reject(i) {
   
    const datanew = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    const { uID, name, startDate, endDate, overseer } = datanew[i];
   
    const rejectedData = JSON.parse(localStorage.getItem("rejected")) || [];
   
    const status = "Rejected";
   
    const newData = {
   
     uID,
   
     name,
   
     startDate,
   
     endDate,
   
     overseer,
   
     status,
   
    };
   
    rejectedData.push(newData);
   
    localStorage.setItem("rejected", JSON.stringify(rejectedData));
   
    datanew.splice(i, 1);
   
    localStorage.setItem("LeaveData", JSON.stringify(datanew));
   
   
   
    renderData();
   
   }
   
   
   
   function removeRow(i) {
   
    const datanew = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    datanew.splice(i, 1);
   
    localStorage.setItem("LeaveData", JSON.stringify(datanew));
   
   
   
    renderData();
   
   }
   
   
   
   function leaveApproved(i) {
   
    const leavvedata = JSON.parse(localStorage.getItem("LeaveData"))[i];
   
    const { uID, name, startDate, endDate, overseer } = leavvedata;
   
    const status = "Approved";
   
    const newData = {
   
     uID,
   
     name,
   
     startDate,
   
     endDate,
   
     overseer,
   
     status
   
    };
   
    alert(`Leave Approved for ${name}.`);
   
   
   
    const approvedData = JSON.parse(localStorage.getItem("approved")) || [];
   
    approvedData.push(newData);
   
    localStorage.setItem("approved", JSON.stringify(approvedData));
   
    removeRow(i);
   
   }
   
   
   
   function aescStart() {
   
    const leaveData = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    leaveData.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
   
    localStorage.setItem("LeaveData", JSON.stringify(leaveData));
   
    renderData();
   
   }
   
   function descStart() {
   
    const leaveData = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    leaveData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
   
    localStorage.setItem("LeaveData", JSON.stringify(leaveData));
   
    renderData();
   
   }
   
   const sortbyStartDate = document.getElementById("sortbyStartDate");
   
   sortbyStartDate.addEventListener("change", function () {
   
    const selectedValue = sortbyStartDate.value;
   
   
   
    if (selectedValue === "ascending") {
   
     aescStart();
   
    } else if (selectedValue === "descending") {
   
     descStart();
   
    }
   
   });
   
   
   
   // 
   
   
   
   
   
   function aescStart1() {
   
    const leaveData = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    leaveData.sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
   
    localStorage.setItem("LeaveData", JSON.stringify(leaveData));
   
    renderData();
   
   }
   
   function descStart1() {
   
    const leaveData = JSON.parse(localStorage.getItem("LeaveData")) || [];
   
    leaveData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
   
    localStorage.setItem("LeaveData", JSON.stringify(leaveData));
   
    renderData();
   
   }
   
   const sortbyEndDate = document.getElementById("sortbyEndDate");
   
   sortbyEndDate.addEventListener("change", function () {
   
    const selectedValue = sortbyEndDate.value;
   
   
   
    if (selectedValue === "ascending") {
   
     aescStart1();
   
    } else if (selectedValue === "descending") {
   
     descStart1();
   
    }
   
   });
   
   