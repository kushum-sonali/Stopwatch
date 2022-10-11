const abc=document.getElementsByClassName("watch")[0];

let hr=0;
let min=0;
let sec=0;
let msec=0;
let stoptime=true;


function startTimer(){
    // console.log("hello");
  if(stoptime==true){
    stoptime=false;
 myinterval = setInterval(timercycle,10);
}
}
// setTimeout("timercycle()",1000);
// timercycle();
// }  console.log("hello");


 function timercycle(){
    console.log("i")
    if(stoptime==false){
     msec=parseInt(msec);
     sec=parseInt(sec);
     min=parseInt(min);
     hr=parseInt(hr);
     msec=msec+1;
     if(msec==100){
        sec=sec+1;
        msec=0;
    }
     if(sec==60){
         min=min+1;
         sec=0;
         msec=0;
     }
     if(min==60){
         hr=hr+1;
         min=0;
         sec=0;
         msec=0;
     }
     if(msec<10){
        msec="0"+msec;
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

    }
    abc.innerHTML=hr+":"+ min + ":" + sec+":"+msec
  
 }
function stopTime(){
      
//   if(stoptime==true){
    // console.log("hello");
  
    if(stoptime==false){
    stoptime=true;
  clearInterval(myinterval);

    }
}
function resetTimer(){
 stopTime();
msec=00;
hr=00;
min=00;
sec=00;
// stopTime();
    
abc.innerHTML="00:00:00:00";
// startTimer();
}