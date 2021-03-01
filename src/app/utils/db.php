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


    public function select($query) {
        $res = $this->mysqli->query($query);
        $result = [];
        while($row = $res->fetch_assoc())
        {
            $result[] = $row;
        }
        if (!$result) {
            return false;
        }
        return $result;
    }
}


