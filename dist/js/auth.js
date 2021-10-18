document.addEventListener('DOMContentLoaded', function() {

    const signupForm = document.querySelector('#signup-form');
    const pass = document.querySelector('#pass');
    const confirmPass = document.querySelector('#confirmPass');
    const email = document.querySelector('#signupEmail');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const createAccount = document.querySelector('#createAccount');
    const errorText = document.querySelector('#error-text');
    const successText = document.querySelector('#success-text');
    const modal = document.querySelector('#thankyouModal');  
    const closeModal = document.querySelector('#closeModal');
    const logout = document.querySelector('#logout');
    const login = document.querySelector('#login');
    const loginEmail = document.querySelector('#loginEmail');
    const loginPassword = document.querySelector('#loginPassword');

// Check passwords + sign up
    function checkPass(){
        if (pass.value != confirmPass.value){
            errorText.classList.remove('d-none');
            createAccount.removeAttribute("data-target");
            createAccount.removeAttribute("data-toggle");
        } else {
            errorText.setAttribute("class", "d-none");
            createAccount.setAttribute("data-toggle", "modal");
            createAccount.setAttribute("data-target", "#thanks");
            auth.createUserWithEmailAndPassword(email.value, pass.value).then(cred => {
            signupForm.reset();   
            });
        }
    }
    
    createAccount.onclick = checkPass;
        
    closeModal.onclick = function(){
        location.href = "login.html";
    };

// Log out    
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log('User has signed out');
        });
    });
  
// User status (either logged in or logged out)
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser)
        } else {
            console.log('Not logged in');
        }
    });
    
//Login
    login.addEventListener('submit', (e) => {
        e.preventDefault();
        auth.singInWithEmailAndPassword(loginEmail.value, loginPassword.value).then(cred => {
            console.log(cred.user);
        })
    })

















});