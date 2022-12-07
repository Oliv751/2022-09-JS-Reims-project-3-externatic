CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  address varchar(300) NOT NULL,
  phone int(20) NOT NULL,
  email VARCHAR(150) NOT NULL,
  password VARCHAR (50) NOT NULL,
  role varchar(200) NOT NULL
)
  engine=InnoDB DEFAULT charset=latin1;

INSERT INTO user (address, phone, email, password, role) VALUES
('lorem ipsum 1', '0606060606', 'lorem ipsum 1', 'lorem ipsum 1', 'lorem ipsum 1'),
('lorem ipsum 2', '0606060606', 'lorem ipsum 2', 'lorem ipsum 2', 'lorem ipsum 2');


CREATE TABLE company (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  company_name varchar(100) NOT NULL,
  logo varchar(250) NOT NULL,
  user_id int(11) UNSIGNED,
  CONSTRAINT fk_company_user FOREIGN KEY (user_id) references user(id)
)
  engine=InnoDB DEFAULT charset=latin1;

INSERT INTO company (company_name, logo) VALUES
('lorem ipsum 1', 'lorem ipsum 1'),
('lorem ipsum 2', 'lorem ipsum 2');


CREATE TABLE candidate (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(100) NOT NULL,
  lastname varchar(100) NOT NULL,
  contract varchar(200) NOT NULL,
  user_id int(11) UNSIGNED,
  CONSTRAINT fk_candidate_user FOREIGN KEY (user_id) references user(id)
)
  engine=InnoDB DEFAULT charset=latin1;

INSERT INTO candidate (firstname, lastname, contract) VALUES
('lorem ipsum 1', 'lorem ipsum 1', 'lorem ipsum 1'),
('lorem ipsum 2', 'lorem ipsum 2', 'lorem ipsum 2');


CREATE TABLE offer (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  offer_name varchar(100) NOT NULL,
  location varchar(200) NOT NULL,
  contract varchar(200) NOT NULL,
  publication_date date,
  company_id int(11) UNSIGNED,
  CONSTRAINT fk_offer_company FOREIGN KEY (company_id) references company(id)
)
  engine=InnoDB DEFAULT charset=latin1;

INSERT INTO offer (offer_name, location, contract, publication_date) VALUES
('lorem ipsum 1', 'lorem ipsum 1', 'lorem ipsum 1', '20221206'),
('lorem ipsum 2', 'lorem ipsum 2', 'lorem ipsum 2', '20221206');


CREATE TABLE document (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  document_type varchar(100) NOT NULL,
  date date NOT NULL,
  document varchar(300) NOT NULL,
  candidate_id int(11) UNSIGNED,
  CONSTRAINT fk_document_candidate FOREIGN KEY (candidate_id) REFERENCES candidate(id)
)
  engine=InnoDB DEFAULT charset=latin1;

INSERT INTO document (document_type, date, document) VALUES
('lorem ipsum 1', '20221206', 'lorem ipsum 1'),
('lorem ipsum 2', '20221206', 'lorem ipsum 2');

CREATE TABLE offer_candidate (
  offer_id int(11) UNSIGNED,
  CONSTRAINT fk_candidate_offer FOREIGN KEY (offer_id) references offer(id),
  candidate_id int(11) UNSIGNED,
  CONSTRAINT fk_offer_candidate FOREIGN KEY (candidate_id) references candidate(id)
)
  engine=InnoDB DEFAULT charset=latin1;

  CREATE TABLE company_document (
  company_id int(11) UNSIGNED,
  CONSTRAINT fk_document_company FOREIGN KEY (company_id) references company(id),
  document_id int(11) UNSIGNED,
  CONSTRAINT fk_company_document FOREIGN KEY (document_id) references document(id)
)
  engine=InnoDB DEFAULT charset=latin1;
