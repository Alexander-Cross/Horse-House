<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['tel'];

    $content = 'Новый заказ от' . $name . '. Его телефон: ' . $phone;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $success = mail("office@horse-house.by", "Новый заказ на Horse House", $content, $headers);

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
