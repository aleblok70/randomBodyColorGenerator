/*

first javascript app

*/

const btn = document.getElementById("btn");
console.log("btn");
btn.addEventListener("click", function(){
    let random1 = Math.random();
    let random1$10 = random1 * 10 + 1;
    let random1$10Integer = Math.trunc(random1$10);
    
    let random2 = Math.random();
    let random2$10 = random2 * 10 + 1;
    let random2$10Integer = Math.trunc(random2$10);
    
    let random3 = Math.random();
    let random3$10 = random1 * 10 + 1;
    let random3$10Integer = Math.trunc(random3$10);
    
    let randomSolution1 = (random1$10Integer * random1$10Integer) + (random1$10Integer * random1$10Integer) + (random1$10Integer * random1$10Integer) + (random1$10Integer * random1$10Integer) + (random1$10Integer * random1$10Integer) + random1$10Integer
    let randomFinalSolution1 = randomSolution1 / 2;
    
    let randomSolution2 = (random2$10Integer * random2$10Integer) + (random2$10Integer * random2$10Integer) + (random2$10Integer * random2$10Integer) + (random2$10Integer * random2$10Integer) + (random2$10Integer * random2$10Integer) + random2$10Integer
    let randomFinalSolution2 = randomSolution2 / 2;
    
    let randomSolution3 = (random3$10Integer * random3$10Integer) + (random3$10Integer * random3$10Integer) + (random3$10Integer * random3$10Integer) + (random3$10Integer * random3$10Integer) + (random3$10Integer * random3$10Integer) + random3$10Integer
    let randomFinalSolution3 = randomSolution3 / 2;
    

    document.body.style.backgroundColor = `rgba(${randomFinalSolution1}, ${randomFinalSolution2}, ${randomFinalSolution3})`
});
