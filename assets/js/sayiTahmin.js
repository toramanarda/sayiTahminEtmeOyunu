let hamleler = prompt("Bir sayı tutun");

let bilgisayarHamle = [(Math.floor(Math.random() * 10))];

let oyuncuHamle = hamleler;

console.log(bilgisayarHamle, oyuncuHamle);

if (oyuncuHamle == bilgisayarHamle) {
  alert('Güzel Tahmin Kazandın :)');
} else {
  alert('Ne Yazık ki Tekar Deneyin :/');
}
