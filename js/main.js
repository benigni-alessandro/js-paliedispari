var parola = prompt("Inserisci una parola");
var p_invertita = "";
for (i = parola.length - 1; i>=0 ; i--) {
  document.write(parola.charAt(i));
  p_invertita += parola.charAt(i);
}
if (parola === p_invertita) {
  document.write(" La parola é polindroma");
} else {
  document.write(" La parola non é polindroma");
}
