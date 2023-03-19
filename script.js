//viwer 
const viwes = document.getElementById('viwes1');
// price to buy 
const priceToBuy = document.getElementById('price-to-buy');
const duration = document.getElementById('duration');
const rangeInput = document.getElementById('price-range');
const switchInput = document.getElementById('switch');


rangeInput.oninput = () => {
    const value = (rangeInput.value-rangeInput.min)/(rangeInput.max-rangeInput.min)*100;
    console.log(value);
    rangeInput.style.background = 'linear-gradient(to right, #A4F3EB 0%, #ECF0FB ' + value + '%, #fff ' + value + '%, white 100%)';
}


rangeInput.addEventListener("input", () => {
    if(switchInput.checked===false && rangeInput.value==1){
        viwes.innerHTML = "10k pageviwes";
        priceToBuy.innerHTML = '$8.00';
        duration.innerHTML = "/month";
    } else if(switchInput.checked===false && rangeInput.value==2){
        viwes.innerHTML = "50k pageviwes";
        priceToBuy.innerHTML = '$12.00';
        duration.innerHTML = "/month";
    } else if(switchInput.checked===false && rangeInput.value==3){
        viwes.innerHTML = "100k pageviwes";
        priceToBuy.innerHTML = '$16.00';
        duration.innerHTML = "/month";
    } else if(switchInput.checked===false && rangeInput.value==4){
        viwes.innerHTML = "500k pageviwes";
        priceToBuy.innerHTML = '$24.00';
        duration.innerHTML = "/month";
    } else if(switchInput.checked===false && rangeInput.value==5){
        viwes.innerHTML = "1m pageviwes";
        priceToBuy.innerHTML = '$36.00';
        duration.innerHTML = "/month";
    } else if(switchInput.checked===true && rangeInput.value==1){
        viwes.innerHTML = "10k pageviwes";
        priceToBuy.innerHTML = `$${8*12*0.75}`;
        duration.innerHTML = "/year";
    } else if(switchInput.checked===true && rangeInput.value==2){
        viwes.innerHTML = "50k pageviwes";
        priceToBuy.innerHTML = `$${12*12*0.75}`;
        duration.innerHTML = "/year"; 
    } else if(switchInput.checked===true && rangeInput.value==3){
        viwes.innerHTML = "100k pageviwes";
        priceToBuy.innerHTML = `$${16*12*0.75}`;
        duration.innerHTML = "/year";
    } else if(switchInput.checked===true && rangeInput.value==4){
        viwes.innerHTML = "500k pageviwes";
        priceToBuy.innerHTML = `$${24*12*0.75}`;
        duration.innerHTML = "/year";
    } else if(switchInput.checked===true && rangeInput.value==5){
        viwes.innerHTML = "10k pageviwes";
        priceToBuy.innerHTML = `$${36*12*0.75}`;
        duration.innerHTML = "/year";
    } 
    
})

