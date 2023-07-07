<?php 
    class SessionCheck{
        static public function check(){
            session_start();
            if (isset($_SESSION['last_submit']) && time() - $_SESSION['last_submit'] < 60) {
               return [ "error" => true, "message" => "Please wait before submitting the form again." ];
            } else {
                $_SESSION['last_submit'] = time();
            }
        }
    }
?>