const jwt=require("jsonwebtoken");

const v="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmlrcmFtIiwiQWNubyI6MTEyMzQ1Njc4OSwiaWF0IjoxNzcwMTA5MzkyfQ.AbwKRScB1bg9DrwAVm4yTJOkLqD1174vB_jw6jURv64";

try{
    let result = jwt.verify(v,"elon42");
    console.log("\n\t verfication sucess : "+JSON.stringify(result,null,2));
}catch(e){
    console.log(" verfication failed : "+e);
}