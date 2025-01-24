console.log("si ves esto el programador no hizo bien su trabajo");
function pickRandom(max) {
  console.log(max);
  return Math.floor(Math.random() * max);
}
function obtenerUnDialogoAleatorio() {
  const phrases = ["SampleText01", "SampleText02", "SampleText03"];
  return phrases[pickRandom(phrases.length)];
}
function obtenerUnaBurbuja() {
  const burbujas = ["Burbuja1", "Burbuja2"];
  console.log(burbujas[0]);
  return burbujas[pickRandom(burbujas.length)];
}
