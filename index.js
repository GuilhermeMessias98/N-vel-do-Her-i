let NomeHeroi = prompt ("Digite o Nome do Herói: ");
let XpHeroi = prompt ("Digite a quantidade de XP do Herói: ");
let nivel 

if (XpHeroi < 1000) {
    nivel= "Ferro";
}  else if (XpHeroi >= 1.001 && XpHeroi <= 2.000) {
    nivel= "Bronze";
}  else if (XpHeroi >= 2.001 && XpHeroi <= 5.000) {
    nivel= "Prata";
}  else if (XpHeroi >= 5.001 && XpHeroi <= 7.000) {
    nivel= "Ouro";
}  else if (XpHeroi >= 7.001 && XpHeroi <= 8.000) {
    nivel= "Platina";
}  else if (XpHeroi >= 8.001 && XpHeroi <= 9.000) {
    nivel= "Ascendente";
}  else if (XpHeroi >= 9.001 && XpHeroi <= 10.000) {
    nivel= "Imortal";
}  else if (XpHeroi >= 10.001) {
    nivel= "Radiante";
}
console.log("O heroi de nome " + NomeHeroi + " está no nível " + nivel)
