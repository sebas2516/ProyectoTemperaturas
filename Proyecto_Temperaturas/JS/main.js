// const signupForm = document.querySelector('#signup-form');

// signupForm.addEventListener('submit',(e)=>{
// e.preventDefault();

// const email = document.querySelector('#email').value;
// const pass = document.querySelector('#password').value;
// // alert("Se ha registrado")
// auth
//  .createUserWithEmailAndPassword(email,pass)
//  .then(userCredential =>{
//     signupForm.reset();
//     console.log('sign up')
//  })
// })

// Sign-In
const signinForm = document.querySelector('#signup-form');

signinForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const email = document.querySelector('#email').value;
    const pass = document.querySelector('#password').value;

    auth

    .signInWithEmailAndPassword(email,pass)
    
    .then(userCredential =>{
        signinForm.reset();

        location.replace("vehiculos.html")

        console.log('sign in')
    })

    .catch((error) => {
        alert("Usuario o contraseña no validos")
    });
});

// View Password
let password = document.getElementById('password');
let viewPassword = document.getElementById('view');
let click = false;

viewPassword.addEventListener('click', (e)=>{
    if(!click){
        password.type = 'text'  
        document.getElementById('view1').className = 'bi bi-eye-fill'
        click = true
    }else if(click){
        password.type = 'password'
        document.getElementById('view1').className = 'bi bi-eye-slash-fill'
        click = false
    }
});