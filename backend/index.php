<?php 
    include_once('includeClasses.php');
    error_reporting(0);
    
    $error = SessionCheck::check();
    if($error) { echo $error; return; }

    $type = isset($_GET['type']) ? $_GET['type'] : null;
    $original_launch = isset($_GET['original_launch']) ? $_GET['original_launch'] : null;
    $status = isset($_GET['status']) ? $_GET['status'] : null;

    $spacexApi = SpaceXApi::get_instance();
    $data = $spacexApi->getCapsule($type, $original_launch, $status);
    echo $data;
    // echo $data;

?>