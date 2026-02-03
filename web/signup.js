
let sd={
    name:"Vikram",
    email:"Vikram@gmail.com",
    password:"123456"
}

async function submit(){
   let api = "http://40.0.37.57:8080/api/signup";
//    let api = "http://127.0.0.1:8080/api/signup";

   try{
    let res=await fetch(api,{
        method:"POST",
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