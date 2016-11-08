// Функция nameTextuser объявляет две переменные: admin и name
//присваивая значение из name в admin
//Выводит значение admin на экран
function nameTextuser () {
var admin = '';
var name = document.getElementById('name').value;
admin = name;
alert(admin);
}

// Функция clearInput () очищает поле ввода
function clearInput () {
document.getElementById("name").value='';

}