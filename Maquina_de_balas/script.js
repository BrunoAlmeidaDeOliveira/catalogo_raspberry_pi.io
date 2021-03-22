$(document).ready(function(){

setTimeout(function(){$("#dialogue-text").text("And want a gueesing battle"); }, 3000);

setTimeout(function(){$("#dialogue-text").text("Candy Machine: Hello human! I came to challenge you to guess how many candies I have"); }, 6000);

setTimeout(function(){$("#dialogue-text").text("Candy machine: Come on! say a number between 0 and 1024"); }, 12000);

// complete interface, below you will have the rest of the game soon

let number = Math.floor(Math.random()*1025);

});
