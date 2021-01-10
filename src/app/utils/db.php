<?

class DataBase {

    private static $db = null;
    private $mysqli;

    /* подключение к БД */
    private function __construct() {
        $this->mysqli = new mysqli("172.17.0.1", "root", "123", "db", '3306');
    }

    /* При уничтожении экземпляра класса закрывает соединение с БД */
    public function __destruct() {
        if ($this->mysqli) $this->mysqli->close();
    }

    /* Создание singleton класса, для обеспечения одного подключения к БД при повторных инициализациях */
    public static function getDB(): DataBase
    {
        if (self::$db == null) self::$db = new DataBase();
        return self::$db;
    }


    public function select($query, $params = false) {
        var_dump($query);
        var_dump($params);
        return true;
//        $result_set = $this->mysqli->query($this->getQuery($query, $params));
//        if (!$result_set) return false;
//        return $this->resultSetToArray($result_set);
    }
}


//$host = '172.17.0.1'; // адрес сервера
//$database = 'db'; // имя базы данных
//$user = 'root'; // имя пользователя
//$password = '123'; // пароль
//$port = '3306'; // порт
//
//
//$db_connect = new mysqli($host, $user, $password, $database, $port);
//
//if (!$db_connect) {
//    die('Ошибка соединения: ' . $db_connect->connect_error);
//}
//
//echo 'Success... ' . $db_connect->host_info . "\n";
//
//$db_connect->close();

//class DB
//{
//
//    private static $instance;
//
//
//    public static function getInstance(): DB
//    {
//        if (self::$instance === null) {
//            self::$instance = new self;
//        }
//        return self::$instance;
//    }
//
//    /**
//     * Делаем что-нибудь
//     */
//    public function doAction()
//    {
//        $host = '172.17.0.1'; // адрес сервера
//        $database = 'db'; // имя базы данных
//        $user = 'root'; // имя пользователя
//        $password = '123'; // пароль
//        $port = '3306'; // порт
//
//
//        $db_connect = new mysqli($host, $user, $password, $database, $port);
//
//        if (!$db_connect) {
//            die('Ошибка соединения: ' . $db_connect->connect_error);
//        }
//
//        echo 'Success... ' . $db_connect->host_info . "\n";
//
//        $db_connect->close();
//    }
//}

