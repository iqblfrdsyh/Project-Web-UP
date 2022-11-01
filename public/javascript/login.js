var loading = document.createElement('img')
// Loading onload

onload = function () {
    let loadBox = document.getElementById('load')
    let boxLogin = document.getElementById('login')

    boxLogin.classList.toggle('d-none')
    loadBox.appendChild(loading)

    setTimeout(() => {
        loading.src = 'loading.gif'
    }, 500)

    setTimeout(() => {
        boxLogin.classList.remove('d-none')
        loading.classList.toggle('d-none')
    }, 5000)

}

// Login
const login = document.getElementById('btn')
const btnSignup = document.getElementById('btnSignup')
const btnLogin = document.getElementById('btnLogin')
const boxSignup = document.getElementById('signUp')
const boxLogin = document.getElementById('login')

btnSignup.addEventListener('click', () => {
    boxSignup.classList.toggle('d-block')
    boxSignup.classList.remove('d-none')
    boxLogin.classList.toggle('d-none')
})
btnLogin.addEventListener('click', () => {
    boxLogin.classList.toggle('d-block')
    boxLogin.classList.remove('d-none')
    boxSignup.classList.toggle('d-none')
})

login.addEventListener('click', () => {
    let username = document.getElementById('formLogin').username.value
    let password = document.getElementById('formLogin').password.value
    let wrong = document.getElementById('wrong')
    if (username == "admin" && password == "123") {
        loading.classList.remove('d-none')
        boxLogin.classList.toggle('d-none')
        setTimeout(() => {
            window.open('/dashboard', '_self')
        }, 4000)
    } else if (username == "user" && password == "123") {
        loading.classList.remove('d-none')
        boxLogin.classList.toggle('d-none')
        setTimeout(() => {
            window.open('/home', '_self')
        }, 4000)
    } else {
        wrong.innerHTML = 'Username Atau Password Salah'
    }
})
