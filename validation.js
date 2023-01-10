const input = document.querySelector("#email");
const formulario = document.querySelector("#form")
const span = document.querySelector("#error-alert")
const icon = document.querySelector("#icon-error")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

formulario.addEventListener('submit', (event)=>{
    if(input.value.length == ' '){
       setError()
       event.preventDefault()
    }
})

function setError(){
    input.style.border = '1px solid red'
    span.style.display= "block"
    icon.style.display= "block"
}
function removeError(){
    input.style.border = ''
    span.style.display= "none"
   icon.style.display= "none"
}
function emailValidate(){
    if(emailRegex.test(input.value)){
        removeError()
        console.log("roda")
    }else{
        setError()
        console.log("tamo indo")
    }
}