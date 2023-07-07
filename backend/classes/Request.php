<?php 

header("Access-Control-Allow-Origin: *");
    abstract class METHODS {
        const POST = "POST";
        const GET    = "GET";
    }

    class Request extends Singleton {

        private $baseUrl;
        public function __construct($baseUrl) {
            error_log("constructore called");
            $this->baseUrl = $baseUrl;
        }

        public function callUri($path,$data = array()){
            $curl = curl_init();
            $url = sprintf("%s?%s", $this->baseUrl.$path, http_build_query($data));
            error_log("url". $url);
            $response = file_get_contents($url);
            // $ch = curl_init($url);
            // curl_setopt($ch, CURLOPT_HTTPGET, true);
            // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            // $response_json = curl_exec($ch);
            // curl_close($ch);
            // $response=json_decode($response_json, true);
            return $response;
        }
    }
?>