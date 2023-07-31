//Imagens e sons do Jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPonto;
let somColisao;



function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  
  somTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
}