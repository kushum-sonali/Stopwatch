const abc=document.getElementsByClassName("watch")[0];

let hr=0;
let min=0;
let sec=0;
let msec=0;
let stoptime=true;

function startTimer(){
    // console.log("hello");

if(stoptime==true){
    // console.log("hello");

stoptime==false;
msec=parseInt(msec);
sec=parseInt(sec);
min=parseInt(min);
hr=parseInt(hr);
msec=msec+1;
// console.log("hello");
if(msec==100){
    sec=sec+1;
    msec=0;
}
if(sec==60){
    min=min+1;
    // console.log("hello");

    sec=0;
    msec=0;
}
if(min==60){
    hr=hr+1;
    min=0;
    sec=0;
}
if(sec<10){
    sec="0"+sec;
}
if(min<10){
    min="0"+min;
}
if(hr<10){
    hr="0"+hr;
}
abc.innerHTML=hr+":"+ min + ":" + sec+":"+msec
setTimeout("startTimer()",10);
}
// setTimeout("timercycle()",1000);
// timercycle();
// }  console.log("hello");

}
function stopTime(){
    
//   if(stoptime==true){
    // console.log("hello");
  
    if(stoptime=false){
    console.log("hello");
    stoptime==true;

    }
}
// function timercycle(){
    
//    if(stoptime==false){
    // console.log("hello");
    // sec=parseInt(sec);
    // min=parseInt(min);
    // hr=parseInt(hr);
    // sec=sec+1;
    
    // if(sec==60){
    //     min=min+1;
    //     sec=0;
    // }
    // if(min==60){
    //     hr=hr+1;
    //     min=0;
    //     sec=0;
    // }
    // if(sec<10){
    //     sec="0"+sec;
    // }
    // if(min<10){
    //     min="0"+min;
    // }
    // if(hr<10){
    //     hr="0"+hr;
    // }
    // abc.innerHTML=hr+":"+ min + ":" + sec
    // setTimeout("timercycle()",1000);
// }
// }

function resetTimer(){
    // console.log("hello");
    
abc.innerHTML="00:00:00:00";
console.log("hello");

hr=0;
min=0;
sec=0;
stopTime();
// startTimer();
}