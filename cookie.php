<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>PHP</title>
</head>

<body>
    <?php
    require_once("funkcje.php");
    if (isSet($_GET["utworzCookie"])) {
        $cookieTime = $_GET["czas"];
        setcookie("nazwa", "wartosc", time() + $cookieTime, "/");
        echo "<p>Utworzono ciastko!</p>";
    }
    ?>
    <a href="/PHP_1/index.php">Wstecz</a>
</body>

</html>