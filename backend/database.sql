CREATE TABLE offer (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  offer_name varchar(100) NOT NULL,
  location varchar(200) NOT NULL,
  contract varchar(200) NOT NULL,
  publication_date date
)
  engine=InnoDB DEFAULT charset=latin1;


INSERT INTO offer (offer_name, location, contract, publication_date) VALUES
('lorem ipsum 1', 'lorem ipsum 1', 'lorem ipsum 1', '20221206'),
('lorem ipsum 2', 'lorem ipsum 2', 'lorem ipsum 2', '20221206');

CREATE TABLE company (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  company_name varchar(100) NOT NULL,
  logo varchar(205) NOTT NULL
)
  engine=InnoDB DEFAULT charset=latin1;


INSERT INTO company (company_name, logo) VALUES
('lorem ipsum 1', 'lorem ipsum 1'),
('lorem ipsum 2', 'lorem ipsum 2');