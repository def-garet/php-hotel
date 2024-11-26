<?php
include "conn.php";
session_start();

if (isset($_POST['Login'])) {
    $username = $_POST["username"];
    $password = $_POST["pass"];

    if (empty($username) || empty($password)) {
        echo "<script>
                alert('Both fields are required.');
                location.href = 'login.html';
              </script>";
    } else {
        $sql = "SELECT acc_id FROM users_acc WHERE acc_username='$username' AND acc_password='$password'";
        $request = mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($request) == 1) {
            $user = mysqli_fetch_assoc($request);
            $_SESSION["user_id"] = $user['acc_id'];
            $_SESSION["username"] = $username;

            header("Location: index.html");
            exit();
        } else {
            echo "<script>
                    alert('Invalid username or password.');
                    location.href = 'login.html';
                  </script>";
        }
    }
}
?>
