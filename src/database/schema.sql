CREATE TABLE products(
	id_product int AUTO_INCREMENT PRIMARY KEY,
    name_product varchar(90) NOT NULL,
    price_product double,
    descricao_product varchar(90)
);

CREATE TABLE orders(
	id_order int auto_increment primary key,
    name_client varchar(90),
    contact_client varchar(90)
);

CREATE TABLE orderProduct(
	fk_id_product int,
    foreign key(fk_id_product) references products(id_product),
    fk_id_order int,
    foreign key(fk_id_order) references orders(id_order),
    quantity_product int,
    size_product varchar(5)
);