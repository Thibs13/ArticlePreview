const btnshare = document.querySelector(".share")
const user = document.querySelector(".user")
const socialmedia = document.querySelector(".social-media")
const footer = document.querySelector("footer")
const btnshare2 = document.querySelector(".share2")

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