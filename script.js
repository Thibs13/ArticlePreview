const btnshare = document.querySelector(".share")
const user = document.querySelector(".user")
const socialmedia = document.querySelector(".social-media")
const footer = document.querySelector("footer")
const btnshare2 = document.querySelector(".share2")
const btnshare3 = document.querySelector(".share3")
const socialmedia2 = document.querySelector(".socialmedia2")
btnshare.addEventListener("click",()=>{
    user.classList.toggle("inv")
    btnshare.classList.toggle("inv")
    footer.classList.toggle("inv")
})
btnshare2.addEventListener("click",()=>{
    user.classList.toggle("inv")
    btnshare.classList.toggle("inv")
    footer.classList.toggle("inv")
})
btnshare3.addEventListener("click",()=>{
    socialmedia2.classList.toggle("inv")
    btnshare3.classList.toggle("switchcolor")
})