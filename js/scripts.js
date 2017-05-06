function getTriangleArea(a, h) {
	// sprawdź, czy czy przekazane parametry a oraz h mają wartość większą od zera
	// jeśli nie (będzie mniejszy bądź równy zero), to zwróć wartość 'Nieprawidłowe dane'
var wynik = (a*h/2);
return wynik;
}
var wartoscFunkcji = getTriangleArea(10,4);
console.log( getTriangleArea(10,6) )
