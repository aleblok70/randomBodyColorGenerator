const btn = document.getElementById("btn");

function getRandom() {
    const randomNum = Math.floor(Math.random()*10+1);
    return (Math.pow(randomNum, 2) * 5 + randomNum) / 2
  };

  btn.addEventListener("click", () => {
  document.body.style.background = `rgb(${getRandom()},${getRandom()},${getRandom()})`
  });