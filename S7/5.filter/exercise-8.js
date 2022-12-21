const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

const input = document.querySelector('input[data-function="toFilterStreamers"]');
const button = document.querySelector('button[data-function="toShowFilterStreamers"]');

button.addEventListener('click', () => {
 
const value = input.value;// Obtengo el valor del input
const filteredStreamers = streamers.filter(streamer => streamer.name.includes(value));// Filtro el array de streamers
console.log(filteredStreamers);
});
 