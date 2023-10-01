const countries = [
    {name: "Afghanistan",code: "AF"},
    {name: "Åland Islands",code: "AX"},
    {name: "Albania",code: "AL"},
    {name: "Algeria",code: "DZ"},
    {name: "American Samoa",code: "AS"},
    {name: "Argentina",code: "AR"},
    {name: "Armenia",code: "AM"},
    {name: "Aruba",code: "AW"},
    {name: "Australia",code: "AU"},
    {name: "Bulgaria",code: "BG"},
    {name: "Burkina Faso",code: "BF"},
    {name: "Burundi",code: "BI"},
    {name: "Cambodia",code: "KH"},
    {name: "Cameroon",code: "CM"},
    {name: "Canada",code: "CA"},
    {name: "Cape Verde",code: "CV"},
    {name: "Costa Rica",code: "CR"},
    {name: "Côte d’Ivoire",code: "CI"},
    {name: "Croatia",code: "HR"},
    {name: "Gabon",code: "GA"},
    {name: "Gambia",code: "GM"},
    {name: "Georgia",code: "GE"},
    {name: "Germany",code: "DE"},
    {name: "Ghana",code: "GH"},
    {name: "Gibraltar",code: "GI"},
    {name: "Greece",code: "GR"},
    {name: "Greenland",code: "GL"},
    {name: "Grenada",code: "GD"},
    {name: "Jamaica",code: "JM"},
    {name: "Japan",code: "JP"},
    {name: "Jersey",code: "JE"},
    {name: "Jordan",code: "JO"},
    {name: "Kazakhstan",code: "KZ"},
    {name: "Kenya",code: "KE"},
    {name: "Kiribati",code: "KI"},
    {name: "North Korea",code: "KP"},
    {name: "South Korea",code: "KR"},
    {name: "Kosovo",code: "XK"},
    {name: "Kuwait",code: "KW"},
    {name: "Kyrgyzstan",code: "KG"},
    {name: "Laos",code: "LA"},
    {name: "Latvia",code: "LV"},
  
];
//document.body.style.backgroundColor = 'black';

   const elem = document.getElementById('select');
 countries.forEach((e) => {
    const op = document.createElement('option');
    op.value = e.name;
    op.textContent = e.name;
    elem.appendChild(op);
 })
 let output = '';
 let listItems = document.getElementById('items-list');
 console.log(listItems);
 const allInputs = document.querySelectorAll('.inp');
 const btn = document.querySelector('.btn-submit');
 const btnReset = document.querySelector('.btn-reset');
 const container = document.querySelector('.container');
 btnReset.addEventListener('click',(e) => {
allInputs.forEach((items) =>{
   if(items.name == 'gender' && items.checked == true){
      items.checked = false;
   }
   else {
      items.value = '';
      listItems.remove();
   }
})

 })
 const alerts = [];
 btn.addEventListener('click' , (e) =>{
   allInputs.forEach((elem) =>{
      if(elem.value == ''){
         alerts.push(`Enter ${elem.name}`);
        // if(elem.value != '')  output += `<p style="margin:6px 0px">${elem.name} - ${elem.value}</p>`;
      }
      else if(elem.name == 'gender' && !elem.checked){
        //skip the iteration
      }
      else {
        
         
         output += `<p style="margin:6px 0px">${elem.name} - ${elem.value}</p>`;
        // console.log(list);
      }
   })
   if(alerts.length > 0)
   {
      console.log('1');
      output = '';
      output = alerts.join('\n');
   }
   
   output += `<br><br><button style = "margin-top:8px;margin-right:4px" class ="btn1">Clear</button>`;
   output += `<button style = "margin-top:8px" class ="btn2">Submit</button>`;
   listItems.style.border ='2px solid black';
   listItems.style.borderRadius = '5px';
   listItems.style.padding = '10px';
   container.style.display = 'none';
   document.body.style.backgroundColor = 'rgba(0,0,0,0.5)';
   listItems.innerHTML = output;
   const bt = document.querySelector('.btn1')
   const bt2 = document.querySelector('.btn2')
   bt.addEventListener('click',(e)=>{
      listItems.style.display = 'none';
      document.body.style.backgroundColor = 'white';
      container.style.display = 'inline-block';
   })
   bt2.addEventListener('click',(e)=>{
      console.log(e);
        allInputs.forEach((all) =>{
         if(all.name == 'gender' && all.checked == true)
         {
            all.checked = false;
         }
         else all.value = "";

        })
        listItems.style.display = 'none';
        document.body.style.backgroundColor = 'white';
        container.style.display = 'inline-block';
   })
   //console.log(output);
 })
 