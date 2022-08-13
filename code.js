const styleInput=(e,bol)=>bol?e.classList.add("act"):e.classList.remove("act")
document.forms[0][0].addEventListener("keyup",(e)=>styleInput(e.target.parentElement,1))
document.forms[0][1].addEventListener("keyup",(e)=>styleInput(e.target.parentElement,1))
document.forms[0][0].addEventListener("blur",(e)=>styleInput(e.target.parentElement,0))
document.forms[0][1].addEventListener("blur",(e)=>styleInput(e.target.parentElement,0))

document.forms[0].addEventListener("click", e=>{
    console.log("hola");
    e.preventDefault()
    document.querySelector(".admin").style.transform=`scale(1)`
    let a=10
    let time= setInterval(()=>{
        document.querySelector("#charge i").style.width=`${a}%`
        a=a+10;
    }, 100);
    
    
    setTimeout(() => {
        clearInterval(time)
        document.querySelector("#charge").classList.add("charge")
    }, 1000);
    setTimeout(() => {
        document.querySelector("#charge").classList.add("charges")
    }, 2000);
    setTimeout(() => {
        window.location.href="./pages/dashboard.html"
    }, 3000);
})










