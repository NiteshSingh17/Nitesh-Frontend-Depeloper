<?php 

    class Apis extends Constants {
        private $request;
        public function __construct() {
            $this->handleCors();
            $this->request = Request::get_instance(self::SPACEX_API_URL);
        }
        function getAllCapsules($data = array()){
            $data = $this->request->callUri(self::URIS['getCapsule'], $data);
            return $data;
            // echo("data".json_decode())
        }
        function handleCors() {
            
            header('Content-Type: application/json; charset=utf-8');
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST');
            header("Access-Control-Allow-Headers: X-Requested-With");
        }
    }
?>