//carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 260, 320];
let velocidadeCarros = [2, 3, 3.5, 5, 3.5, 1.5];
let comprimentoCarro = 60;
let alturaCarro = 45;
  
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i = i + 1){
  xCarros[i] = xCarros[i] - velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < imagemCarros.length; i = i +1){
    if (passouTodaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  } 
}

function passouTodaTela(xCarro) {
  return xCarro < -80;
}