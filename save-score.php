<?php
session_start();

require('koneksi.php');


if( isset($_GET['score']) ){
        
    $userId = $_SESSION['userId'];
    $score = $_GET['score'];

    echo "$userId\n";
    echo "$score";
   
    if(!empty(trim($userId)) && !empty(trim($score))){

        $query      = "INSERT INTO score (id, score) VALUES ('$userId', '$score')";
        $result     = mysqli_query($con, $query);
    }

    header('Location: index.php');
} 
?>