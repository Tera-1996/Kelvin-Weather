//The forecast today
const kelvin = 0;

//converting from kelvin to celsius
const celsius = kelvin - 273;

console.log(`The temperature is ${celsius} degrees Celsius`);

//converting from celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//rounding down the fahrenheit temprature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//converting from celsius to newton
let newton = celsius * (33 / 100);

//rounding down the newton temperature
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);
