console.log("js file attached");
const message =document.getElementById('msg');
const type=document.getElementById('Textarea');
const btn=document.getElementById('bty');
const arr=["Click on Start button to calculate your typing speed.","Press Done when you finish typing",
"Your speed and total time taken will be displayed"];
let startTime, endTime;

const playgame=()=>
{
    console.log("ran");
    let randomw= Math.floor(Math.random()*arr.length);
    message.innerText=arr[randomw];
    let date =new Date();
    startTime=date.getTime();
    btn.innerText="DONE";
}
const endgame=()=>
{
    let date =new Date();
    endTime=date.getTime();
    let totalTime =((endTime-startTime)/1000);
    console.log(totalTime);
    let  totalstr=type.value;
    let wordcount=counter(totalstr);
    let speed=Math.round((wordcount/totalTime)*60);
    let final_msg="Your typed total : " + speed +" "+"words per minute.";
    message.innerText=final_msg;
   
}

function counter (str)
{
  let result=str.split(" ").length;
 console.log(result);
  return result;
}
if(btn)
{
    btn.addEventListener("click", function ()
{
    if(this.innerText =='START')
    {
        type.disabled=false;
        playgame();
    }
    else if(this.innerText=="DONE")
    {
     type.disabled=true;
     btn.innerText="START";
     endgame();
     Audio
    }
});
}