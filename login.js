const username_input = prompt('Enter your username' , '')
const password_input = prompt('Enter your password' , '')
const username = 'Admin'
const password = 962478345443
if (username_input == username && password_input == password)
  alert('Access Granted | Hit "Ok" to proceed')
else if (username_input != username || password_input != password)
  alert('Access Denied | Hit "Ok" to retry')
  window.location.href="./index.html"
