document.addEventListener('DOMContentLoaded', function() {

let btn = document.getElementById('submitBtn');

btn.addEventListener('click', (e) => {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let adminInfo = [{
        username: 'admin',
        password: '123456'
    }]
    if (username === adminInfo[0].username && password === adminInfo[0].password){
        console.log('Credential Correct');
        e.preventDefault();
        window.location.href='dashboard.html'
    } else {
        alert('Incorrect login details!')
    }
});


document.querySelector('#registerLink').addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href='register.html';
})

})

