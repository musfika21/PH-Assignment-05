let buttons = document.getElementsByClassName('complete-btn');
let clickCount = 0;

for(let button of buttons){
    button.addEventListener('click',function(event){
        event.preventDefault();
        alert("Board Updated Successfully");
            let Num = document.getElementById('num-23').innerText;
            let updatedNum = parseInt(Num);
            updatedNum++;
            document.getElementById('num-23').innerText = updatedNum;

            let num = document.getElementById('num-6').innerText;
            let updatedNum2 = parseInt(num);
            updatedNum2--;
            document.getElementById('num-6').innerText = updatedNum2;
            button.style.backgroundColor = "#c3c7c4";
            button.style.color = "gray";
            button.style.cursor = "not-allowed";
            
            clickCount++;

            if(clickCount ===6 ){
                alert("congrats!!! You have completed all the current task");
            }
    });
}


function handleClick(task) {
    let now = new Date();

    // Format time with AM/PM
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    let formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;

    // Create a new div
    let newDiv = document.createElement('div');
    newDiv.innerText = `You have completed the task ${task} at ${formattedTime}`;
    
    // Styling (same as before)
    newDiv.style.maxWidth = "90%";
    newDiv.style.margin = "0 auto";
    newDiv.style.backgroundColor = '#F4F7FF';
    newDiv.style.marginBottom = "12px";
    newDiv.style.padding = "10px";
    newDiv.style.fontSize = "13px";

    // Append to history section
    document.getElementById('history').appendChild(newDiv);
}

document.getElementById('clear-btn').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('history').innerHTML = '';
})