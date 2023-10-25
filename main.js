//current temp
const  kelvin = 293
// convert kevling to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit
var fahrenheit = celsius * (9/5) + 32;
//removes decimal from fahrenheit
var fahrenheit = Math.floor(fahrenheit);
var newton = celsius *(33/100);
var newton = Math.floor(newton);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

console.log('The temperature is ' + newton + ' degrees Newton.');
