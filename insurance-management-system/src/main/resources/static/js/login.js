function login(){

const token=document.getElementById("token").value.trim();

if(token==="ADMIN123"){

sessionStorage.setItem("token","ADMIN123");

sessionStorage.setItem("role","ADMIN");

window.location.href="dashboard.html";

}

else if(token==="AGENT123"){

sessionStorage.setItem("token","AGENT123");

sessionStorage.setItem("role","AGENT");

window.location.href="dashboard.html";

}

else{

document.getElementById("message").innerHTML="Invalid Token";

}

}

