const rightEl =document.querySelector(".right")
const leftEl = document.querySelector(".left")
const imgContainer = document.querySelector(".img-container")
const imgsEl = document.querySelectorAll("img")



let currentImg = 1;

rightEl.addEventListener('click', () => {
    currentImg++
    updateImg()
    setInterval(() => {
      currentImg++;
      updateImg();
    }, 3000);
})

leftEl.addEventListener('click', () => {
    currentImg--
    updateImg();
    setInterval(() => {
      currentImg++;
      updateImg();
    }, 3000);
})

function updateImg() {
    if (currentImg > imgsEl.length) {
      currentImg = 1;
    } else if (currentImg < 1) {
      currentImg = imgsEl.length;
    }
    imgContainer.style.transform = `translateX(-${500 * (currentImg - 1)}px)`
    
}
