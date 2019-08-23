<?php

if(isset($_POST["inp_name"]) || isset($_POST["inp_email"])) {
    $name = "";
    $email = "";
    if (isset($_POST['inp_name']) && $_POST['inp_name'] != '' && $_POST['inp_name'] != null) {
        $name = $_POST['inp_name'];
        echo 'Hello ' . $name . '.';
    }
    if (isset($_POST['inp_email']) && $_POST['inp_email'] != '' && $_POST['inp_email'] != null) {
        $email = $_POST['inp_email'];
        echo ' Your email is - ' . $email;
    }
}
?>
