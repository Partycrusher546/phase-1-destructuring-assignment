const farmAnimals = 'cow horse sheep pig chicken';
const animalSound ={
  moo: 'cow',
  neigh: 'horse',
  baa:'sheep',
  oink: 'pig',
  cluck: 'chicken'}
const {moo ,neigh,baa,oink,cluck} =animalSound;
console.log(animalSound)



const traditionalAnimalNames ={
  bessie:'cow',
   dolly:"sheep",
    babe:'pig',
      little:'chicken',}
const {bessie,dolly,little,babe}= traditionalAnimalNames
console.log(traditionalAnimalNames)




const traditionalAnimalColors ={
  pink :'pig',
  blackAndWhite:'cow',
  black:'sheep'}
const {pink,blackAndWhite,black}= traditionalAnimalColors
console.log(traditionalAnimalColors)





const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log(colors)




 const sixColors ={
r:red,
o:orange,
y:yellow,
g:green,
b:blue,
indg:indigo,
v:violet,}
 const{r,o,y,g,b,indg,v} = sixColors;
 console.log(colors)



const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'};
const{muppetName,color,song,job,partner} =muppet
console.log(muppet);



const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJobJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'};
const config ={
  song2:'Moving Right Along',
 song4:'I Hope That Something Better Comes Along',
 nestedJob : 'Host of The Muppet Show',
 nestedPartner: 'Miss Piggy',

}
const {song2, song4, nestedJob ,nestedPartner}=config
console.log(config);
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner