Drop table if exists movies cascade;

Create Table movies (
  id SERIAL NOT NULL,
  genre VARCHAR(50) NOT NULL,
  title VARCHAR(250) NOT NULL,
  thumbnail VARCHAR(300) NOT NULL,
  year INT NOT NULL,
  synopsis VARCHAR(700) NOT NULL,
  duration INT NOT NULL,
  PRIMARY KEY (id)
);

Drop table if exists users cascade;

Create Table users (
  id SERIAL NOT NULL,
  username VARCHAR(200) NOT NULL UNIQUE,
  PRIMARY KEY (id)
);

Drop table if exists favorites;

Create Table favorites (
  fav_id SERIAL NOT NULL,
  user_id INT NOT NULL,
  movies_id INT NOT NULL,
  PRIMARY KEY (fav_id)
);

ALTER TABLE favorites ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE favorites ADD FOREIGN KEY (movies_id) REFERENCES movies (id);

COPY movies(genre, title, thumbnail, year, synopsis, duration)
FROM '/Users/kesang/Desktop/HackReactor/mvp/movies.csv'
DELIMITER ','
CSV HEADER;
