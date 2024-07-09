create table login (
  id int unsigned primary key auto_increment not null,
  user varchar(255) not null unique,
  email varchar(255) not null unique,
  password varchar(255) not null
);
