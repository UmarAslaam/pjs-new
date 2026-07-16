let usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let numberRegex = /^(03\d{9}|\+92\s?3\d{9})$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


let registerForm = document.getElementById('Register');
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }else{
        password.type = "password";
        toggle.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }

});

function Register() {
    
let username = document.getElementById('username').value;
let email = document.getElementById('email').value;
let number = document.getElementById('number').value;
let password = document.getElementById('password').value;

if (!usernameRegex.test(username)) {
    alert('Invalid UserName')
} else if(!emailRegex.test(email)){
    alert('Invalid Email')
    
}else if(!numberRegex.test(number)){
    alert('Invalid Number')
    
}
else if(!passwordRegex.test(password)){
    alert('Invalid Password')
    
}
else{
    let user = {
        Username : username,
        Email : email,
        Number : number,
        Password : password,

    }
    let userLocalJson = JSON.stringify(user);
    localStorage.setItem('user',userLocalJson)
    alert('Signup Success')
}

    // console.log(usernameRegex.test(username));
    // console.log(emailRegex.test(email));
    // console.log(numberRegex.test(number)); 
    // console.log(passwordRegex.test(password));
}

registerForm.addEventListener('click',Register)

