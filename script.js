
let interval = 5000;
const counters = document.querySelectorAll('.counter');
console.log(counters);


counters.forEach((counter)=>{
  let start = 0;
  let endvalue = parseInt(counter.getAttribute('target'));
  console.log(endvalue);
  let duration = Math.floor(interval/endvalue);
  let coun = setInterval(function(){
   start+=1;
   counter.textContent=start+"+";
   if(start==endvalue){
    clearInterval(coun);
   }
  },duration)
});

