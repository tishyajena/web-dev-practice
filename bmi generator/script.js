const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); //stop the default action that a web browser automatically performs when a specific event occurs.

    const height = parseInt(document.querySelector('#height').value); // because we usually get a string
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height === '' || height<0 || Number.isNaN(height)){
        result.innerHTML = 'Please give a valid height';
    }
    else if(weight === '' || weight<0 || Number.isNaN(weight)){
        result.innerHTML = 'Please give a valid weight';
    } 
    else{
        const bmi = (weight*10000/(height*height)).toFixed(2);
        category = '';
        
        if(bmi < 18.5){
            category = 'Underweight'
        }
        else if (bmi >=18.5 && bmi < 24.9){
            category = 'Normal weight'
        }
        else if (bmi >=25 && bmi < 29.9){
            category = 'Class I Obese'
        }
        else if (bmi >=30 && bmi < 39.9){
            category = 'Class II Obese'
        }
        else if (bmi >= 40){
            category = 'Class III Obese'
        }

        result.innerHTML = `<h4>BMI: ${bmi}</h4><p>You are ${category}</p>`
    }  
});
