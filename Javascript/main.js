var signup = document.getElementById('signup')

signup.addEventListener('click',function(){


    var emailup = document.getElementById('email-in')
    var passup = document.getElementById('password-in')

    localStorage.setItem('User-email',emailup.value)
    localStorage.setItem('User-password',passup.value)

    document.getElementById('message1').innerHTML="Successfully Signup  <br><br>"
})

var getemail = localStorage.getItem('User-email')
var getpass = localStorage.getItem('User-password')

var signin = document.getElementById('signin')

signin.addEventListener('click',function(ex){

    ex.preventDefault()

    var emaillog = document.getElementById('email-log').value
    var passlog = document.getElementById('password-log').value

    if(emaillog==getemail && passlog==getpass)
    {
        location="C_To_F.html";
    }
    else if(emaillog!=getemail && passlog!=getpass)
    {
        document.getElementById('message2').innerHTML="Login Fail or Sign up <br><br>"
    }

})

sessionStorage.setItem('test','Daanith')

