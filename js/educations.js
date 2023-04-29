const videos = document.querySelectorAll(".slide-container video");
const popup = document.querySelector(".popup-video");
const videoSrc   = document.querySelector(".popup-video video");
const closeX = document.querySelector(".popup-video span");

videos.forEach(vid =>{
    vid.onclick = ()=>{
        popup.style.display = "block";
        videoSrc.src = vid.getAttribute("src");
    }
});

closeX.onclick = ()=>{
    popup.style.display = "none";
    videoSrc.pause();
}