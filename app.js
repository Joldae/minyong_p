const content = "가나다라마바사";
const text = document.querySelector(".text");
const nav_bar = document.querySelector(".nav_bar");

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

setInterval(typing, 800);

// 스크롤시 nav 색 변하기

window.addEventListener("scroll", nav_change);

function nav_change() {
  nav_bar.style.backgroundColor = "blue";
}
