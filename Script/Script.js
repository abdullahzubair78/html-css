const nav = document.querySelector('.navbar')
fetch('./index.html')
.then(res=>res.text())
.then(  data=>{
    nav.innerHTML=data
})