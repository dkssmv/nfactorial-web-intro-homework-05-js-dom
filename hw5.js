//1 Таблицу с id="age-table".
let table = document.getElementById('age-table');
console.log(table)

//2 Все элементы label внутри этой таблицы (их три).
document.querySelectorAll('#age-table label');

//3 Первый td в этой таблице (со словом «Age»).
table.querySelectorAll('td')[0];

// Форму form с именем name="search".
document.querySelector('form[name="search"]');

// Первый input в этой форме.
let form = document.getElementsByTagName('input')[0];
console.log(form);

// Последний input в этой форме.



//Что выведет этот код

<script>
let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

alert( body.firstChild.data ); 
// что выведет? body
</script>