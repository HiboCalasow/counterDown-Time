const vibration=new Audio('vibration.mp3')
let timeSecond = 60;
const timeMinut=document.querySelector('h1');
displayTime(60);
const countDown=setInterval( ()=>{
    timeSecond--;
    displayTime(timeSecond)
    if(timeSecond == 0 || timeSecond < 1){
    endCount();
    clearInterval();
}
},1000);
function displayTime(second){
    const min =Math.floor(second / 60);
    const sec =Math.floor(second % 60);
    timeMinut.innerHTML=`${min < 10 ?'0' : ''}${min}:${(sec <10)?'0':''}${sec}`;
  };
function endCount(){
    vibration.play();
    timeMinut.innerHTML='00'+':'+'00';
    document.querySelector('body').style.backgroundColor='pink';
    timeMinut.style.color='black';
}