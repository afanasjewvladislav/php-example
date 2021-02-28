DELIMITER //
CREATE PROCEDURE proc(
    userName text,
    userMiddleName text,
    userLastName text,
    userGender varchar(1),
    userBirthDate date,
    userAddress text,
    userPosition int,
    userDivision int
)
begin

INSERT INTO users(name, middle_name, last_name, gender, birth_date, address, id_position, id_division)
VALUES
(userName, userMiddleName, userLastName,userGender,userBirthDate, userAddress, userPosition, userDivision);

SELECT
    p.name,
    count(p.name) as count
FROM users
    LEFT JOIN positions as p on users.id_position = p.id
GROUP BY p.name;
end
//

call proc(
    'Иван',
    'Иванович',
    'Иванов',
    'М',
    '1970-01-01',
    'г. Москва',
    1,
    1
);
