window.addEventListener("submit", e=>{
    e.preventDefault()
    let [inpV, selV] = e.target
    if(inpV.value.length>0){
        console.log(inpV.value);
        console.log(selV.value);
        window.location.href=`./busqueda.html?ide=${inpV.value}&opc=${selV.value}`
    } else{
        e.target.style.boxShadow=`0 0 8px #ff0000`
        e.target[0].focus()
    }
})

// document.getElementById("inpSearch").addEventListener("keyup", e=>{
//     document.getElementById("inpSearch").parentElement.parentElement.style.boxShadow=`0 0 8px #0000aa`
//     // document.getElementById("inpSearch").parentElement
// })