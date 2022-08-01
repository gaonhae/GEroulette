let ok = new Audio("띵.mp3");
let bad = new Audio("땡.m4a");
let imgnum = ["뚜찌.png", "빠찌.png", "뽀찌.png", "수박뚜찌.png", "수박빠찌.png", "수박뽀찌.png", "뚜찌.png", "빠찌.png", "뽀찌.png", "수박뚜찌.png", "수박빠찌.png", "수박뽀찌.png"];
let numarr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function run(rowCount, badCount) {
	//커버 이미지 섞기
	for (let i = 0; i < imgnum.length; i++) {
		a = Math.floor(Math.random() * 12);
		temp = imgnum[i];
		imgnum[i] = imgnum[a];
		imgnum[a] = temp;
	}

	numarr = numarr.slice(0, rowCount * 2);

	//숫자배열 섞기
	for (let i = 0; i < rowCount * 2; i++) {
		a = Math.floor(Math.random() * rowCount * 2);
		temp = numarr[i];
		numarr[i] = numarr[a];
		numarr[a] = temp;
	}

	let papers = document.querySelectorAll(".paper");
	let count = 0;
	let rannum = numarr.slice(0, badCount);

	console.log("rannum은", rannum);

	//랜덤 번째의 카드에 마커 추가
	for (let i = 0; i < rannum.length; i++) {
		var num = rannum[i];
		count = 0;
		console.log("num은", num);
		papers.forEach((e) => {
			if (count == num) {
				e.classList.add("marker");
			}
			count++;
		});
	}
	count = 0;

	//카드들에 기본 설정 추가
	papers.forEach(function (e) {
		e.style.backgroundImage = "url(" + imgnum[count] + ")";
		e.onclick = function () {
			e.style.pointerEvents = "none";
			ok.play();
			e.style.backgroundImage = 'url("꽝.png")';
		};
		count++;
	});

	//당첨 카드에 추가 설정
	document.querySelectorAll(".marker").forEach((e) => {
		e.addEventListener("click", function () {
			bad.play();
			e.style.pointerEvents = "none";
			e.style.backgroundImage = 'url("당첨.png")';
			setTimeout(() => alert("당첨!"), 1000);
			setTimeout(() => (location.href = "index.html"), 1000);
		});
	});

	document.querySelector(".control-box").style.display = "none";
	document.querySelectorAll(".row").forEach((e) => {
		e.style.display = "flex";
	});
}

//카드 추가할 때마다 카드 비율 변경
function height(rowCount) {
	let row = document.querySelectorAll(".row");
	row.forEach(function (e) {
		var height = 100 / rowCount;
		console.log(height);
		e.style.height = `${height}%`;
	});
}
