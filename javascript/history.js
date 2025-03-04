let buttons = document.getElementsByClassName('complete-btn');

for(let button of buttons){
    button.addEventListener('click',function(){
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



            // Create a new div
            let newDiv = document.createElement('div');

    // Add text inside the div
    newDiv.textContent = "You have completed the task";

    // Add styles to the div
    // newDiv.style.width = "300px";
    // newDiv.style.height = "100px";
    newDiv.style.backgroundColor = "#F4F7FF";
    newDiv.style.color = "black";
    newDiv.style.fontSize = "18px";
    newDiv.style.textAlign = "center";
    newDiv.style.padding = "10px 20px"
    // newDiv.style.lineHeight = "100px"; // To vertically center the text
    // newDiv.style.marginTop = "20px";
    // newDiv.style.border = "2px solid blue";
    newDiv.style.borderRadius = "10px";

    // Append the new div to the body (or any specific container)
    document.getElementById('history').appendChild.apply(newDiv);
            
    });
}