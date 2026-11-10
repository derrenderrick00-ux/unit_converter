import {convertLength} from './length.js';
import {convertWeight} from './weight.js';
import {convertTemperature} from './temperature.js';
import {convertVolume} from './volume.js';
import {convertArea} from './area.js';
import {convertSpeed} from './speed.js';
import {convertForce} from './force.js';

// Helper functions to select elements
const $=(selector) => document.querySelector(selector);
const $$=(selector) => document.querySelectorAll(selector);

// Length Converter
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
        const lengthFunction = convertLength(lengthUnit.value);// Call the function to get the conversion function (value) => value * 0.0328084, etc. from length.js
        const result = lengthFunction(Number(lengthInput.value)).toFixed(4);
        const [fromUnit, toUnit] = lengthUnit.value.split(' to ');// Split the selected unit into fromUnit and toUnit to is used as the splitter for the result text content so it returns an array of two elements, the first element is the fromUnit and the second element is the toUnit.
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

// Weight Converter
const weightInput = $('#weightInput');
const weightUnit = $('#weightUnit');
const weightSubmit = $('#weightSubmit');
const weightResult = $('#weightResult');

weightSubmit.addEventListener('click', () => {
    if(weightInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(weightInput.value)){
        return alert('Please enter a valid number');
    }
    else if(weightUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(weightUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const result = convertWeight(weightUnit.value, Number(weightInput.value)).toFixed(4);//pasrse thhe indivual items directly into the function and return the result because the function is already returning the result of the conversion, so we don't need to call the function again to get the result. eg convertWeight('g to Kg', 1000) will return 1, so we don't need to call the function again to get the result.
        const [fromUnit, toUnit] = weightUnit.value.split(' to ');
        weightResult.style.color = 'black';
        weightResult.textContent = `${weightInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        weightInput.value = '';
        weightUnit.value = '';
    } catch (error) {
        console.error(error);
        weightResult.textContent = error.message || 'An error occurred while converting the weight. Please try again.';
        weightResult.style.color = 'red';
    }
});

// Temperature Converter
const temperatureInput = $('#temperatureInput');
const temperatureUnit = $('#temperatureUnit');
const temperatureSubmit = $('#temperatureSubmit');
const temperatureResult = $('#temperatureResult');

temperatureSubmit.addEventListener('click', () => {
    if(temperatureInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(temperatureInput.value)){
        return alert('Please enter a valid number');
    }
    else if(temperatureUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(temperatureUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const conversionFunction = convertTemperature(temperatureUnit.value);// Call the function to get the conversion function (value) => (value * 9/5) + 32, etc.
        const result = conversionFunction(Number(temperatureInput.value)).toFixed(4);
        const [fromUnit, toUnit] = temperatureUnit.value.split(' to ');
        temperatureResult.style.color = 'black';
        temperatureResult.textContent = `${temperatureInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        temperatureInput.value = '';
        temperatureUnit.value = '';
    } catch (error) {
        console.error(error);
        temperatureResult.textContent = error.message || 'An error occurred while converting the temperature. Please try again.';
        temperatureResult.style.color = 'red';
    }
});

// Volume Converter
const volumeInput = $('#volumeInput');
const volumeUnit = $('#volumeUnit');
const volumeSubmit = $('#volumeSubmit');
const volumeResult = $('#volumeResult');

volumeSubmit.addEventListener('click', () => {
    if(volumeInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(volumeInput.value)){
        return alert('Please enter a valid number');
    }
    else if(volumeUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(volumeUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const result = convertVolume(volumeUnit.value, Number(volumeInput.value)).toFixed(4);
        const [fromUnit, toUnit] = volumeUnit.value.split(' to ');
        volumeResult.style.color = 'black';
        volumeResult.textContent = `${volumeInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        volumeInput.value = '';
        volumeUnit.value = '';
    } catch (error) {
        console.error(error);
        volumeResult.textContent = error.message || 'An error occurred while converting the volume. Please try again.';
        volumeResult.style.color = 'red';
    }
});

// Area Converter
const areaInput = $('#areaInput');
const areaUnit = $('#areaUnit');
const areaSubmit = $('#areaSubmit');
const areaResult = $('#areaResult');

areaSubmit.addEventListener('click', () => {
    if(areaInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(areaInput.value)){
        return alert('Please enter a valid number');
    }
    else if(areaUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(areaUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const result = convertArea(areaUnit.value, Number(areaInput.value)).toFixed(4);
        const [fromUnit, toUnit] = areaUnit.value.split(' to ');
        areaResult.style.color = 'black';
        areaResult.textContent = `${areaInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        areaInput.value = '';
        areaUnit.value = '';
    } catch (error) {
        console.error(error);
        areaResult.textContent = error.message || 'An error occurred while converting the area. Please try again.';
        areaResult.style.color = 'red';
    }
});

// Speed Converter
const speedInput = $('#speedInput');
const speedUnit = $('#speedUnit');
const speedSubmit = $('#speedSubmit');
const speedResult = $('#speedResult');

speedSubmit.addEventListener('click', () => {
    if(speedInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(speedInput.value)){
        return alert('Please enter a valid number');
    }
    else if(speedUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(speedUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const result = convertSpeed(speedUnit.value, Number(speedInput.value)).toFixed(4);
        const [fromUnit, toUnit] = speedUnit.value.split(' to ');
        speedResult.style.color = 'black';
        speedResult.textContent = `${speedInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        speedInput.value = '';
        speedUnit.value = '';
    } catch (error) {
        console.error(error);
        speedResult.textContent = error.message || 'An error occurred while converting the speed. Please try again.';
        speedResult.style.color = 'red';
    }
});

const forceInput = $('#forceInput');
const forceUnit = $('#forceUnit');
const forceSubmit = $('#forceSubmit');
const forceResult = $('#forceResult');

forceSubmit.addEventListener('click', () => {
    if(forceInput.value.trim() ===''){
        return alert('Please enter a value to convert');
    }
    else if(isNaN(forceInput.value)){
        return alert('Please enter a valid number');
    }
    else if(forceUnit.value === ''){
        return alert('Please select a unit to convert');
    }
    else if(forceUnit.value === 'Select a value'){
        return alert('Please select a unit to convert');
    }

    try {
        const result = convertForce(forceUnit.value, Number(forceInput.value)).toFixed(4);
        const [fromUnit, toUnit] = forceUnit.value.split(' to ');
        forceResult.style.color = 'black';
        forceResult.textContent = `${forceInput.value} ${fromUnit} is equal to ${result} ${toUnit}`;
        forceInput.value = '';
        forceUnit.value = '';
    } catch (error) {
        console.error(error);
        forceResult.textContent = error.message || 'An error occurred while converting the force. Please try again.';
        forceResult.style.color = 'red';
    }
});