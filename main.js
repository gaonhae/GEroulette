let ok = new Audio("띵.mp3")
let bad = new Audio("땡.m4a")

let imgnum = ['뚜찌.png', '빠찌.png', '뽀찌.png', '수박뚜찌.png', '수박빠찌.png', '수박뽀찌.png']

console.log(imgnum)


for (let i = 0; i < imgnum.length; i++) {
    a = Math.floor(Math.random() * 6)
    temp = imgnum[i]
    imgnum[i] = imgnum[a]
    imgnum[a] = temp
}

let papers = document.querySelectorAll(".paper");

console.log(papers)

let count = 0;
let rannum = Math.floor(Math.random() * 6)

papers.forEach(function (e) {
    if (count === rannum) {
        e.className += " marker"
        console.log(rannum)
    }
    e.style.backgroundImage = 'url(' + imgnum[count] + ')'
    e.onclick = function () {
        e.style.pointerEvents = "none";
        ok.play();
        e.style.backgroundImage = 'url("꽝.png")'
    }
    count++;
})

//document.querySelector(".paper").onclick = function () {
//    document.querySelector(".paper").style.backgroundImage = 'url("꽝.png")'
//}

document.querySelector(".marker").onclick = function () {
    bad.play();
    document.querySelector(".marker").style.pointerEvents = "none";
    document.querySelector(".marker").style.backgroundImage = 'url("당첨.png")'
    setTimeout(() => alert("당첨!"), 1000);
    setTimeout(() => location.href = "index.html", 1000);
}
