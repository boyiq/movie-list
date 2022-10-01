create database movielist;

use movielist;

create table movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title TEXT,
  watched TINYINT
);
