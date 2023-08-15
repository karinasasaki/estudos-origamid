var possuiGraducao = false;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log("Possui graduação e douturado");
} else if(possuiGraducao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

var corFavorita = "Verde";

switch(corFavorita) {
  case "Verde":
    console.log("Sua cor favorita é verde");
    break;
  case "Vermelho":
    console.log("Sua cor favorita é vermelho");
    break;
  case "Amarelo":
    console.log("Sua cor favorita é amarelo");
    break;
  default:
    console.log("Cor não encontrada");
}