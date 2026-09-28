let cl = console.log;

const std_form= document.getElementById("std_form");
const fname_control= document.getElementById("fname_control");
const lname_control= document.getElementById("lname_control");
const email_control= document.getElementById("email_control");
const contact_control= document.getElementById("contact_control");
const std_container= document.getElementById("std_container");
const spinner= document.getElementById("spinner");


const Base_url="https://students-97756-default-rtdb.firebaseio.com/"
const Std_url = "https://students-97756-default-rtdb.firebaseio.com/students/.json"

let StdArr =[];

function fethchStd(){
 spinner.classList.remove("d-none")
  let xhr= new XMLHttpRequest();
  xhr.open("GET",Std_url);
  xhr.send(null);
  xhr.onload = function(){
    if(xhr.status>=200 && xhr.status <=299){
        let res = JSON.parse(xhr.response)
         for (const key in res){
            res[key].id=key
            StdArr.push(res[key]);
            onreadstd(StdArr)
         }
    }else{
        cl("something went wrong")
    }
      spinner.classList.add("d-none");

  }
}
fethchStd();

cl(StdArr)


function onreadstd(arr){
   let result ="";

   arr.forEach ((std,i) => {
      result +=`<tr id="${std.id}">
                <td>${i+1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.email}</td>
                <td>${std.contact}</td>
                <td><button class="btn btn-sm btn-primary">Edit</button></td>
                <td><button class="btn btn-sm btn-warning">Remove</button></td>
              </tr>`
    
   });
      std_container.innerHTML=result;
}