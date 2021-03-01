<?php

include_once '../../utils/db.php';
$db = DataBase::getDB();

header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));


switch ($data->type) {
    case 'getUsers':
        $query = "SELECT * FROM users ";
        $table = $db->select($query);
        echo json_encode(array($table), JSON_UNESCAPED_UNICODE);
        return;
    default:
        echo 'Error';
}

