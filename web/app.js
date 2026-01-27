function logData(){
    let namevalue = document.getElementById("name").value;
    let emailvalue = document.getElementById("email").value;
    let passwordvalue = document.getElementById("password").value;
    console.log("/n/t name:"+namevalue);
    console.log("email:"+emailvalue);
    console.log("password:"+passwordvalue);
    localStorage.setItem("name",namevalue);
    localStorage.setItem("email",emailvalue);
    localStorage.setItem("password",passwordvalue);
}


let sd={
    name:"test",
    email:"email@gmail.com",
    password:"12345"
}
console.log("/n/t data:"+sd);
console.log("JSON object:"+JSON.stringify(sd,null,2));
