<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // You can add code here to send the message via email or store it in a database
    
    echo "Thank you, $name, for your message!";
}
?>
