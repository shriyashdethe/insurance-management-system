const POLICY_URL="http://localhost:8082/policies";

const TOKEN="ADMIN123";

function savePolicy(){

const policy={

policyName:document.getElementById("policyName").value,
policyType:document.getElementById("policyType").value,
premiumAmount:document.getElementById("premiumAmount").value,
coverageAmount:document.getElementById("coverageAmount").value

};

fetch(POLICY_URL,{

method:"POST",

headers:{

"Content-Type":"application/json",
"X-Auth-Token":TOKEN

},

body:JSON.stringify(policy)

})

.then(res=>res.json())

.then(data=>{

alert("Policy Saved");

loadPolicies();

});

}

function loadPolicies(){

fetch(POLICY_URL,{

headers:{

"X-Auth-Token":TOKEN

}

})

.then(res=>res.json())

.then(data=>{

let rows="";

data.forEach(p=>{

rows+=`

<tr>

<td>${p.id}</td>
<td>${p.policyName}</td>
<td>${p.policyType}</td>
<td>${p.premiumAmount}</td>
<td>${p.coverageAmount}</td>

<td>

<button onclick="deletePolicy(${p.id})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("policyTable").innerHTML=rows;

});

}

function deletePolicy(id){

fetch(POLICY_URL+"/"+id,{

method:"DELETE",

headers:{

"X-Auth-Token":TOKEN

}

})

.then(()=>{

alert("Policy Deleted");

loadPolicies();

});

}

loadPolicies();