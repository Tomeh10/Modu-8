function getTriangleArea(a, h) {
 // sprawdź, czy czy przekazane parametry a oraz h mają wartość większą od zera
 // jeśli nie (będzie mniejszy bądź równy zero), to zwróć wartość 'Nieprawidłowe dane'
if (a > 0 && h > 0) {
 //kod wykona się jeśli warunek jest spełniony
var wynik = (a*h/2);
return wynik;

} else {
 //kod wykona się w przeciwnym wypadku warunek nie zostanie spełniony
var wynik = 'Błędnie wprowadzone dane ';
return wynik;
}

var wartoscFunkcji = getTriangleArea(10,4);
console.log( getTriangleArea(10,6) )
