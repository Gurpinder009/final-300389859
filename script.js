// get the date from the input field
function getDate() {
    let inputDate =document.getElementById("birthday");
    let date =  new Date(inputDate.value);
    inputDate.disabled = true;
    return date;
}

// start the countdown
function start() {


    let interval = setInterval(()=>{
     
    let inputDate = getDate();
    let dateToday = new Date(Date.now());
    let distance = inputDate.getTime() - dateToday.getTime();
    if(distance > 0){

        const days = Math.floor(distance / (1000*60*60 *24));
        const hours = Math.floor(distance% (1000*60*60 *24) /(1000*60*60) );
        const minutes =  Math.floor(distance% (1000*60*60) /(1000*60) );
        const seconds =  Math.floor(distance% (1000*60) /(1000) );
        const disecs =  Math.floor(distance% (1000));
        const ele = document.getElementById("demo")
        ele.innerHTML = `${days} <sub>days</sub> ${hours} <sub>hrs</sub> ${minutes} <sub>mins</sub> ${seconds} <sub>secs</sub> ${disecs} <sub>dicsecs</sub>`
    }else{
        const ele = document.getElementById("demo")
        ele.innerHTML ="Date is Expired";
        clearInterval(interval);
    }

    
    },100);






    
}

