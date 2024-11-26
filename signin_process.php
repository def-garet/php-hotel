<?php
include "conn.php";

if (isset($_POST['Signin'])) {
    $email = $_POST["email"];
    $username = $_POST["username"];
    $password = $_POST["pass"];

    if (empty($email) && empty($password) && empty($username)) {
?>
        <script>
            alert("All fields are empty.");
            location.href = "signin.php";
        </script>
    <?php
    } elseif (empty($email)) {
    ?>
        <script>
            alert("Email is empty.");
            location.href = "signin.php";
        </script>
    <?php
    } elseif (empty($username)) {
    ?>
        <script>
            alert("Username is empty.");
            location.href = "signin.php";
        </script>
    <?php
    } elseif (empty($password)) {
    ?>
        <script>                                                                   
            alert("Password is empty.");
            location.href = "signin.php";
        </script>
    <?php
    } else {
        $sql = "INSERT INTO users_acc (acc_email, acc_username, acc_password) VALUES ('$email', '$username', '$password')";
        if (mysqli_query($conn, $sql)) {
            session_start();
            $_SESSION["user_id"] = mysqli_insert_id($conn);
            header("Location: login.html");
            exit();
        } else {
    ?>
            <script>
                alert("Error signing in.");
                location.href = "signin.php";
            </script>
    <?php
        }
    }
}
?>
