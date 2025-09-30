const inputtext=document.getElementById("input");
const celsius=document.getElementById("cel");
const fahrenheit=document.getElementById("fahren");
const result=document.getElementById("para");
let show;

function convert(){
    let value = inputtext.value.trim();
    if (value === "") {
        result.textContent = "⚠️ Please enter a number";
        return;
    }
    show=Number(inputtext.value);
    if(fahrenheit.checked){
        show=show*9/5+32;
        result.textContent=show.toFixed(2)+"°F";
    }else if(celsius.checked){
        show=(show-32)*5/9;
        result.textContent=show.toFixed(2)+"°C";
    }else{
        result.textContent = "⚠️ Please select a conversion option";
    }
}