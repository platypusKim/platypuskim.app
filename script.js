var homeDiv = document.getElementById('home');
var workDiv = document.getElementById('work');
var aboutDiv = document.getElementById('about');

var homeBtn = document.getElementById('homeBtn');
var workBtn = document.getElementById('workBtn');
var aboutBtn = document.getElementById('aboutBtn');


var wsList = [
  ["나는 생각한다, 고로 나는 존재한다.", "르네 데카르트"],
  ["내 사전에 불가능이란 단어는 없다.", "나폴레옹 보나파르트"],
  ["주사위는 던져졌다.", "율리우스 카이사르"],
  ["그래도 지구는 돈다.", "갈릴레오 갈릴레이"],
  ["내가 멀리 볼 수 있었던 것은 거인의 어깨 위에 있었기 때문이다.", "아이작 뉴턴"],
  ["삶은 가까이서 보면 비극이지만 멀리서 보면 희극이다.", "찰리 채플린"],
  ["인생의 가장 큰 영광은 결코 넘어지지 않는데 있는 것이 아니라<br>넘어질 때마다 일어서는 데 있다.", "넬슨 만델라"],
  ["우리의 미래는 현재 우리가 어떤 것을 하는가에 달려 있다.", "마하트마 간디"],
  ["천재는 1%의 영감과 99%의 노력으로 이루어진다", "토머스 에디슨"],
  ["성공이 끝이 아니며, 실패는 치명적이지 않다. 중요한 것은 끊임없는 용기이다.", "윈스턴 처칠"]
];
var wsSaying = document.getElementById('wsSaying');
var wsName = document.getElementById('wsName');
var wsNumber= Math.floor(Math.random() * wsList.length);
wsSaying.innerHTML = wsList[wsNumber][0];
wsName.innerHTML = "- " + wsList[wsNumber][1];

homeBtn.addEventListener('click', openHome);
workBtn.addEventListener('click', openWork);
aboutBtn.addEventListener('click', openAbout);

function openHome(){
  homeDiv.style.display = 'block';
  workDiv.style.display = 'none';
  aboutDiv.style.display = 'none';
}

function openWork(){
  homeDiv.style.display = 'none';
  workDiv.style.display = 'block'
  aboutDiv.style.display = 'none';
}

function openAbout(){
  homeDiv.style.display = 'none';
  workDiv.style.display = 'none'
  aboutDiv.style.display = 'block';
}

openHome();