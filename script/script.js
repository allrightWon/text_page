let btn = document.querySelector(".babo-btn");
btn.addEventListener("click", function () {
  let img = document.querySelector(".ran-image");
  let whatsYourName = prompt("당신의 이름은 무엇입니까?");
  if (whatsYourName === "장세훈" || whatsYourName === "세훈") {
    let check = confirm("당신은 안재원이 게이라고 생각합니까?");
    if (check) {
      alert("틀렸어시@봉바라클라봉아");
      img.src = "./images/fyou.jpeg";
    } else {
      alert("당신은 이시대의 깨어있는 인간입니다");
      img.src = "./images/bb.jpg";
    }
  } else if (whatsYourName === "김규범" || whatsYourName === "규범") {
    let check = confirm("당신은 안재원이 게이라고 생각합니까?");
    if (check) {
      alert("틀렸어시@봉바라클라봉아");
      img.src = "./images/fyou.jpeg";
    } else {
      alert("당신은 이시대의 깨어있는 인간입니다");
      img.src = "./images/bb.jpg";
    }
  } else if (whatsYourName === "반상엽" || whatsYourName === "상엽") {
    let check = confirm("당신은 안재원이 게이라고 생각합니까?");
    if (check) {
      alert("틀렸어시@봉바라클라봉아");
      img.src = "./images/fyou.jpeg";
    } else {
      alert("당신은 이시대의 깨어있는 인간입니다");
      img.src = "./images/bb.jpg";
    }
  } else if (
    whatsYourName === "손희정" ||
    whatsYourName === "희정" ||
    whatsYourName === "정" ||
    whatsYourName === "정이" ||
    whatsYourName === "희" ||
    whatsYourName === "희희" ||
    whatsYourName === "희희희" ||
    whatsYourName === "히히히"
  ) {
    alert("너 어디냐?");
    img.src = "./images/gun.jpg";
  } else {
    alert("올바른 이름을 입력해주세요");
  }
});
