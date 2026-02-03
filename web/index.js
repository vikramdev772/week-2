const jwt=require("jsonwebtoken");

const userData={
    name:"vikram",
    Acno:1123456789
}

const token=jwt.sign(userData,"elon42")
console.log("\n\t Token : "+token);

