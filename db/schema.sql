DROP DATABASE IF EXISTS recipeme_db;
CREATE DATABASE recipeme_db;


create table recipes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    description text,
    image_url varchar (200),
    recipe_url varchar(300)
    );
    
    create table ingredients (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar (30) not null,
    type_id INT NOT NULL
    );
    
    
    create table ingredient_recipe (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     recipe_id int,
     FOREIGN KEY (recipe_id)
     REFERENCES recipes(id)
     ON DELETE CASCADE,
     ingredient_id int,
     FOREIGN KEY (ingredient_id)
     REFERENCES ingredients(id)
	ON DELETE cascade )

        create table favorite_recipe (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     recipe_id int,
     FOREIGN KEY (recipe_id)
     REFERENCES recipes(id)
     ON DELETE CASCADE,
     user_id int,
     FOREIGN KEY (user_id)
     REFERENCES user(id)
	ON DELETE cascade )
     