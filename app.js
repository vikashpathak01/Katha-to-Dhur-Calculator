window.onload = () => {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateDecimal);
}

function calculateDecimal() {
    const katha = parseFloat(document.querySelector('#katha').value);
    const dhur = parseFloat(document.querySelector('#dhur').value);
    const result = document.querySelector('#result');

  
   

    // BMI Calculation
    const bmi = (((katha * 20) + dhur) / 5.375 ).toFixed(4);
    result.innerText = `Total Decimal: ${bmi}`; 

   
}
