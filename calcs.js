let string = " ";
let buttons = document.querySelectorAll("button");
let textfield = document.getElementById("textbox");

Array.from(buttons).forEach((button)=> {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = " ";
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'C'){
            for (let index = 0; index < string.length; index++) {
                string[index] = " ";
                
            }
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})