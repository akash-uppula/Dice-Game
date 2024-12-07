var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = randomNumber1 + 1;
randomNumber1 = Math.floor(randomNumber1);

var src1='dice'+randomNumber1+'.png';
document.querySelector(".img1").setAttribute("src",src1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = randomNumber2 + 1;
randomNumber2 = Math.floor(randomNumber2);

var src2='dice'+randomNumber2+'.png';
document.querySelector(".img2").setAttribute("src",src2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player - 1 Win";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player - 2 Win";
}
else{
    document.querySelector("h1").textContent = "Draw";
}