const langs = [
	"01",
	"01",
	"01",
	"01",
	"01",
	"01",
	"01",
	"01",
	"01",
	"10321",
	"113443441234",
	"12134",
	"13134321",
	"143756",
	"151768",
	"1617968",
	"1717684",
	"18871",
	"19178",
	"209781",
	"211678",
	"221436",
	"231377",
	"241786",
	"25178",
	"26178",
	"278174",
	"28178",
	"29178",
	"309317",
	"3136978",
	"32913783",
	"33713968",
	"34176986817",
	"358761",
	"36871",
	"373781",
	"383687",
	"398723",
	"4036178",
	"4187136",
	"42748104",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"50",
	"51",
	"52",
	"53",
	"54",
	"55",
	"56",
	"57",
	"58",
	"59",
	"60",
	"61",
	"62",
	"63",
	"64",
	"65",
	"66",
	"67",
	"68",
	"69",
	"70",
	"71",
	"72",
	"73",
	"74",
	"75",
	"76",
	"77",
	"78",
	"79",
	"80",
	"81",
	"82",
	"83",
	"84",
	"85",
	"86",
	"87",
	"88",
	"89",
	"90",
	"91",
	"92"
];
// hello world in 92 Languages

let charSize = 18;
let fallRate = charSize / 2;
let streams;

// -------------------------------
class Char {
	constructor(value, x, y, speed) {
		this.value = value;
		this.x = x;
		this.y = y;
		this.speed = speed;
	}

	draw() {
		const flick = random(100);
		// 10 percent chance of flickering a number instead
		if (flick < 10) {
			fill(120, 30, 100);
			text(round(random(9)), this.x, this.y);
		} else {
			text(this.value, this.x, this.y);
		}

		// fall down
		this.y = this.y > height ? 0 : this.y + this.speed;
	}
}

// -------------------------------------
class Stream {
	constructor(text, x) {
		const y = random(text.length);
		const speed = random(2, 10);
		this.chars = [];

		for (let i = text.length; i >= 0; i--) {
			this.chars.push(
				new Char(text[i], x, (y + text.length - i) * charSize, speed)
			);
		}
	}

	draw() {
		fill(120, 100, 100);
		this.chars.forEach((c, i) => {
			// 30 percent chance of lit tail
			const lit = random(100);
			if (lit < 30) {
				if (i === this.chars.length - 1) {
					fill(120, 30, 100);
				} else {
					fill(120, 100, 90);
				}
			}

			c.draw();
		});
	}
}

function createStreams() {
	// create random streams from langs that span the width
	for (let i = 0; i < width; i += charSize) {
		streams.push(new Stream(random(langs), i));
	}
}

function reset() {
	streams = [];
	createStreams();
}

function setup() {
	createCanvas(innerWidth, innerHeight);
	reset();
	frameRate(20);
	colorMode(HSB);
	noStroke();
	textSize(charSize);
	textFont("monospace");
	background(0);
}

function draw() {
	background(0, 0.4);
	streams.forEach((s) => s.draw());
}

function windowResized() {
	resizeCanvas(innerWidth, innerHeight);
	background(0);
	reset();
}