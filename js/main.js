// var parola = prompt("Inserisci una parola");
// var p_invertita = "";
// inverti(parola)
// function inverti(parola) {
//   for (i = parola.length - 1; i>=0 ; i--) {
//     document.write(parola.charAt(i));
//     p_invertita += parola.charAt(i);
//   }
//   if (parola === p_invertita) {
//     document.write(" La parola é polindroma");
//   } else {
//     document.write(" La parola non é polindroma");
//   }
//   return p_invertita;
// }


var scegli = prompt("Pari o Dispari?");
var numero_utente = parseInt(prompt("Scegli un numero da 1 a 5"));
randomcpu();
functionName(cpu, numero_utente);

function randomcpu() {
  cpu = Math.floor(Math.random() * 5) + 1;
  document.write(cpu + " è il numero del pc");
  return cpu;
}
function functionName(n_cpu, n_utente) {
  somma = n_cpu + n_utente;
  if (somma%2 ==0) {
    document.write(" La somma dei 2 numeri è pari")
  } else {
    document.write(" La somma dei 2 numeri è dispari")
  }
}
