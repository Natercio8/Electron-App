const pass = document.querySelector('#pass')
const newPassword = document.querySelector('#newPassword')

function generatePass() {
  

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""

    let num = Math.floor(Math.random() * 30)

    for(var i = 0, n = charset.length; i < num; ++i){
        password += charset.charAt(Math.floor(Math.random() * n))
    }
    
   
    newPassword.innerHTML = password
    
    if (password === "") {
        alert("Gerar norvamente")
        return;
    }
}