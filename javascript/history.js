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
            button.style.backgroundColor = "gray";
            button.style.color = "white";
            button.style.cursor = "not-allowed"; 

            
    });
}