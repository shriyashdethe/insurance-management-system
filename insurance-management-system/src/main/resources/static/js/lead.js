const LEAD_URL="http://localhost:8082/leads";

const TOKEN="ADMIN123";

function saveLead(){

const lead={

leadName:document.getElementById("leadName").value,
leadEmail:document.getElementById("leadEmail").value,
leadPhone:document.getElementById("leadPhone").value,
leadStatus:document.getElementById("leadStatus").value

};

fetch(LEAD_URL,{

method:"POST",

headers:{

"Content-Type":"application/json",
"X-Auth-Token":TOKEN

},

body:JSON.stringify(lead)

})

.then(res=>res.json())

.then(data=>{

alert("Lead Saved");

loadLeads();

});

}

function loadLeads(){

fetch(LEAD_URL,{

headers:{

"X-Auth-Token":TOKEN

}

})

.then(res=>res.json())

.then(data=>{

let rows="";

data.forEach(l=>{

rows+=`

<tr>

<td>${l.id}</td>
<td>${l.leadName}</td>
<td>${l.leadEmail}</td>
<td>${l.leadPhone}</td>
<td>${l.leadStatus}</td>

<td>

<button onclick="deleteLead(${l.id})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("leadTable").innerHTML=rows;

});

}

function deleteLead(id){

fetch(LEAD_URL+"/"+id,{

method:"DELETE",

headers:{

"X-Auth-Token":TOKEN

}

})

.then(()=>{

alert("Lead Deleted");

loadLeads();

});

}

loadLeads();