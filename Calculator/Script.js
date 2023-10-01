let str = "";
let inp = document.getElementById('inp');
let buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click' , (e)=>{
        //console.log(e.target.textContent);
        if(e.target.textContent == '=')
        {
            str = eval(str);
            inp.value = str;
        }
        else if(e.target.textContent == 'AC')
        {
            str = ""
            inp.value = str;
        }
        else{
        str = str + e.target.textContent;
        inp.value = str;
        }
    })
})