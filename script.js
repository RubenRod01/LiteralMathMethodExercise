// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNum = Math.random();
randomNum *= 3;
randomNum = Math.floor(randomNum);
randomNum++;
console.log(randomNum);

// BONUS
// 6
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

// 7a
let reindeers = "Reindeers are better than people.";

// 7b
console.log(reindeers.replace(/ /g, "_"));

// 8
console.log(Math.SQRT2);

// 9
var newRandomNumber = Math.floor(Math.random() * (23 - 7 + 1) + 7);