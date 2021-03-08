var parola = prompt("Inserisci una parola");
var p_invertita = "";
inverti(parola)
function inverti(parola) {
  for (i = parola.length - 1; i>=0 ; i--) {
    document.write(parola.charAt(i));
    p_invertita += parola.charAt(i);
  }
  if (parola === p_invertita) {
    document.write(" La parola é polindroma");
  } else {
    document.write(" La parola non é polindroma");
  }
  return p_invertita;
}


// var scegli = prompt("Pari o Dispari?");
// var numero_utente = parseInt(prompt("Scegli un numero da 1 a 5"));
