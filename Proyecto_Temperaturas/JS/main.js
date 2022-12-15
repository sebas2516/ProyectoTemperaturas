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
    });
});

