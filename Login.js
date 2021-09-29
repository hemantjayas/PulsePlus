function login(e){
    e.preventDefault();

    let form = document.getElementById('form');

    let retrieveData = JSON.parse(localStorage.getItem("PulseUsers"));
    //console.log(retrieveData);

    let email = form.email.value;
    let password = form.password.value;

    let flag = false;
    retrieveData.forEach(function(i) {
      //  console.log(i);
      //console.log(i.email,i.password+" user"+email, password);
        if(email == i.email && password == i.password){
            flag = true;
        }
    });
    if(flag===true){
        window.location.href = "index.html";
    }else{
        alert("Invalid usename or password!");
    }
}