var gameAerry1 = [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0]
	],
	gameAerry2 = [
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0]
	];

var main = document.getElementsByClassName("piece"),
	gamer = 0,
	GamePlayed = 0,
	GameScore1 = 0,
	GameScore2 = 0,
	moshi = 0,
	RandomNum_exel = [],
	GamerName = "Gamer1";

document.getElementById("butt1").onclick = function() {
	moshi = 0;
}
document.getElementById("butt2").onclick = function() {
	moshi = 1;
	alert("机器没脑子 (其实是我不会加智商 (..•˘_˘•..)?? )")
	GamerName = "你";
	GameAnim.main(0);
	setTimeout(function() {
		ReGame.reAerry();
		ReGame.rePiece();
	}, 1000);
};

var GameInitlalize = {
	PieceInitlalize: function() {
		for (var i = 0; i < 36; i++) {
			GameInitlalize.clickDeal(i);
		}
	},
	clickDeal: function clickDeal(x) {
		main[x].onclick = function() {
			if (moshi == 0) {
				if (gamer == 0) {
					main[x].style.background = "black";
					addgameNum(x, 0);
					gamer = 1;
				} else {
					main[x].style.background = "white";
					addgameNum(x, 1);
					gamer = 0;
				}
			} else {
				if (gamer == 0) {
					main[x].style.background = "black";
					addgameNum(x, 0);
					gamer = 1;
				}
				setTimeout(function() {
					AI.Thinking();
				}, 200);
			}
		}
	}
}

var AI = {
	Generate: function(max, min, fixed = 0) {
		let differ = min - max;
		let random = Math.random();
		return (max + differ * random).toFixed(fixed);
	},
	Thinking: function() {
		var RandomNum = AI.Generate(1, 36);
		console.log(AI.Judge(RandomNum) == false,RandomNum);
		while (AI.Judge(RandomNum) == false) {
			RandomNum = AI.Generate(1, 36);
		}
		AI.execute(RandomNum)
	},
	Judge: function(RandomNum) {
		var rel = 0;
		for (var i = 0; i < RandomNum_exel.length; i++) {
			if (RandomNum == RandomNum_exel[i]) {
				return false;
			}
		}
		return true;
	},
	execute: function(RandomNum) {
		main[RandomNum].style.background = "white";
		addgameNum(RandomNum, 1);
		DisableClick(RandomNum);
		gamer = 0;
	}
}

GameInitlalize.PieceInitlalize();

function addgameNum(x, y) {
	if (y == 0) {
		switch (x) {
			case 0:
				gameAerry1[0][0] = 1;
				DisableClick(0);
				break;
			case 1:
				gameAerry1[0][1] = 1;
				DisableClick(1);
				break;
			case 2:
				gameAerry1[0][2] = 1;
				DisableClick(2);
				break;
			case 3:
				gameAerry1[0][3] = 1;
				DisableClick(3);
				break;
			case 4:
				gameAerry1[0][4] = 1;
				DisableClick(4);
				break;
			case 5:
				gameAerry1[0][5] = 1;
				DisableClick(5);
				break;
			case 6:
				gameAerry1[1][0] = 1;
				DisableClick(6);
				break;
			case 7:
				gameAerry1[1][1] = 1;
				DisableClick(7);
				break;
			case 8:
				gameAerry1[1][2] = 1;
				DisableClick(8);
				break;
			case 9:
				gameAerry1[1][3] = 1;
				DisableClick(9);
				break;
			case 10:
				gameAerry1[1][4] = 1;
				DisableClick(10);
				break;
			case 11:
				gameAerry1[1][5] = 1;
				DisableClick(11);
				break;
			case 12:
				gameAerry1[2][0] = 1;
				DisableClick(12);
				break;
			case 13:
				gameAerry1[2][1] = 1;
				DisableClick(13);
				break;
			case 14:
				gameAerry1[2][2] = 1;
				DisableClick(14);
				break;
			case 15:
				gameAerry1[2][3] = 1;
				DisableClick(15);
				break;
			case 16:
				gameAerry1[2][4] = 1;
				DisableClick(16);
				break;
			case 17:
				gameAerry1[2][5] = 1;
				DisableClick(17);
				break;
			case 18:
				gameAerry1[3][0] = 1;
				DisableClick(18);
				break;
			case 19:
				gameAerry1[3][1] = 1;
				DisableClick(19);
				break;
			case 20:
				gameAerry1[3][2] = 1;
				DisableClick(20);
				break;
			case 21:
				gameAerry1[3][3] = 1;
				DisableClick(21);
				break;
			case 22:
				gameAerry1[3][4] = 1;
				DisableClick(22);
				break;
			case 23:
				gameAerry1[3][5] = 1;
				DisableClick(23);
				break;
			case 24:
				gameAerry1[4][0] = 1;
				DisableClick(24);
				break;
			case 25:
				gameAerry1[4][1] = 1;
				DisableClick(25);
				break;
			case 26:
				gameAerry1[4][2] = 1;
				DisableClick(26);
				break;
			case 27:
				gameAerry1[4][3] = 1;
				DisableClick(27);
				break;
			case 28:
				gameAerry1[4][4] = 1;
				DisableClick(28);
				break;
			case 29:
				gameAerry1[4][5] = 1;
				DisableClick(29);
				break;
			case 30:
				gameAerry1[5][0] = 1;
				DisableClick(30);
				break;
			case 31:
				gameAerry1[5][1] = 1;
				DisableClick(31);
				break;
			case 32:
				gameAerry1[5][2] = 1;
				DisableClick(32);
				break;
			case 33:
				gameAerry1[5][3] = 1;
				DisableClick(33);
				break;
			case 34:
				gameAerry1[5][4] = 1;
				DisableClick(34);
				break;
			case 35:
				gameAerry1[5][5] = 1;
				DisableClick(35);
				break;
			default:
				break;
		}
	} else {
		switch (x) {
			case 0:
				gameAerry2[0][0] = 1;
				DisableClick(0);
				break;
			case 1:
				gameAerry2[0][1] = 1;
				DisableClick(1);
				break;
			case 2:
				gameAerry2[0][2] = 1;
				DisableClick(2);
				break;
			case 3:
				gameAerry2[0][3] = 1;
				DisableClick(3);
				break;
			case 4:
				gameAerry2[0][4] = 1;
				DisableClick(4);
				break;
			case 5:
				gameAerry2[0][5] = 1;
				DisableClick(5);
				break;
			case 6:
				gameAerry2[1][0] = 1;
				DisableClick(6);
				break;
			case 7:
				gameAerry2[1][1] = 1;
				DisableClick(7);
				break;
			case 8:
				gameAerry2[1][2] = 1;
				DisableClick(8);
				break;
			case 9:
				gameAerry2[1][3] = 1;
				DisableClick(9);
				break;
			case 10:
				gameAerry2[1][4] = 1;
				DisableClick(10);
				break;
			case 11:
				gameAerry2[1][5] = 1;
				DisableClick(11);
				break;
			case 12:
				gameAerry2[2][0] = 1;
				DisableClick(12);
				break;
			case 13:
				gameAerry2[2][1] = 1;
				DisableClick(13);
				break;
			case 14:
				gameAerry2[2][2] = 1;
				DisableClick(14);
				break;
			case 15:
				gameAerry2[2][3] = 1;
				DisableClick(15);
				break;
			case 16:
				gameAerry2[2][4] = 1;
				DisableClick(16);
				break;
			case 17:
				gameAerry2[2][5] = 1;
				DisableClick(17);
				break;
			case 18:
				gameAerry2[3][0] = 1;
				DisableClick(18);
				break;
			case 19:
				gameAerry2[3][1] = 1;
				DisableClick(19);
				break;
			case 20:
				gameAerry2[3][2] = 1;
				DisableClick(20);
				break;
			case 21:
				gameAerry2[3][3] = 1;
				DisableClick(21);
				break;
			case 22:
				gameAerry2[3][4] = 1;
				DisableClick(22);
				break;
			case 23:
				gameAerry2[3][5] = 1;
				DisableClick(23);
				break;
			case 24:
				gameAerry2[4][0] = 1;
				DisableClick(24);
				break;
			case 25:
				gameAerry2[4][1] = 1;
				DisableClick(25);
				break;
			case 26:
				gameAerry2[4][2] = 1;
				DisableClick(26);
				break;
			case 27:
				gameAerry2[4][3] = 1;
				DisableClick(27);
				break;
			case 28:
				gameAerry2[4][4] = 1;
				DisableClick(28);
				break;
			case 29:
				gameAerry2[4][5] = 1;
				DisableClick(29);
				break;
			case 30:
				gameAerry2[5][0] = 1;
				DisableClick(30);
				break;
			case 31:
				gameAerry2[5][1] = 1;
				DisableClick(31);
				break;
			case 32:
				gameAerry2[5][2] = 1;
				DisableClick(32);
				break;
			case 33:
				gameAerry2[5][3] = 1;
				DisableClick(33);
				break;
			case 34:
				gameAerry2[5][4] = 1;
				DisableClick(34);
				break;
			case 35:
				gameAerry2[5][5] = 1;
				DisableClick(35);
				break;
			default:
				break;
		}
	}
	gameDeal();
}

function gameDeal() {
	var gameDeal1_deal = [],
		gameDeal2_deal = [];
	for (var i = 0; i < 6; i++) {
		gameDeal1_deal.push(gameAerry1[i][0] + gameAerry1[i][1] + gameAerry1[i][2] + gameAerry1[i][3] + gameAerry1[i][4] == 5);
		gameDeal1_deal.push(gameAerry1[i][1] + gameAerry1[i][2] + gameAerry1[i][3] + gameAerry1[i][4] + gameAerry1[i][5] == 5);
		gameDeal1_deal.push(gameAerry1[0][i] + gameAerry1[1][i] + gameAerry1[2][i] + gameAerry1[3][i] + gameAerry1[4][i] == 5);
		gameDeal1_deal.push(gameAerry1[1][i] + gameAerry1[2][i] + gameAerry1[3][i] + gameAerry1[4][i] + gameAerry1[5][i] == 5);
		if (i == 0) {
			gameDeal1_deal.push(gameAerry1[0][0] + gameAerry1[1][1] + gameAerry1[2][2] + gameAerry1[3][3] + gameAerry1[4][4] == 5);
			gameDeal1_deal.push(gameAerry1[1][1] + gameAerry1[2][2] + gameAerry1[3][3] + gameAerry1[4][4] + gameAerry1[5][5] == 5);
			gameDeal1_deal.push(gameAerry1[0][5] + gameAerry1[1][4] + gameAerry1[2][3] + gameAerry1[3][2] + gameAerry1[4][1] == 5);
			gameDeal1_deal.push(gameAerry1[1][4] + gameAerry1[2][3] + gameAerry1[3][2] + gameAerry1[4][1] + gameAerry1[5][0] == 5);
			gameDeal1_deal.push(gameAerry1[0][1] + gameAerry1[1][2] + gameAerry1[2][3] + gameAerry1[3][4] + gameAerry1[4][5] == 5);
			gameDeal1_deal.push(gameAerry1[1][0] + gameAerry1[2][1] + gameAerry1[3][2] + gameAerry1[4][3] + gameAerry1[5][4] == 5);
			gameDeal1_deal.push(gameAerry1[0][4] + gameAerry1[1][3] + gameAerry1[2][2] + gameAerry1[3][1] + gameAerry1[4][0] == 5);
			gameDeal1_deal.push(gameAerry1[1][5] + gameAerry1[2][4] + gameAerry1[3][3] + gameAerry1[4][2] + gameAerry1[5][1] == 5);
		}
	}

	for (var i = 0; i < 6; i++) {
		gameDeal2_deal.push(gameAerry2[i][0] + gameAerry2[i][1] + gameAerry2[i][2] + gameAerry2[i][3] + gameAerry2[i][4] == 5)
		gameDeal2_deal.push(gameAerry2[i][1] + gameAerry2[i][2] + gameAerry2[i][3] + gameAerry2[i][4] + gameAerry2[i][5] == 5)
		gameDeal2_deal.push(gameAerry2[0][i] + gameAerry2[1][i] + gameAerry2[2][i] + gameAerry2[3][i] + gameAerry2[4][i] == 5)
		gameDeal2_deal.push(gameAerry2[1][i] + gameAerry2[2][i] + gameAerry2[3][i] + gameAerry2[4][i] + gameAerry2[5][i] == 5)
		if (i == 0) {
			gameDeal2_deal.push(gameAerry2[0][0] + gameAerry2[1][1] + gameAerry2[2][2] + gameAerry2[3][3] + gameAerry2[4][4] == 5);
			gameDeal2_deal.push(gameAerry2[1][1] + gameAerry2[2][2] + gameAerry2[3][3] + gameAerry2[4][4] + gameAerry2[5][5] == 5);
			gameDeal2_deal.push(gameAerry2[0][5] + gameAerry2[1][4] + gameAerry2[2][3] + gameAerry2[3][2] + gameAerry2[4][1] == 5);
			gameDeal2_deal.push(gameAerry2[1][4] + gameAerry2[2][3] + gameAerry2[3][2] + gameAerry2[4][1] + gameAerry2[5][0] == 5);
			gameDeal2_deal.push(gameAerry2[0][1] + gameAerry2[1][2] + gameAerry2[2][3] + gameAerry2[3][4] + gameAerry2[4][5] == 5);
			gameDeal2_deal.push(gameAerry2[1][0] + gameAerry2[2][1] + gameAerry2[3][2] + gameAerry2[4][3] + gameAerry2[5][4] == 5);
			gameDeal2_deal.push(gameAerry2[0][4] + gameAerry2[1][3] + gameAerry2[2][2] + gameAerry2[3][1] + gameAerry2[4][0] == 5);
			gameDeal2_deal.push(gameAerry2[1][5] + gameAerry2[2][4] + gameAerry2[3][3] + gameAerry2[4][2] + gameAerry2[5][1] == 5);
		}
	}

	for (var i = 0; i < gameDeal1_deal.length; i++) {
		if (gameDeal1_deal[i] == true) {
			gameRel("game1");
		}
		if (gameDeal2_deal[i] == true) {
			gameRel("game2");
		}
	}
	gameRel();
}

function gameRel(Parameter) {
	GamePlayed += 1;
	if (Parameter == "game1") {
		GamePlayed = 0;
		setTimeout(function() {
			GameScore1 += 1;
			document.getElementById("GameScore1").innerHTML = GameScore1;
			GameAnim.Tisp();
			GameAnim.main(2000);
			document.getElementById("tisp").style.display = "block";
			document.getElementById("tisp").innerHTML = GamerName + "赢了";
			GameAnim.GameScore(0);
			DisableClick(null, true);
			setTimeout(function() {
				ReGame.reAerry();
				ReGame.rePiece();
			}, 3000)
		}, 100);
	} else if (Parameter == "game2") {
		GamePlayed = 0;
		setTimeout(function() {
			GameScore2 += 1;
			document.getElementById("GameScore2").innerHTML = GameScore2;
			GameAnim.Tisp();
			GameAnim.main(2000);
			document.getElementById("tisp").style.display = "block";
			document.getElementById("tisp").innerHTML = "Gamer2赢了";
			GameAnim.GameScore(1);
			DisableClick(null, true);
			setTimeout(function() {
				ReGame.reAerry();
				ReGame.rePiece();
			}, 3000);
		}, 100);
	}
	if (GamePlayed >= 36) {
		setTimeout(function() {
			GameAnim.Tisp();
			GameAnim.main(2000);
			document.getElementById("tisp").style.display = "block";
			document.getElementById("tisp").innerHTML = "游戏结束";
			DisableClick(null, true);
			setTimeout(function() {
				ReGame.reAerry();
				ReGame.rePiece();
			}, 3000);
		}, 100);
	}
}

function DisableClick(buttNum, GameOver = false) {
	if (buttNum == null && GameOver == true) {
		for (var i = 0; i < main.length; i++) {
			main[i].onclick = null;
		}
	} else {
		console.log(buttNum);
		RandomNum_exel.push(buttNum);
		main[buttNum].onclick = null;
	}
}
