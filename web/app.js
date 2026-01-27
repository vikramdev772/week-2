function logData() {
  let nameValue = document.getElementById("n").value;
  let emailValue = document.getElementById("e").value;
  let passValue = document.getElementById("p").value;
  let obj={
    name:nameValue,
    email:emailValue,
    password:passValue
  }
 
  localStorage.setItem("data",obj);
}




let sd = {
  name: "test",
  email: "email@gmail.com",
  password: 12345,
};

console.log("\n\t data : " + sd);
console.log(" json object : " + JSON.stringify(sd, null, 2));
