<?php
class Validator {
    public static function sanitize($data) {
        return htmlspecialchars(stripslashes(trim($data)));
    }

    public static function validateEmail($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public static function validateLength($string, $min, $max) {
        $length = strlen($string);
        return $length >= $min && $length <= $max;
    }
}
?>
