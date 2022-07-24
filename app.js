const content = "ㅇㅇ ㅇㅇㅇㅇ ㅇㅇ!! ㅇㅇ!!!        ";
const text = document.querySelector(".text");
const nav_bar = document.querySelector(".nav_bar");
const main_box = document.querySelector(".main_box");

// 글씨 타이핑효과
let i = 0;
function typing() {
  let txt = content[i++];
  text.innerHTML += txt;

  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}

setInterval(typing, 400);

// 스크롤시 nav 색 변하기

window.addEventListener("scroll", scrollReturn);

function scrollReturn() {
  let scrollY = window.scrollY;
  if (scrollY > 200) {
    nav_bar.classList.add("scroll_down");
  } else {
    nav_bar.classList.remove("scroll_down");
  }
}
