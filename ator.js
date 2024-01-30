//ator
let xAtor = 200;
let yAtor = 370;
let colisao = false;

// Limites laterais
let limiteEsquerdo = 0;
let limiteDireito = 570;

//pontos
let pontos = 0

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, 30, 25);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)) {
    yAtor = yAtor - 3;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yAtor = yAtor + 3;
  }
  if (yAtor > 370){
    voltaAtorPosicaoInicial()
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor = xAtor + 3;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor = xAtor - 3;
  }
   // Verifica limites laterais
   if (xAtor < limiteEsquerdo) {
    xAtor = limiteEsquerdo;
  } else if (xAtor > limiteDireito) {
    xAtor = limiteDireito;
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0; i < imagemCarros.length; i = i +1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
        voltaAtorPosicaoInicial()
      somColisao.play();
      if (pontosMaiorZero()) {
      pontos = pontos - 1;
          }
        }
    }
}

function voltaAtorPosicaoInicial() {
  yAtor = 370
  xAtor = 200
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(20);
  fill(color(255,69,0));
  text(pontos, width / 2, 25);
}

function marcaPonto(){ 
   if (yAtor < 20 ){
     pontos = pontos + 1;
     somPonto.play();
     voltaAtorPosicaoInicial();
   }
}

function pontosMaiorZero(){
  return pontos > 0
}