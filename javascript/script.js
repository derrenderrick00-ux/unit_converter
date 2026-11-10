import {lengthConvert} from './app.js';
const $=(selector) => document.querySelector(selector);
const $$=(selector) => document.querySelectorAll(selector);
const lengthInput = $('#lengthInput');
const lengthUnit = $('#lengthUnit');
const lengthSubmit = $('#lengthSubmit');
const lengthResult = $('#lengthResult');

lengthSubmit.addEventListener('click', () => {
    if(lengthInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(lengthInput.value)){
        return alert('Please enter a valid number');
    }
    else if(lengthUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(lengthUnit.value === 'Select a unit'){
        return alert('Please select a unit to convert');
    }

    try {
        const lengthFunction = lengthConvert(lengthUnit.value);
        const result = lengthFunction(Number(lengthInput.value)).toFixed(4);
        const [fromUnit, toUnit] = lengthUnit.value.split(' to ');
        lengthResult.style.color = 'black';
        lengthResult.textContent = `${lengthInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        lengthInput.value = '';
        lengthUnit.value = '';
    } catch (error) {
        console.error(error);
        lengthResult.textContent = error.message || 'An error occurred while converting the length. Please try again.';
        lengthResult.style.color = 'red';
    }
});