function login(e){
    e.preventDefault();

    let form = document.getElementById('form');

    let retrieveData = JSON.parse(localStorage.getItem("PulseUsers"));

    let email = form.email.value;
    let password = form.password.value;

    let flag = false;
    retrieveData.forEach(function(i) {
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

function page_Redirect(){
    window.location.href = "index.html";
}