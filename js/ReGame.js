var ReGame = {
	reAerry: function() {
		gameAerry1 = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		];
		gameAerry2 = [
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0]
		];
		GamePlayed = 0;
		gamer = 0;
		RandomNum_exel = [];
	},
	rePiece: function() {
		var main = document.getElementsByClassName("piece");
		document.getElementsByClassName("tisp")[0].style.display = "none";
		for (var i = 0; i < main.length; i++) {
			main[i].style.background = "#E59D53";
		}
		GameInitlalize.PieceInitlalize();
	}
}

var GameAnim = {
	GameScore: function(x) {
		var GameScore = document.getElementsByClassName("GameScore");
		GameScore[x].classList.add("animated", "bounce");
		GameScore[x].addEventListener("animationend", function() {
			GameScore[x].classList.remove("animated", "bounce");
		});
	},
	Tisp: function() {
		var tisp = document.getElementById("tisp");
		tisp.classList.add("animated", "swing");
		setTimeout(function() {
			tisp.classList.add("fadeOutDown");
			setTimeout(function() {
				tisp.classList.remove("animated", "swing", "fadeOutDown");
			}, 1000);
		}, 2000);
	},
	main: function(num) {
		var main = document.getElementById("main");
		setTimeout(function() {
			main.classList.add("animated", "fadeOutDown");
			main.addEventListener("animationend", function() {
				main.classList.remove("fadeOutDown");
				main.classList.add("slideInLeft");
			});
			setTimeout(function() {
				main.classList.remove("animated", "slideInLeft");
			}, 2000);
		}, num);
	}
}

for (var i = 0; i < document.getElementsByClassName("piece").length; i++) {
	document.getElementsByClassName("piece")[i].style.height = document.getElementsByClassName("piece")[i].clientWidth +
		"px";
}

document.body.addEventListener('touchmove', function(e) {
	e.preventDefault();
}, {
	passive: false
});
