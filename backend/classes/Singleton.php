<?php 
    class Singleton
    {
        static $instance = [];
        final public static function get_instance(...$args) {
            $called_class = get_called_class();
            if( !isset( $instance[ $called_class ] ) ) {
                self::$instance[$called_class] = new $called_class(...$args);
            }
    
            return self::$instance[ $called_class ];
        }
    
    }
?>