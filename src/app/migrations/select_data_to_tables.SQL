SELECT name From division_type ORDER BY id DESC;

SELECT * From users WHERE name = 'Владислав';

SELECT * From users
WHERE address = 'г. Ярославль, ул. Жукова, д 28';

SELECT division.id, division.name, division_type.name as type
FROM division, division_type
WHERE division.type_id = division_type.id

SELECT u.name, u.last_name, p.name as position_name
FROM users as u
INNER JOIN positions as p ON u.id_position = p.id
WHERE p.name NOT LIKE '%слесарь%'

SELECT u.name, u.last_name, p.name, u.birth_date as position_name
FROM users as u
LEFT JOIN positions as p ON u.id_position = p.id
WHERE u.birth_date >= '1990-03-16' AND u.birth_date <= '2000-01-07'

SELECT u.name, u.last_name, p.name, u.birth_date as position_name
FROM users as u
RIGHT JOIN positions as p ON u.id_position = p.id
WHERE p.name = 'Старший слесарь' OR p.name = 'Слесарь'
SELECT COUNT(*) as count FROM users;

SELECT MAX(birth_date) as max_birth_date
FROM users;

SELECT d.name, count(division_type.name) as count FROM division_type
    LEFT JOIN division d on division_type.id = d.type_id
GROUP BY division_type.name;

SELECT * FROM (
  SELECT d.name, count(division_type.name) as count FROM division_type
      LEFT JOIN division d on division_type.id = d.type_id
  GROUP BY division_type.name
) as Subquery
WHERE count >= 2;

SELECT
       name,
       LENGTH(name) AS length_of_name
FROM users;


SELECT
       CONCAT(name, ' Тестовый пример') as result
FROM users;
