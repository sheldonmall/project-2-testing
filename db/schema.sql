create database pointclickshop;
use pointclickshop;

create table user (
	id tinyINT AUTO_INCREMENT not null,
	first_name VARCHAR(25) not null,
	last_name VARCHAR(25) not null,
	email VARCHAR(50) not null,
	phone VARCHAR(10),
	street_address VARCHAR(50) not null,
	city VARCHAR(25) not null,
	province VARCHAR(2) not null,
	postal_code VARCHAR(6) not null,
	primnary key(id)
);

create table product (
	id tinyINT AUTO_INCREMENT not null,
	product_name VARCHAR(50) not null,
	category_id tinyINT not null,
	price TINYINT not null,
	product_desc VARCHAR(50) not null,
	product_image VARCHAR(50),
	primnary key(id)
);

create table category (
	id tinyINT AUTO_INCREMENT not null,
	category_name VARCHAR(50) not null,
	category_desc VARCHAR(50) not null,
	primnary key(id)
);

create table orders (
	id tinyINT AUTO_INCREMENT not null,
	customer_id TINYINT not null,
	product_id TINYINT not null,
	product_price TINYINT,
	primary key (id),
	foreign key (customer_id) references user(id),
	foreign key (product_id) references product(id)
);