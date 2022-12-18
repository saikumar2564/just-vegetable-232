let image=document.getElementById("banner1");
let arr=["https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg","https://s.rmjo.in/AC-Offer-Banner-Web-.jpg","https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg","https://s.rmjo.in/WP-Web.png"]
var index=1;
function slide(){
 image.setAttribute("src",arr[index]);
 index++;
 if(index>=arr.length){
     index=0;
 }
}
setInterval("slide()",2000)
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
function showmodel(){
    document.querySelector(".popup_form").classList.add("showpopup")
}
function closemodel(){
      document.querySelector(".popup_form").classList.remove("showpopup")
      document.querySelector(".popup_form1").classList.remove("showpopup")
}
function continue1(){
    closemodel()
    document.querySelector(".popup_form1").classList.add("showpopup")
}
let input=document.getElementById('input')
let btn=document.getElementById('btnpop')
let val= JSON.parse(localStorage.getItem('number'))||[]
btn.addEventListener("click",(e)=>{
    let val= JSON.parse(localStorage.getItem('number'))||[]
    e.preventDefault()
    if(val.length===0){
        if(input.value.length===10){
            val.push(input.value)
        }
        else{
            alert(" invalid NUmber")
        }    
    }else{
        let temp=false
        if(input.value.length===10){
            for(let i=0;i<val.length;i++){
                if(input.value===val[i]){
                    temp=false

                    break;
                }else{
                    temp=true
                }
            }
            if(temp==true){
                val.push(input.value)            
            }
            if(temp===false){
                alert('Alrealy Exist Number')
            }
        }
        else{
            alert("please enter correct number")
        }
    }
    localStorage.setItem('number',JSON.stringify(val))
})