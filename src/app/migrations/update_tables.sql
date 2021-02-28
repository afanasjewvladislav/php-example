ALTER TABLE users MODIFY COLUMN name TEXT NOT NULL;

alter table users add foreign key (id_position) references positions (id);
alter table users add foreign key (id_division) references division (id);
alter table division add foreign key (type_id) references division_type (id);
