const marvel = ["thor","Ironman","spiderman"]
const dc = ["superman","batman","flash"]
// marvel.push(dc)
// console.log((marvel));

// const all_heroes = marvel.concat(dc);
// console.log(all_heroes)

const all_new_heroes = [...marvel,...dc]
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_array = another_array.flat(Infinity)

// console.log(real_array);

console.log(Array.isArray("Bibaswan"))
console.log(Array.from("Bibaswan"))
console.log(Array.from({name:"Bibaswan"}))
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
