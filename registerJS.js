document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#loginLink').addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href='login.html'
})

let userData = { users: []};

document.querySelector('#RegisterBtn').addEventListener('click', () => {
    let registerUser = document.getElementById('registerUsername').value;
    let registerPass = document.getElementById('registerPassword').value;
    let confirmPass = document.getElementById('confirmPassword').value;

    if (registerPass !== confirmPass){
        alert('Password do not match!');
    } else {
        const userInfo = {username: registerUser, password: registerPass}
        userData.users.push(userInfo);
        console.log(userData);
    }
})

})
