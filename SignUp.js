function setdata(e){
    e.preventDefault();

    let form = document.getElementById('form');

    let name = form.name.value;
    let email = form.email.value;
    let number = form.number.value;
    let password = form.password.value;
    let ConfirmPassword = form.ConfirmPassword.value;

    if(localStorage.getItem("PulseUsers")=== null){
        localStorage.setItem("PulseUsers",JSON.stringify([]));
    }

    let pulse_Users_Data = {
        name,
        email,
        number,
        password,
        ConfirmPassword,
    };

   

    let array = JSON.parse(localStorage.getItem("PulseUsers"));
   if(array.length===0){
       array.push(pulse_Users_Data);
       window.location.href = "index.html"
   }else{
       let countEmail=0;
       let countNumber = 0;
       for(let i = 0; i < array.length; i++){
           if(array[i].email===email){
               countEmail++;
           }else if(array[i].number===number){
                countNumber++;
           }
       }
       if(countEmail===0){
           if(countNumber===0){
               array.push(pulse_Users_Data);
               window.location.href = "index.html"
           }else if(countNumber>0){
               alert("Number already registerd!");
           }
       }else if(countEmail>0){
           alert("Email already exist!");
       }
     
   }
    

    localStorage.setItem("PulseUsers",JSON.stringify(array));

}

function page_Redirect(){
    window.location.href = "index.html";
}


   