CREATE TABLE
    user (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        phone int(20) NOT NULL,
        email VARCHAR(150) NOT NULL,
        password VARCHAR (50) NOT NULL,
        role varchar(200) NOT NULL
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO
    user (id, phone, email, password, role)
VALUES (
        1,
        '0606060606',
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1'
    ), (
        2,
        '0606060606',
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2'
    ), (
        3,
        '0606060606',
        'lorem ipsum 3',
        'lorem ipsum 3',
        'lorem ipsum 3'
    ), (
        4,
        '0606060606',
        'lorem ipsum 4',
        'lorem ipsum 4',
        'lorem ipsum 4'
    );

CREATE TABLE
    consultant (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        user_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_consultant_user FOREIGN KEY (user_id) references user(id)
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO
    consultant (id, firstname, lastname, user_id)
VALUES (
        1,
        'lorem ipsum 1',
        'lorem ipsum 1',
        1
    ), (
        2,
        'lorem ipsum 2',
        'lorem ipsum 2',
        2
    );

CREATE TABLE
    category (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO category (id, name)
VALUES (1, 'C/C++'), (2, 'Infrastructure / Cloud');

CREATE TABLE
    candidate (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        address TEXT DEFAULT NULL,
        contract varchar(200) DEFAULT NULL,
        user_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_candidate_user FOREIGN KEY (user_id) references user(id),
        category_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_candidate_category FOREIGN KEY (category_id) references category(id)
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO
    candidate (
        id,
        firstname,
        lastname,
        address,
        contract,
        user_id,
        category_id
    )
VALUES (
        1,
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        3,
        1
    ), (
        2,
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        4,
        2
    );

CREATE TABLE
    offer (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        company_name varchar(200),
        logo varchar(300) NULL,
        offer_name varchar(100) NOT NULL,
        location varchar(200) NOT NULL,
        contract varchar(200) NOT NULL,
        offer_description TEXT NOT NULL,
        publication_date date,
        consultant_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_offer_consultant FOREIGN KEY (consultant_id) references consultant(id)
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO
    offer (
        id,
        company_name,
        logo,
        offer_name,
        location,
        contract,
        offer_description,
        publication_date,
        consultant_id
    )
VALUES (
        1,
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        'lorem ipsum 1',
        '20221206',
        1
    ), (
        2,
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        'lorem ipsum 2',
        '20221206',
        2
    );

CREATE TABLE
    document (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        document_type varchar(100) NOT NULL,
        date date NOT NULL,
        document varchar(300) NOT NULL,
        candidate_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_document_candidate FOREIGN KEY (candidate_id) REFERENCES candidate(id)
    ) engine = InnoDB DEFAULT charset = latin1;

INSERT INTO
    document (
        id,
        document_type,
        date,
        document,
        candidate_id
    )
VALUES (
        1,
        'lorem ipsum 1',
        '20221206',
        'lorem ipsum 1',
        1
    ), (
        2,
        'lorem ipsum 2',
        '20221206',
        'lorem ipsum 2',
        2
    );

CREATE TABLE
    offer_candidate (
        offer_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_candidate_offer FOREIGN KEY (offer_id) references offer(id),
        candidate_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_offer_candidate FOREIGN KEY (candidate_id) references candidate(id)
    ) engine = InnoDB DEFAULT charset = latin1;