<?php
/*
мультиязычность
- сервер должен поддерживать mod_rewrite
- на ссылках переключения языка должен стоять класс no-barba, иначе новые шаблоны не прогрузятся из-за плагина
- шаблоны раскидываются по папкам en/ru/ua итд
- если добавятся новые языки, дополнить массив $languages

отправка заявок на почту
- пример формы в ua/index.html
- добавил поля required (обязательны для ввода)
- добавил валидацию емейла
- редирект после отправки настраивается в mail.php
*/

if (!session_id()) @ session_start();

// список языков
$languages = ['en', 'ru', 'ua'];

// язык по умолчанию
$lang = 'ua';

// если параметр LANG был передан в запросе, переключается язык и прописывается в куки и сессию
if(isset($_GET['lang']) && in_array($_GET['lang'], $languages)) {
    $lang = $_GET['lang'];
    $_SESSION['lang'] = $lang;
    setcookie('lang', $lang, 2147483647);
}

// проверка сессии (перемещение между страницами)
else if(isset($_SESSION['lang']) && in_array($_SESSION['lang'], $languages))
    $lang = $_SESSION['lang'];

// проверка куки (при повторном заходе на сайт), запись в сессию
else if(isset($_COOKIE['lang']) && in_array($_COOKIE['lang'], $languages)) {
    $lang = $_COOKIE['lang'];
    $_SESSION['lang'] = $lang;
}

// подключение шаблона
if(isset($_GET['page']))
    $page = $_GET['page'];
else
    $page = 'index.html';

include($lang . '/' . $page);
?>