// const styleInput=(e,bol)=>bol?e.classList.add("act"):e.classList.remove("act")
// document.forms[0][0].addEventListener("keyup",(e)=>styleInput(e.target.parentElement,1))
// document.forms[0][1].addEventListener("keyup",(e)=>styleInput(e.target.parentElement,1))
// document.forms[0][0].addEventListener("blur",(e)=>styleInput(e.target.parentElement,0))
// document.forms[0][1].addEventListener("blur",(e)=>styleInput(e.target.parentElement,0))
const funAdmin = () =>{
    document.querySelector(".admin").style.transform=`scale(1)`
    let a=10
    let time= setInterval(()=>{
        document.querySelector("#charge i").style.width=`${a}%`
        a=a+10;
    }, 100);    
    
    setTimeout(() => {
        clearInterval(time)
        document.querySelector("#charge").classList.add("charge")
    }, 1300);
    setTimeout(() => {
        document.querySelector("#charge").classList.add("charges")
    }, 2000);
    setTimeout(() => {
        window.location.href="./pages/dashboard.html"
    }, 3000);
}
const validarForm = (e) =>{
    let msjError = document.querySelector(".error")
    let [user, pass] = e.target
    user= user.value
    pass= pass.value
    const exp = {
        user: /^[a-zA-Z0-9À-ÿ\_\-]{4,16}$/,
        pass: /^.{8,16}$/,
    }
    if(user && pass){
        const val = [exp.user.test(user), exp.pass.test(pass)]   
        if(val[0] && val[1]){
            msjError.style.height=`44px`
            msjError.innerHTML="Cargando . . ."
            funAdmin()
            // console.log(true);
        } else{
            if(!val[0]){
                msjError.style.height=`44px`
                msjError.innerHTML="Error al escribir su usuario"
            } else {
                msjError.innerHTML="Error al escribir su contraseña"
            }
        }
    } else{
        console.log(false);
    }}
document.forms[0].addEventListener("submit", e=>{
    e.preventDefault()
    validarForm(e)
})










