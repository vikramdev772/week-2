
let sd={
    name:"siddarth",
    email:" 23eg106c32@gmail.com",
    password:"123456"
}

async function submit(){
   let api = "http://40.0.37.57:8080/api/update/107";
//    let api = "http://127.0.0.1:8080/api/signup";

   try{
    let res=await fetch(api,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(sd)
    })
    let d=await res.text();
    if(res.ok){
        // alert(" signup sucess ");
        console.log(" api response : "+d);
    }else{
        // alert(" signup failed ");
        console.log(" api response : failed"+d);
    }

   }
   catch(e){
    console.log("\n\t Error : "+e);

   }
}

submit();