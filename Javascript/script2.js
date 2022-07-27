var con = document.querySelector('.convert')
var errormsg = document.getElementById('error')


con.addEventListener('click',function(e){

    e.preventDefault()

    var m = document.getElementById('m').value

    if(m=="")
    {
        errormsg.innerHTML="Please Input a Number"
    }
    else
    {
         m= m * (9/5) + 32 

         errormsg.innerHTML=" "
        
        document.getElementById('mm').value=m
    }
})

var nigt = document.getElementById('night')

nigt.addEventListener('click',function(){

    document.body.classList.toggle('bg-black')

    if(nigt.innerHTML=='NightMode')
    {
        nigt.innerHTML='LightMode'
    }
    else
    {
        nigt.innerHTML='NightMode'
    }
})
