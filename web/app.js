async function logData() {
  let n = document.getElementById("n").value;
  let e = document.getElementById("e").value;
  let p = document.getElementById("p").value;
  let obj = {
    name: n,
    email: e,
    password: p,
  };

  localStorage.setItem("data", JSON.stringify(obj));

  try {
    let res = await fetch("https://ffaea22c7cee.ngrok-free.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    if (!res.ok) {
      let errorText = await res.text();
      throw new Error(`Server error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    let data = await res.text();
    console.log("\n\t response from the api : " + data);
    alert("Signup successful: " + data);

  } catch (error) {
    console.error("Signup failed:", error);
    alert("Signup failed: " + error.message);
  }
}
function clearLs() {
  localStorage.clear();
}

// let sd = {
//   name: "test",
//   email: "email@gmail.com",
//   password: 12345,
// };

// console.log("\n\t data : " + sd);
// console.log(" json object : " + JSON.stringify(sd, null, 2));
