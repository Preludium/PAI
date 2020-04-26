<?php
    session_start();

    $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
    if (!$link) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

    if (isset($_SESSION['alert'])) {
        echo $_SESSION['alert'] . "<br>";
        unset($_SESSION['alert']);
    }

    $sql = "SELECT * FROM pracownicy";
    $result = $link->query($sql);

    foreach ($result as $v) {
        echo $v["ID_PRAC"] . " " . $v["NAZWISKO"] . "<br/>";
    }

    $result->free();
    $link->close();
    
    print <<< KONIEC
    <br><a href="form06_post.php">Dodaj pracownika</a>
    KONIEC;
