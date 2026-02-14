const correctPin = "1234";

function goToPage(pageNumber){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("page"+pageNumber)?.classList.add("active");
  document.getElementById("submenu")?.classList.remove("active");
}

function checkPin(){
  const input = document.getElementById("pinInput");
  if(input.value === correctPin){
    goToPage(2);
  }else{
    input.classList.add("shake");
    setTimeout(()=>input.classList.remove("shake"),300);
  }
}

function openMenu(type){
  goToPage(null);
  const sub = document.getElementById("submenu");
  sub.classList.add("active");
  const content = document.getElementById("submenuContent");

  if(type==="time"){
    const startDate = new Date("2023-01-01");
    const now = new Date();
    const days = Math.floor((now-startDate)/(1000*60*60*24));
    content.innerHTML = `
      <h2>เราคบกันมา ${days} วันแล้ว 💖</h2>
      <p>ตั้งแต่วันแรกจนวันนี้ ทุกวันมีค่าเสมอ</p>
      <button onclick="goToPage(3)">กลับ</button>
    `;
  }

  if(type==="letter"){
    content.innerHTML = `
      <h2>💌 จดหมายถึงเธอ</h2>
      <button onclick="this.nextElementSibling.style.display='block'">เปิดซอง</button>
      <p style="display:none;">ขอบคุณที่เข้ามาเติมเต็มชีวิตเรา 💕</p>
      <button onclick="goToPage(3)">กลับ</button>
    `;
  }

  if(type==="quiz"){
    content.innerHTML = `
      <h2>Quiz 💡</h2>
      <p>1. สีโปรดของเรา?</p>
      <button onclick="checkAnswer(true)">ชมพู</button>
      <button onclick="checkAnswer(false)">น้ำเงิน</button>
      <button onclick="checkAnswer(false)">เขียว</button>
      <button onclick="checkAnswer(false)">ดำ</button>
      <p id="score"></p>
      <button onclick="goToPage(3)">กลับ</button>
    `;
  }

  if(type==="memory"){
    content.innerHTML = `
      <h2>ความทรงจำ 📸</h2>
      <img src="memory1.jpg" width="150"><br>
      <p>วันแรกที่เราเจอกัน...</p>
      <button onclick="goToPage(3)">กลับ</button>
    `;
  }
}

let score = 0;
function checkAnswer(correct){
  if(correct) score++;
  document.getElementById("score").innerText="คุณตอบถูก "+score+" ข้อ 💖";
}

function playMusic(){
  document.getElementById("music").play();
}

function moveNo(){
  const btn = document.getElementById("noBtn");
  btn.style.position="absolute";
  btn.style.top=Math.random()*200+"px";
  btn.style.left=Math.random()*200+"px";
  alert("แน่ใจหรอ ไม่รักจริงหรอ โกรธนะ 😠");
}

function showLove(){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById("finalPage").classList.add("active");
}
