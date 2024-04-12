const margin = 20;
const cardSpace = 12;
const dealSpeed = 20;
const playSpeed = 600;
const raiseSelectedCardBy = 100;

const dealButton = document.querySelector('.deal-button');
const sortButton = document.querySelector('.sort-button');
const playButton = document.querySelector('.play-button');
const playSelectedButton = document.querySelector('.play-selected-button');
const passButton = document.querySelector('.pass-button');
const newGameButton = document.querySelector('.new-game-button');
const quitButton = document.querySelector('.quit-button');

const lastPlayerInfo = document.querySelector('.last-player');
const lastPlayInfo = document.querySelector('.last-play');
const currentlyOn = document.querySelector('.currently-on');
const playerDone = document.querySelector('.player-done');

const playingArea = document.querySelector('.playing-area');
const areaWidth = playingArea.clientWidth;
const areaHeight = playingArea.clientHeight;

const pass = document.querySelector('.pass-container');
const passWidth = pass.clientWidth;
const passHeight = pass.clientHeight;

const results = document.querySelector('.results');
const resultsWidth = results.clientWidth;
const resultsHeight = results.clientHeight;
const resultsX = (areaWidth / 2) - (resultsWidth / 2);
const resultsY = (areaHeight / 2) - (resultsHeight / 2);
results.style.left = `${resultsX}px`;
results.style.top = `${resultsY}px`;

const center = document.querySelector('.center');
const centerWidth = center.clientWidth;
const centerHeight = center.clientHeight;

const centerTable = document.querySelector('.center-table');
const centerTableWidth = centerTable.clientWidth;
const centerTableHeight = centerTable.clientHeight;

const discardPile = document.querySelector('.discard-pile');
const discardWidth = discardPile.clientWidth;
const discardHeight = discardPile.clientHeight;

const centerX = (areaWidth / 2) - (centerWidth / 2);
const centerY = (areaHeight / 2) - (centerHeight / 2) - (centerHeight / 2) - (margin / 2);
center.style.left = `${centerX}px`;
center.style.top = `${centerY}px`;

const discardX = (areaWidth / 2) - (discardWidth / 2);
const discardY = (areaHeight / 2) - (discardHeight / 2) + (centerHeight / 2) + (margin / 2);
discardPile.style.left = `${discardX}px`;
discardPile.style.top = `${discardY}px`;

const genericCard = document.querySelector('.card-container');
const cardWidth = genericCard.clientWidth;
const cardHeight = genericCard.clientHeight;

const genericHand = document.querySelector('.player-hand');
const handWidth = genericHand.clientWidth;
const handHeight = genericHand.clientHeight;

const centered = (areaWidth / 2) - (handWidth / 2);
const centeredHeight = (areaHeight / 2) - (handHeight / 2);
const marginBottom = areaHeight - handHeight - margin;
const marginRight = areaWidth - handWidth - margin;
const t4 = Math.PI / 6;
const t8 = Math.PI / 2;

const handLocations = [[[centered, marginBottom, 0],
						[centered, margin, 0]],

						[[centered, marginBottom, 0], 
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4]],

						[[centered, marginBottom, 0], 
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[centered, margin, 0],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4]],

						[[centered, marginBottom, 0],
						[((areaWidth / 5) - (handWidth / 2)) + (handHeight * Math.sin(t4)), marginBottom - (handWidth * Math.sin(t4)), t4], 
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[centered, margin, 0],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4]],

						[[centered, marginBottom, 0],
						[((areaWidth / 5) - (handWidth / 2)) + (handHeight * Math.sin(t4)), marginBottom - (handWidth * Math.sin(t4)), t4], 
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[centered, margin, 0],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)) - (handHeight * Math.sin(t4)), marginBottom, -t4]],

						[[centered, marginBottom, 0],
						[((areaWidth / 5) - (handWidth / 2)) + (handHeight * Math.sin(t4)), marginBottom - (handWidth * Math.sin(t4)), t4], 
						[margin + handHeight, centeredHeight - (handWidth / 2) + (handHeight / 2), t8],
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[centered, margin, 0],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)) - (handHeight * Math.sin(t4)), marginBottom, -t4]],

						[[centered, marginBottom, 0],
						[((areaWidth / 5) - (handWidth / 2)) + (handHeight * Math.sin(t4)), marginBottom - (handWidth * Math.sin(t4)), t4], 
						[margin + handHeight, centeredHeight - (handWidth / 2) + (handHeight / 2), t8],
						[((areaWidth / 5) - (handWidth / 2)), margin + (handWidth * Math.sin(t4)) + (handHeight - handHeight * Math.cos(t4)), -t4],
						[centered, margin, 0],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)), margin + (handHeight - handHeight * Math.cos(t4)), t4],
						[marginRight + handWidth - handHeight, centeredHeight + (handWidth / 2) + (handHeight / 2), -t8],
						[((4 * areaWidth / 5) - (handWidth / 2)) + (handWidth - handWidth * Math.cos(t4)) - (handHeight * Math.sin(t4)), marginBottom, -t4]]];

//returns random integer between 0 and max
function rand(max) {
	return Math.floor(Math.random() * max);
}

//Card class constructor
function Card(value, imgId) {
	this.value = value;
	this.faceUp = false;
	this.raised = false;
	this.cardImg = document.getElementById(imgId);
	this.cardImg.firstElementChild.style.transform = "rotateY(0deg)";
	this.x = centerX + (centerTableWidth / 2) - (cardWidth / 2);
	this.y = centerY + (centerTableHeight / 2) - (cardHeight / 2);
	this.cardImg.style.left = `${this.x}px`;
	this.cardImg.style.top = `${this.y}px`;
	this.cardImg.style.transform = "rotateZ(0deg)";
}

//flips the Card
Card.prototype.flipCard = function () {
	let card = this.cardImg.firstElementChild;
	if (this.faceUp) {
		card.style.transform = "rotateY(0deg)";
	} else {
		card.style.transform = "rotateY(180deg)";
	}
	this.faceUp = !this.faceUp;
}

//Deck class constructor
//this.cards contains array of n Cards of value n for n up to maxVal
function Deck(maxVal = 12) {
	this.cards = [];
	let abc = 'ABCDEFGHIJKL';
	for (let i = 1; i <= maxVal; i++) {
		for (let j = 0; j < i; j++) {
			this.cards.push(new Card(i, abc[i-1]+(j+1).toString()));
		}
	}
}

//randomly shuffles deck
Deck.prototype.shuffle = function () {
	let shuffledCards = [];
	let len = this.cards.length;
	for (let i = 0; i < len; i++) {
		//remove random Card from this.card and push it to shuffledCards
		shuffledCards.push(this.cards.splice(rand(this.cards.length), 1)[0]);
	}
	this.cards = shuffledCards;
}

//Player class constructor
function Player(name, playerNumber, numPlayers) {
	this.name = name;
	this.id = `p${playerNumber + 1}`;
	this.hand = [];
	this.finished = false;
	this.handImg = document.getElementById(this.id);
	this.x = handLocations[numPlayers-2][playerNumber][0];
	this.y = handLocations[numPlayers-2][playerNumber][1];
	this.theta = handLocations[numPlayers-2][playerNumber][2];
	this.handImg.style.left = `${this.x}px`;
	this.handImg.style.top = `${this.y}px`;
	this.handImg.style.transform = `rotateZ(${this.theta}rad)`;
}

//prints Player hand
Player.prototype.printHand = function () {
	let ret = '';
	for (const card of this.hand) {
		ret += card.value + ' ';
	}
	console.log(this.name + ': ' + ret);
} 

//relocates cards to correct position
Player.prototype.repositionCards = function () {
	for (let i = 0; i < this.hand.length; i++) {
		let card = this.hand[i];
		let dx = this.x - card.x + ((handWidth/2) - (cardWidth/2)) * Math.cos(this.theta) - ((handHeight/2) - (cardHeight/2)) * Math.sin(this.theta);
		let dy = this.y - card.y + ((handWidth/2) - (cardWidth/2)) * Math.sin(this.theta) + ((handHeight/2) - (cardHeight/2)) * Math.cos(this.theta);
		card.x += dx + (2 * cardSpace * ((this.hand.length - i - 1) - ((this.hand.length - 1) / 2))) * Math.cos(this.theta);
		card.y += dy + (2 * cardSpace * ((this.hand.length - i - 1) - ((this.hand.length - 1) / 2))) * Math.sin(this.theta);
		card.cardImg.style.left = `${card.x}px`;
		card.cardImg.style.top = `${card.y}px`;
		card.cardImg.style.zIndex = this.hand.length - i;
	}
}

Player.prototype.addPassMsg = function () {
	let passX = this.x + ((handWidth/2) - (passWidth/2)) * Math.cos(this.theta) - ((handHeight/2) - (passHeight/2)) * Math.sin(this.theta);
	let passY = this.y + ((handWidth/2) - (passWidth/2)) * Math.sin(this.theta) + ((handHeight/2) - (passHeight/2)) * Math.cos(this.theta);
	pass.style.left = `${passX}px`;
	pass.style.top = `${passY}px`;
	pass.style.transform = this.handImg.style.transform;
	pass.style.visibility = 'visible';
}

//PlayerOne class constructor
function PlayerOne (name, numPlayers) {
	Player.call(this, name, 0, numPlayers);

	this.selected = [];
	this.isTurn = false;
	this.curCenter = [];
}
PlayerOne.prototype = Object.create(Player.prototype);
Object.defineProperty(PlayerOne.prototype, 'constructor', { 
    value: PlayerOne, 
    enumerable: false,
    writable: true });

//adds Card to Player's hand
PlayerOne.prototype.addCard = function (card) {
	//shift all cards currently in hand to left
	for (const c of this.hand) {
		c.cardImg.style.left = `${parseInt(c.cardImg.style.left) - cardSpace}px`;
	}

	//move card from center to right side of hand and flip it open
	let dx = this.x - card.x + ((handWidth/2) - (cardWidth/2)) * Math.cos(this.theta) - ((handHeight/2) - (cardHeight/2)) * Math.sin(this.theta);
	let dy = this.y - card.y + ((handWidth/2) - (cardWidth/2)) * Math.sin(this.theta) + ((handHeight/2) - (cardHeight/2)) * Math.cos(this.theta);
	card.x += dx + (cardSpace * this.hand.length) * Math.cos(this.theta);
	card.y += dy + (cardSpace * this.hand.length) * Math.sin(this.theta);
	card.cardImg.style.left = `${card.x}px`;
	card.cardImg.style.top = `${card.y}px`;
	card.cardImg.style.zIndex = this.hand.length;
	card.cardImg.style.transform = `rotateZ(${this.theta}rad)`;
	card.flipCard();
	this.hand.push(card);

	//raises card and adds it to this.selected when clicked during turn
	let toggleCardRaise = function () {
		if (this.isTurn) {	
			if (!card.raised) {	
				card.raised = true;
				card.cardImg.style.top = `${card.y - raiseSelectedCardBy}px`;
				this.selected.push(card);
				console.log(this.selected);
			} else {
				card.raised = false;
				card.cardImg.style.top = `${card.y}px`;
				this.selected.splice(this.selected.indexOf(card), 1);
				console.log(this.selected);
			}

			if (this.canPlaySelected()) {
				playSelectedButton.disabled = false;
			} else {
				playSelectedButton.disabled = true;
			}
		}
	};
	card.cardImg.addEventListener("click", toggleCardRaise.bind(this));
}

//returns true if the currently selected cards are playable
PlayerOne.prototype.canPlaySelected = function () {
	if (this.selected.length === 0) {
		return false;
	}

	for (let i = 1; i < this.selected.length; i++) {
		if (this.selected[i-1].value != this.selected[i].value) {
			return false;
		}
	}

	if (this.curCenter.length === 0) {
		return true;
	}

	if (this.curCenter.length != this.selected.length) {
		return false;
	}

	if (this.selected[0].value >= this.curCenter[0].value) {
		return false;
	}

	return true;
}

//CpuPlayer class constructor
function CpuPlayer (name, playerNumber, numPlayers) {
	Player.call(this, name, playerNumber, numPlayers);
}
CpuPlayer.prototype = Object.create(Player.prototype);
Object.defineProperty(CpuPlayer.prototype, 'constructor', { 
    value: CpuPlayer, 
    enumerable: false,
    writable: true });

//adds Card to CpuPlayer's hand
CpuPlayer.prototype.addCard = function (card) {
	//shift all cards currently in hand to left
	for (const c of this.hand) {
		c.cardImg.style.left = `${parseInt(c.cardImg.style.left) - cardSpace * Math.cos(this.theta)}px`;
		c.cardImg.style.top = `${parseInt(c.cardImg.style.top) - cardSpace * Math.sin(this.theta)}px`;
	}

	//move card from center to right side of hand
	let dx = this.x - card.x + ((handWidth/2) - (cardWidth/2)) * Math.cos(this.theta) - ((handHeight/2) - (cardHeight/2)) * Math.sin(this.theta);
	let dy = this.y - card.y + ((handWidth/2) - (cardWidth/2)) * Math.sin(this.theta) + ((handHeight/2) - (cardHeight/2)) * Math.cos(this.theta);
	card.x += dx + (cardSpace * this.hand.length) * Math.cos(this.theta);
	card.y += dy + (cardSpace * this.hand.length) * Math.sin(this.theta);
	card.cardImg.style.left = `${card.x}px`;
	card.cardImg.style.top = `${card.y}px`;
	card.cardImg.style.zIndex = this.hand.length;
	card.cardImg.style.transform = `rotateZ(${this.theta}rad)`;
	this.hand.push(card);
}

//Game class constructor
function Game(deckSize, names) {
	//initialize deck
	this.deck = new Deck(deckSize);
	this.deck.shuffle();

	//initialize players
	this.players = [];
	this.players.push(new PlayerOne(names[0], names.length));
	for (let i = 1; i < names.length; i++) {
		this.players.push(new CpuPlayer(names[i], i, names.length));
	}

	this.discard = [];
	this.center = [];
	this.finishedPlayers = [];
	this.curPlayerIndex = 0;
	this.z = 1;
}

//deal hands when dealButton clicked
Game.prototype.dealHands = function () {
	dealButton.disabled = false;
	let curPlayer = 0;
	let deal;
	function dealNext() {
		if (this.deck.cards.length > 0) {
			this.players[curPlayer].addCard(this.deck.cards.shift());
			curPlayer++;
			curPlayer %= this.players.length;
		} else {
			clearInterval(deal);
			sortButton.disabled = false;
		}
	}
	let _this = this;
	dealButton.onclick = function () {
		deal = setInterval(dealNext.bind(_this), dealSpeed);
		dealButton.disabled = true;
	};
}

//sort hands when sortButton clicked
Game.prototype.sortHands = function () {
	let _this = this;
	sortButton.onclick = function () {	
		for (const player of _this.players) {
			player.hand.sort((c1, c2) => c2.value - c1.value);
			player.repositionCards();
		}
		sortButton.disabled = true;
		playButton.disabled = false;
	};
}

//plays cards from hand to center
Game.prototype.moveToCenter = function (player, cards) {
	//updates info displayed
	console.log(`${player.name} plays ${cards.length} ${cards[0].value}s`);
	lastPlayerInfo.textContent = player.name;
	lastPlayInfo.textContent = `${cards.length} ${cards[0].value}`;

	//removes each card from hand
	for (const card of cards) {
		player.hand.splice(player.hand.indexOf(card), 1);
	}

	//adds/moves each card to center, repositions cards still in hand 
	this.center.unshift(cards);
	for (let i = 0; i < cards.length; i++) {
		let card = this.center[0][i];
		if (!card.faceUp) {
			card.flipCard();
		}
		let dx = centerX - card.x + (centerTableWidth / 2) - (cardWidth / 2);
		let dy = centerY - card.y + (centerTableHeight / 2) - (cardHeight / 2);
		card.x += dx + (2 * cardSpace * ((this.center[0].length - i - 1) - ((this.center[0].length - 1) / 2)));
		card.y += dy;
		card.cardImg.style.left = `${card.x}px`;
		card.cardImg.style.top = `${card.y}px`;
		card.cardImg.style.zIndex = this.z;
		card.cardImg.style.transform = `rotateZ(0rad)`;
		this.z++;
	}
	player.repositionCards();
}

//clears cards from center to discard pile
Game.prototype.discardCenter = function () {
	for (const cards of this.center) {
		for (const card of cards) {
			let dx = discardX - card.x + (discardWidth / 2) - (cardWidth / 2);
			let dy = discardY - card.y + (discardHeight / 2) - (cardHeight / 2);
			card.x += dx;
			card.y += dy;
			card.cardImg.style.left = `${card.x}px`;
			card.cardImg.style.top = `${card.y}px`;
			this.discard.push(card);
		}
	}
	this.center = [];
	console.log('CLEAR');
}

//deal, sort, and play the game
Game.prototype.play = function () {
	this.dealHands();
	this.sortHands();
	let _this = this;
	playButton.onclick = function () {
		playButton.disabled = true;
		currentlyOn.textContent = _this.players[0].name;
		_this.playTurn();
	};
}

//plays one turn of game and calls itself again if game not finished
Game.prototype.playTurn = function () {
	let player = this.players[this.curPlayerIndex];

	//if player 1's turn
	if (this.curPlayerIndex === 0) {
		player.isTurn = true;
		if (this.center.length === 0) {
			player.curCenter = [];
		} else {
			player.curCenter = this.center[0];
		}
		passButton.disabled = false;

		//if clicked, play the selected cards to the center
		let _this = this;
		playSelectedButton.onclick = function () {
			pass.style.visibility = 'hidden';

			//disable buttons and play cards to center
			playSelectedButton.disabled = true;
			passButton.disabled = true;
			player.isTurn = false;
			_this.moveToCenter(player, player.selected);
			player.selected = [];

			//check if player finished
			_this.lastPlayerIndex = _this.curPlayerIndex;
			if (player.hand.length === 0) {
				_this.finishedPlayers.push(player);
				player.finished = true;
				let doneMessage = document.querySelector(`#${player.id} .player-done`);
				doneMessage.style.visibility = 'visible';
				console.log(`${player.name} is done`);
			}

			//check if game isn't over
			if (_this.finishedPlayers.length < _this.players.length - 1) {
				//go to next unfinished player and call next turn (don't use setTimeout if player 1 is next)
				_this.curPlayerIndex++;
				_this.curPlayerIndex %= _this.players.length;
				player = _this.players[_this.curPlayerIndex];
				if (_this.curPlayerIndex === _this.lastPlayerIndex) {
						_this.discardCenter();
				}
				while (player.finished) {
					_this.curPlayerIndex++;
					_this.curPlayerIndex %= _this.players.length;
					player = _this.players[_this.curPlayerIndex];
					if (_this.curPlayerIndex === _this.lastPlayerIndex) {
						_this.discardCenter();
					}
				}

				currentlyOn.textContent = player.name;

				setTimeout(_this.playTurn.bind(_this), playSpeed);
			} else {
				//bring up final results
				results.style.zIndex = 1000;
				for (const player of _this.players) {
					if (!player.finished) {
						_this.finishedPlayers.push(player);
						break;
					}
				}
				for (let i = 0; i < _this.finishedPlayers.length; i++) {
					let rankingsName = document.querySelector(`.rankings${i+1} .rankings-name`);
					rankingsName.textContent = _this.finishedPlayers[i].name;
					rankingsName.parentNode.style.visibility = 'visible';
				}

				//if clicked, start new game
				newGameButton.onclick = function () {
					start();
				}

				//if clicked, quit to home page
				quitButton.onclick = function () {
					window.location.href='home.html';
				}
			}
		};

		//if clicked, pass turn
		passButton.onclick = function () {
			console.log(`${player.name} passes`);
			player.addPassMsg();
			playSelectedButton.disabled = true;
			passButton.disabled = true;
			player.isTurn = false;
			
			//go to next unfinished player and call next turn (don't use setTimeout if player 1 is next)
			_this.curPlayerIndex++;
			_this.curPlayerIndex %= _this.players.length;
			player = _this.players[_this.curPlayerIndex];
			if (_this.curPlayerIndex === _this.lastPlayerIndex) {
					_this.discardCenter();
			}
			while (player.finished) {
				_this.curPlayerIndex++;
				_this.curPlayerIndex %= _this.players.length;
				player = _this.players[_this.curPlayerIndex];
				if (_this.curPlayerIndex === _this.lastPlayerIndex) {
					_this.discardCenter();
				}
			}

			currentlyOn.textContent = player.name;

			setTimeout(_this.playTurn.bind(_this), playSpeed);
		}
	} else {  //computer player's turn
		let played = false;

		//check if center is empty
		if (this.center.length === 0) {
			//play all of highest remaining value
			let curCount = player.hand.filter(i => i.value === player.hand[0].value).length;
			this.moveToCenter(player, player.hand.slice(0, curCount));
			played = true;
		} else {
			//if possible, play highest value cards such that all of those value are played
			let max = this.center[0][0].value;
			let cardCount = this.center[0].filter(i => i.value === this.center[0][0].value).length;
			let index = 0;
			while (index < player.hand.length) {
				let curCount = player.hand.filter(i => i.value === player.hand[index].value).length;
				if (curCount === cardCount && player.hand[index].value < max) {
					this.moveToCenter(player, player.hand.slice(index, curCount + index));
					played = true;
					break;
				}
				index += curCount;
			}
		}

		//check if player played cards
		if (!played) {
			console.log(`${player.name} passes`);
			player.addPassMsg();
		} else {
			pass.style.visibility = 'hidden';
			this.lastPlayerIndex = this.curPlayerIndex;
			//check if player finished
			if (player.hand.length === 0) {
				this.finishedPlayers.push(player);
				player.finished = true;
				let doneMessage = document.querySelector(`#${player.id} .player-done`);
				doneMessage.style.visibility = 'visible';
				console.log(`${player.name} is done`);
			}
		}

		//check if game isn't over
		if (this.finishedPlayers.length < this.players.length - 1) {
			//go to next unfinished player and call next turn (don't use setTimeout if player 1 is next)
			this.curPlayerIndex++;
			this.curPlayerIndex %= this.players.length;
			player = this.players[this.curPlayerIndex];
			if (this.curPlayerIndex === this.lastPlayerIndex) {
					this.discardCenter();
			}
			while (player.finished) {
				this.curPlayerIndex++;
				this.curPlayerIndex %= this.players.length;
				player = this.players[this.curPlayerIndex];
				if (this.curPlayerIndex === this.lastPlayerIndex) {
					this.discardCenter();
				}
			}

			currentlyOn.textContent = player.name;

			if (this.curPlayerIndex === 0) {
				this.playTurn();
			} else {
				setTimeout(this.playTurn.bind(this), playSpeed);
			}
		} else {
			//bring up final results
			results.style.zIndex = 1000;
			for (const player of this.players) {
				if (!player.finished) {
					this.finishedPlayers.push(player);
					break;
				}
			}
			for (let i = 0; i < this.finishedPlayers.length; i++) {
				let rankingsName = document.querySelector(`.rankings${i+1} .rankings-name`);
				rankingsName.textContent = this.finishedPlayers[i].name;
				rankingsName.parentNode.style.visibility = 'visible';
			}

			//if clicked, start new game
			newGameButton.onclick = function () {
				start();
			}

			//if clicked, quit to home page
			quitButton.onclick = function () {
				window.location.href='home.html';
			}
		}
	}
}

//resets board, creates new game, and plays
function start() {
	results.style.zIndex = -1;
	let doneMessages = document.querySelectorAll('.player-done');
	for (const doneMessage of doneMessages) {
		doneMessage.style.visibility = 'hidden';
	}
	currentlyOn.textContent = '';
	lastPlayerInfo.textContent = '';
	lastPlayInfo.textContent = '';
	let game = new Game(10, ['p1', 'p2', 'p3', 'p4', 'p5', 'p6']);
	game.play();
}

start();