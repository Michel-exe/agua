window.addEventListener("submit", e=>{
    e.preventDefault()
    console.log(e.target);
    if(e.target.getAttribute("class")==="busqueda"){
        let [inpV, selV] = e.target
        if(inpV.value.length>0){
            console.log(inpV.value);
            console.log(selV.value);
            // window.location.href=`./busqueda.html?ide=${inpV.value}&opc=${selV.value}`
        } else{
            e.target.style.boxShadow=`0 0 8px #ff0000`
            e.target[0].focus()
        }
    }
})
document.querySelector(".cuotaLink").addEventListener("click",e=>{
    console.log("hola");
    document.querySelector(".cuota").style.scale=`1`
})
document.querySelector(".cuota").addEventListener("click", e=>{
    if(e.target.getAttribute("class")==="cuota"){
        e.target.style.scale=`0`
    }
})

// document.getElementById("inpSearch").addEventListener("keyup", e=>{
//     document.getElementById("inpSearch").parentElement.parentElement.style.boxShadow=`0 0 8px #0000aa`
//     // document.getElementById("inpSearch").parentElement
// })