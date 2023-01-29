CREATE TABLE
    user (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        phone VARCHAR(20) NOT NULL,
        email VARCHAR(150) NOT NULL UNIQUE,
        password VARCHAR (255) NOT NULL,
        role varchar(200) NOT NULL
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    user (id, phone, email, password, role)
VALUES (
        1,
        '0607446215',
        'externatic.consultant@gmail.com',
        '$argon2id$v=19$m=65536,t=5,p=1$GtxtHcddU56yS/qwiNJPLA$lXWIVeBIDCZ8Ng18sQGGwCvghiAvlkGoREzcunVzE/Q',
        'consultant'
    ),
    (
        2,
        '0607446215',
        'externatic.candidat@gmail.com',
        '$argon2id$v=19$m=65536,t=5,p=1$auOdUljcApHs58i8OlWhuQ$gYHM8GCMrfTuaQNo8sCG/BdIxtXQLXGVh8P3VyrAxq4',
        'candidate'
    );

CREATE TABLE
    consultant (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        consultant_description TEXT NULL,
        user_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_consultant_user FOREIGN KEY (user_id) references user(id)
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    consultant (
        id,
        firstname,
        lastname,
        consultant_description,
        user_id
    )
VALUES (
        1,
        'John',
        'Doe',
        "Je suis John Doe, Consultant recrutement chez Externatic, je te propose aujourd’hui de découvrir l’offre ci-dessous et d’échanger ensemble : plutôt en visio ? Ou autour d’un verre ? Je serai ravi de t'accompagner et de te présenter ce job plus en détail !",
        1
    );

CREATE TABLE
    category (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO category (id, name)
VALUES (1, 'C/C++'), (2, 'Infrastructure / Cloud'), (3, '.Net / C#'), (4, 'Autres technologies'), (5, 'Data / Big Data / Datascience'), (6, 'DevOps'), (7, 'Emplois Business & Marketing'), (8, 'Externatic (interne)'), (9, 'Industrie'), (10, 'Informatique industrielle / Scientifique / R&D'), (11, 'Java'), (12, 'JS'), (13, 'Management / Gestion de projet'), (14, 'Mobile'), (15, 'PHP'), (16, 'PO / PPO / AMOA / Fonctionnel'), (17, 'Python / GO / Ruby'), (18, 'QA / Test'), (19, 'UX UI / Intégration Web'), (20, 'WebMarketing');

CREATE TABLE
    experience (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        job_name VARCHAR(255) NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        experience_description TEXT NOT NULL,
        startDate DATE NOT NULL,
        endDate DATE NOT NULL,
        category_id int(11) UNSIGNED NOT NULL,
        candidate_id int(11) UNSIGNED NOT NULL
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    experience (
        id,
        job_name,
        company_name,
        experience_description,
        startDate,
        endDate,
        category_id,
        candidate_id
    )
VALUES (
        1,
        'Développeur',
        'Wild code school',
        "Je suis actuellement en formation intensive pour le métier de développeur web dans laquelle j 'apprends des languages de programmation",
        "2022-09-12 09:00:00",
        "2023-01-18 11:00:00",
        1,
        1
    ), (
        2,
        'Serveur',
        'Lalambic',
        "J'ai travaillé en tant que serveur au bar Lalambic pendant une durée d' environ 3 ans, j'y ai apprécié les relations clients et cela m' a permis d 'améliorer mes relations avec les gens",
        "2018-01-01 00:00:01",
        "2021-07-18 18:50:32",
        2,
        2
    );

CREATE TABLE
    candidate (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        address TEXT DEFAULT NULL,
        contract varchar(200) DEFAULT NULL,
        user_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_candidate_user FOREIGN KEY (user_id) references user(id),
        category_id int(11) UNSIGNED DEFAULT NULL,
        CONSTRAINT fk_candidate_category FOREIGN KEY (category_id) references category(id)
    ) engine = InnoDB DEFAULT charset = utf8;

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
        'Steve',
        'Johnson',
        '6 rue de Saint Brice 51100 REIMS',
        'CDI',
        2,
        1
    );

CREATE TABLE
    offer (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        company_description TEXT NOT NULL,
        offer_name varchar(100) NOT NULL,
        location varchar(200) NOT NULL,
        contract varchar(200) NOT NULL,
        offer_description TEXT NOT NULL,
        publication_date date,
        consultant_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_offer_consultant FOREIGN KEY (consultant_id) references consultant(id)
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    offer (
        id,
        company_description,
        offer_name,
        location,
        contract,
        offer_description,
        publication_date,
        consultant_id
    )
VALUES (
        1,
        "Nous accompagnons un éditeur de logiciel nantais spécialisé dans les solutions SIRH. Forte d'une activité prospère, l'entreprise continue de recruter plusieurs personnes sur le socle et cherche justement à compléter ses équipes avec son futur développeur C / C++. Les besoins sont plutôt techniques mais aussi avec un métier fort.",
        "Développeur C / C++",
        'NANTES',
        'cdi',
        "Le poste et l'équipe :

Sous la responsabilité de Franck, responsable technique, tu auras pour objectifs d'accompagner les équipes en apportant ton aide et ton savoir technique sur des solutions très axées métiers.
Travail en petite équipe et environnement de travail attractif, tu participeras à une belle aventure !!

Ce que vous allez y gagner / Pourquoi postuler ?

    Employabilité
    Expertise développée
    Career Path / évolution salariale
    Formation
    Salaire cible : 40 000 - 45 000 € selon xp.

Process de recrutement :

    Traitement de la candidature et échange avec moi
    Entretien Elodie côté RH
    Entretien avec un des responsables de pole
    Finalisation avec le resp des études

Le profil que nous recherchons

Ce que tu apportes :

Dans l'idéal de formation informatique, tu justifies d'une expérience significative chez un éditeur, un intégrateur de logiciel ou d'une solide expérience dans le déploiement de solutions informatiques.
Pour la partie technique : des compétences sur C ou C++ (les 2 env existent). On peut aussi parler de possibles connaissances autour des SGBD, WebServices ou protocoles de communication sécurisés, mais ne poussons pas.
Pour la partie métier : une simple envie suffit mais si par bonheur tu as déjà été confronté à un env d'éditions de logiciels, cela devrait t'aider.

Tu es arrivé jusqu'ici, c'est que le poste est fait pour toi, à toi de postuler !",
        "2013-04-02 12:45:34",
        1
    ),
    (
        2,
        "Mon client est un grand groupe Nantais spécialisé dans l’infogérance et l’édition de logiciels de renommés. Il existe depuis de 50 ans ! Pour fêter cet événement, ils ont pour objectif de doubler le chiffre d’affaires en doublant l'effectif.

    Typologie de marchés : santé, retail, transports, habitat, …
    Environ 700 collaborateurs
    Convention Syntec
    Avantages : prime de participation et d’intéressement, primes exceptionnelles, CE ultra dynamique, mutuelle à 70",
        "Ingénieur Infra DBA",
        'NANTES',
        'cdd',
        "Les missions

Au sein de l'équipe Linux / DBA de la direction Infogérance. Cette équipe de 13 personnes (Administrateurs, Ingénieurs infrastructure et Administrateurs Bases de données) a la charge de réaliser les projets clients (externalisation de SI, hébergement, transformation de SI).

Ce que vous allez y gagner

    Un beau package (Salaire en fonction de l'expérience + primes annuelles, intéressement et prime vacance)
    De nombreux évènements organisés par le CE de l'entreprise. (voyages, challenges techs, soirées ...)
    Des locaux équipés de douches pour les sportifs, et même un potager avec des fruits & légumes frais le midi pour les gourmands ! 
    Petit plus, l'année dernière 20% des postes ont connu des évolutions en interne.

Le profil que nous recherchons

Ce que vous apportez

Ingénieur infrastructure confirmé et autonome sur l'environnement Linux, vous :

    Êtes familier avec les bases de données : PostgreSQL / MySQL/ MariaDB / Oracle.
    Avez des notions sur les environnements Clouds Privés & Publics (AWS / Azure).
    Maitrisez les bases en administration Unix / Linux (CentOS, RedHat, OracleLinux, Debian).
    Conaissez des outils d'industrialisation (Ansible) et des langages de scripting (Shell, Python). (Un plus)
    Êtes curieux et souhaitez consolider vos compétences sur les technos évoquées",
        "2013-09-02 09:08:47",
        1
    ),
    (
        3,
        "Mon client est un grand groupe Nantais spécialisé dans l’infogérance et l’édition de logiciels de renommés. Il existe depuis de 50 ans ! Pour fêter cet événement, ils ont pour objectif de doubler le chiffre d’affaires en doublant l'effectif.

    Typologie de marchés : santé, retail, transports, habitat, …
    Environ 700 collaborateurs
    Convention Syntec
    Avantages : prime de participation et d’intéressement, primes exceptionnelles, CE ultra dynamique, mutuelle à 70",
        "Développeur Web junior",
        'REIMS',
        'stage',
        "Les missions

Au sein de l'équipe Linux / DBA de la direction Infogérance. Cette équipe de 13 personnes (Administrateurs, Ingénieurs infrastructure et Administrateurs Bases de données) a la charge de réaliser les projets clients (externalisation de SI, hébergement, transformation de SI).

Ce que vous allez y gagner

    Un beau package (Salaire en fonction de l'expérience + primes annuelles, intéressement et prime vacance)
    De nombreux évènements organisés par le CE de l'entreprise. (voyages, challenges techs, soirées ...)
    Des locaux équipés de douches pour les sportifs, et même un potager avec des fruits & légumes frais le midi pour les gourmands ! 
    Petit plus, l'année dernière 20% des postes ont connu des évolutions en interne.

Le profil que nous recherchons

Ce que vous apportez

Ingénieur infrastructure confirmé et autonome sur l'environnement Linux, vous :

    Êtes familier avec les bases de données : PostgreSQL / MySQL/ MariaDB / Oracle.
    Avez des notions sur les environnements Clouds Privés & Publics (AWS / Azure).
    Maitrisez les bases en administration Unix / Linux (CentOS, RedHat, OracleLinux, Debian).
    Conaissez des outils d'industrialisation (Ansible) et des langages de scripting (Shell, Python). (Un plus)
    Êtes curieux et souhaitez consolider vos compétences sur les technos évoquées",
        "2023-01-26 11:35:47",
        1
    ),
    (
        4,
        "Mon client est un grand groupe Nantais spécialisé dans l’infogérance et l’édition de logiciels de renommés. Il existe depuis de 50 ans ! Pour fêter cet événement, ils ont pour objectif de doubler le chiffre d’affaires en doublant l'effectif.

    Typologie de marchés : santé, retail, transports, habitat, …
    Environ 700 collaborateurs
    Convention Syntec
    Avantages : prime de participation et d’intéressement, primes exceptionnelles, CE ultra dynamique, mutuelle à 70",
        "Développeur Web",
        'RENNES',
        'alternance',
        "Les missions

Au sein de l'équipe Linux / DBA de la direction Infogérance. Cette équipe de 13 personnes (Administrateurs, Ingénieurs infrastructure et Administrateurs Bases de données) a la charge de réaliser les projets clients (externalisation de SI, hébergement, transformation de SI).

Ce que vous allez y gagner

    Un beau package (Salaire en fonction de l'expérience + primes annuelles, intéressement et prime vacance)
    De nombreux évènements organisés par le CE de l'entreprise. (voyages, challenges techs, soirées ...)
    Des locaux équipés de douches pour les sportifs, et même un potager avec des fruits & légumes frais le midi pour les gourmands ! 
    Petit plus, l'année dernière 20% des postes ont connu des évolutions en interne.

Le profil que nous recherchons

Ce que vous apportez

Ingénieur infrastructure confirmé et autonome sur l'environnement Linux, vous :

    Êtes familier avec les bases de données : PostgreSQL / MySQL/ MariaDB / Oracle.
    Avez des notions sur les environnements Clouds Privés & Publics (AWS / Azure).
    Maitrisez les bases en administration Unix / Linux (CentOS, RedHat, OracleLinux, Debian).
    Conaissez des outils d'industrialisation (Ansible) et des langages de scripting (Shell, Python). (Un plus)
    Êtes curieux et souhaitez consolider vos compétences sur les technos évoquées",
        "2023-01-26 11:39:25",
        1
    );

