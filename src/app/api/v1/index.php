<?php

include_once '../../utils/db.php';
$db = DataBase::getDB();

header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

function getUsers()
{
    $db1 = DataBase::getDB();

    $query = "
            SELECT
                users.id,
                users.name as name,
                users.middle_name,
                users.last_name,
                users.gender,
                users.birth_date,
                users.address,
                p.name as positions,
                d.name as division
            FROM users
                LEFT JOIN positions as p on users.id_position = p.id
                LEFT JOIN division as d on users.id_division = d.id
        ";
    return $db1->select($query);
}

switch ($data->type) {
    case 'getUsers':
        echo json_encode(array(getUsers()), JSON_UNESCAPED_UNICODE);
        return;
    case 'getUsersByDivision':
        $query = "
            SELECT
                users.id,
                users.name as name,
                users.middle_name,
                users.last_name,
                users.gender,
                users.birth_date,
                users.address,
                p.name as positions,
                d.name as division
            FROM users
                LEFT JOIN positions as p on users.id_position = p.id
                LEFT JOIN division as d on users.id_division = d.id
            WHERE d.name LIKE '%$data->payload%'
        ";
        $table = $db->select($query);
        echo json_encode(array($table), JSON_UNESCAPED_UNICODE);
        return;
    case 'getUsersByPosition':
        $query = "
            SELECT
                users.id,
                users.name as name,
                users.middle_name,
                users.last_name,
                users.gender,
                users.birth_date,
                users.address,
                p.name as positions,
                d.name as division
            FROM users
                LEFT JOIN positions as p on users.id_position = p.id
                LEFT JOIN division as d on users.id_division = d.id
            WHERE p.name LIKE '%$data->payload%'
        ";
        $table = $db->select($query);
        echo json_encode(array($table), JSON_UNESCAPED_UNICODE);
        return;
    case 'deleteUser':
        $te = intval($data->payload);
        $query = "
            DELETE FROM users WHERE id='$te';
        ";
        $db->delete($query);

        echo json_encode(array(getUsers()), JSON_UNESCAPED_UNICODE);
        return;
    case 'createUser':
//        print_r($data->payload->name);
        $name = $data->payload->name;
        $middleName = $data->payload->middleName;
        $lastName = $data->payload->lastName;
        $gender = $data->payload->gender;
        $adress = $data->payload->adress;
        $date = $data->payload->date;
        $query = "
            INSERT INTO users(name, middle_name, last_name, gender, birth_date, address, id_position, id_division)
                VALUES
            ('$name', '$middleName', '$lastName','$gender','$date','$adress',1,1);
        ";
        $db->add($query);
        echo json_encode(array(getUsers()), JSON_UNESCAPED_UNICODE);
        return;
    default:
        echo 'Error';
}

