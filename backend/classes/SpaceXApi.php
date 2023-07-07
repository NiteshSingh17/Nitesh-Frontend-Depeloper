<?php
    class SpaceXApi extends Singleton {
        private $api; 
        private $limit = 100;

        public function __construct() {
            $this->api = new Apis();
        }
        public function getCapsule($type = null, $original_launch = null, $status = null, $offset = null){
            return $this->api->getAllCapsules([
                "status" =>  $status,
                "original_launch" => $original_launch,
                "type" => $type,
                "limit" => $this->limit,
                "offset" => $offset
            ]);
        }
    }

?>