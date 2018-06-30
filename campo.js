var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var campo = new Path2D();
var penalti = new Path2D();
var semi = new Path2D();
var inicio = new Path2D();
var escanteio = new Path2D();
var gArea = new Path2D();
var pArea = new Path2D();
var gol = new Path2D();
var centro = new Path2D();
var circuloCentro = new Path2D();

ctx.fillStyle = 'green';
//Gramado
ctx.fillRect(0, 0, 600, 400);
ctx.strokeStyle = 'white';
//Limites do gramado
campo.moveTo(10,10);
campo.lineTo(590,10);
campo.lineTo(590,390);
campo.lineTo(10,390);
campo.lineTo(10,10);
//Meio de Campo
circuloCentro.moveTo(360,200);
circuloCentro.arc(300, 200, 60, 0, Math.PI * 2, true);
//Linha de centro do campo
centro.moveTo(300,10);
centro.lineTo(300,390);
//Pequena area esquerda
pArea.moveTo(10,260);
pArea.lineTo(50,260);
pArea.lineTo(50,140);
pArea.lineTo(10,140);
//Grande area esquerda
gArea.moveTo(10,320);
gArea.lineTo(120,320);
gArea.lineTo(120,80);
gArea.lineTo(10,80);
//Marca do penalti esquerda
penalti.moveTo(80,200);
penalti.strokeStyle = 'white';
ctx.fillStyle = 'white';
penalti.arc(80,200, 2,0,  Math.PI * 2, true);
//Semi-Circulo da grande area da esquerda
semi.arc(120,200,50,Math.PI/2, Math.PI*3/2 , true);
//Pequena area direita
pArea.moveTo(590,260);
pArea.lineTo(550,260);
pArea.lineTo(550,140);
pArea.lineTo(590,140);
//Grande area direita
gArea.moveTo(590,320);
gArea.lineTo(480,320);
gArea.lineTo(480,80);
gArea.lineTo(590,80);
//Marca do penalti direita
penalti.moveTo(520,200);
penalti.strokeStyle = 'white';
ctx.fillStyle = 'white';
penalti.arc(520,200, 2,0,  Math.PI * 2, true);
//Semi-Circulo da grande area da direita
semi.moveTo(480,150);
semi.arc(480,200,50,Math.PI*3/2, Math.PI/2 , true);
//Marca de inicio de jogo
inicio.moveTo(300,200);
inicio.strokeStyle = 'white';
ctx.fillStyle = 'white';
inicio.arc(300,200, 3,0,  Math.PI * 2, true);
//As quatro marcas de escanteio
escanteio.moveTo(10,390);
escanteio.arc(10,390, 10, Math.PI * 2, Math.PI * 3/2, true);
escanteio.moveTo(590,390);
escanteio.arc(590,390, 10,  Math.PI * 3/2, Math.PI , true);
escanteio.moveTo(10,10);
escanteio.arc(10,10, 10,  Math.PI/2, Math.PI*2 , true);
escanteio.moveTo(590,10);
escanteio.arc(590,10, 10,  Math.PI, Math.PI/2 , true);
//Demarcacoes dos gols
gol.moveTo(11,225);
gol.lineTo(11,175);
gol.moveTo(589,225);
gol.lineTo(589,175);


//Desenho
ctx.fill(penalti);
ctx.fill(inicio);
ctx.stroke(campo);
ctx.stroke(gArea);
ctx.stroke(pArea);
ctx.stroke(semi);
ctx.stroke(escanteio);
ctx.stroke(gol);
ctx.stroke(centro);
ctx.stroke(circuloCentro);