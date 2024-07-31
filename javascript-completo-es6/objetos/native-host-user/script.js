// Liste 5 objetos nativos
//Object
//Array
//String
//Function
//Date

// Liste 5 objetos do browser
//Window
//Document
//HTMLCollection
//history
//NodeList 

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
  console.log("Existe document.webkitHidden"); //Chrome
} else {
  console.log("Não existe document.webkitHidden"); //Firefox
}

if (typeof document.webkitVisibilityState !== "undefined") {
  console.log("Existe document.webkitVisibilityState"); //Chrome
} else {
  console.log("Não existe document.webkitVisibilityState"); //Firefox
}