const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.addEventListener("click", function(){
    $("html, body").animate({scrollTop:0},"slow");
});


const animItems=document.querySelectorAll('._anim');
if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let i=0; i<animItems.length; i++){
            const animItem = animItems[i];
            const animItemHeight= animItem.offsetHeight;
            const animItemOffset= offset(animItem).top;
            const animStart =4;

            let animItemPoint = window.innerHeight-animItemHeight/animStart;

            if(animItemPoint>window.innerHeight){
                animItemPoint=window.innerHeight-window.innerHeight/animStart;
            }

            if((pageYOffset>animItemOffset-animItemPoint) && pageYOffset<(animItemOffset+animItemHeight)){
                animItem.classList.add( '_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }

        function offset(el){
            const rect =el.getBoundingClientRect(),
                scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,
                scrollTop=window.pageYOffset||document.documentElement.scrollTop;
            return{top: rect.top+ scrollTop, left:rect.left+scrollLeft }
        }
    }
}
document.getElementById("logo").onmouseover = function() {mouseOver()};
document.getElementById("logo").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("logo").style.color = "brown";
}

function mouseOut() {
    document.getElementById("logo").style.color = "white";
}

document.querySelector(".header_logo").addEventListener("mouseenter", sound )

function sound(){
    var audio = new Audio("C:/Users/dimas/WebstormProjects/NewMain777(2)/assets/images/Welcome.mp3");
    audio.play(1);
}



document.getElementById('bebro').onclick=function(){alert("Coming soon!")}

