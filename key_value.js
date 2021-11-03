/* Objects are just collections of key-value pairs. 
  In other words, they are pieces of data(values) mapped to unique identifiers called properties(keys).*/

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};
tekkenCharacter.origin = "South Korea";
tekkenCharacter["hair color"] = "dyed orange";
const eyes = "eye color";
tekkenCharacter[eyes] = "brown";
console.log(tekkenCharacter);

// Challenge

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
foods["bananas"] = 13;
foods["grapes"] = 35;
foods["strawberries"] = 27;
console.log(foods);
