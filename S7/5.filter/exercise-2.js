const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages.filter(age => age % 2 === 0); // uso el operador de modulo & en el filtro para que los que al dividirlos en tre dos el resto de cero

console.log(evenAges);