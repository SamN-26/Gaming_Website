var slideImg=document.getElementById("slideImg");
var images =new Array(
    "/Images/1.jpg",
    "/Images/2.jpg",
    "/Images/3.jpg",
    "/Images/4.jpg"
);
function Queen() {
    slideImg.src="/Images/3.jpg"
}

function Gorillaz()
{
    slideImg.src=images[2];
}
