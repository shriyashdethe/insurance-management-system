const TOKEN=sessionStorage.getItem("token");

if(!TOKEN){

window.location.href="login.html";

}

fetch("http://localhost:8082/customers",{

headers:{

"X-Auth-Token":TOKEN

}

})

.then(res=>res.json())

.then(data=>{

document.getElementById("customerCount").innerHTML=data.length;

});

fetch("http://localhost:8082/policies",{

headers:{

"X-Auth-Token":TOKEN

}

})

.then(res=>res.json())

.then(data=>{

document.getElementById("policyCount").innerHTML=data.length;

});

fetch("http://localhost:8082/leads",{

headers:{

"X-Auth-Token":TOKEN

}

})

.then(res=>res.json())

.then(data=>{

document.getElementById("leadCount").innerHTML=data.length;

});

function logout(){

sessionStorage.clear();

window.location.href="login.html";

}