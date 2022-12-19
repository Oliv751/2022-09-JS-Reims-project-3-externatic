CREATE TABLE
    user (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        phone int(20) NOT NULL,
        email VARCHAR(150) NOT NULL,
        password VARCHAR (50) NOT NULL,
        role varchar(200) NOT NULL
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    user (id, phone, email, password, role)
VALUES (
        1,
        '0607446215',
        'consultant1@externatic.com',
        '12345678',
        'consultant'
    ), (
        2,
        '0754958212',
        'consultant2@externatic.com',
        '23456789',
        'consultant'
    ), (
        3,
        '0632546975',
        'steve.Johnson@example.com',
        '87654321',
        'candidate'
    ), (
        4,
        '0623157924',
        'Paula.Green@example.com',
        '98765432',
        'candidate'
    );

CREATE TABLE
    consultant (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname varchar(100) NOT NULL,
        lastname varchar(100) NOT NULL,
        user_id int(11) UNSIGNED NOT NULL,
        CONSTRAINT fk_consultant_user FOREIGN KEY (user_id) references user(id)
    ) engine = InnoDB DEFAULT charset = utf8;

INSERT INTO
    consultant (id, firstname, lastname, user_id)
VALUES (
        1,
        'John',
        'Doe',
        1
    ), (
        2,
        'Jane',
        'Smith',
        2
    );

CREATE TABLE
    category (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL
    ) engine = InnoDB DEFAULT charset = utf8;

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
        3,
        1
    ), (
        2,
        'Paula',
        'Green',
        '53 rue Vernouillet 51100 REIMS',
        'CDD',
        4,
        2
    );

CREATE TABLE
    offer (
        id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        consultant_description TEXT NOT NULL,
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
        consultant_description,
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
        "Je suis John Doe, Consultant recrutement chez Externatic, je te propose aujourd’hui de découvrir l’offre ci-dessous et d’échanger ensemble : plutôt en visio ? Ou autour d’un verre ? Je serai ravi de t'accompagner et de te présenter ce job plus en détail !",
        "Nous accompagnons un éditeur de logiciel nantais spécialisé dans les solutions SIRH. Forte d'une activité prospère, l'entreprise continue de recruter plusieurs personnes sur le socle et cherche justement à compléter ses équipes avec son futur développeur C / C++. Les besoins sont plutôt techniques mais aussi avec un métier fort.",
        "Développeur C / C++ @ Editeur H/F",
        'NANTES',
        'CDI',
        "Le poste et l'équipe :

Sous la responsabilité de Franck, responsable technique, tu auras pour objectifs d'accompagner les équipes en apportant ton aide et ton savoir technique sur des solutions très axées métiers. 
Travail en petite équipe et environnement de travail attractif, tu participeras à une belle aventure !!

Les missions :

Au sein d’un pôle de R&D sur la partie sécurité, tu auras à participer à des projets de conception et de développement autour de technos mi applicatives mi embarquées. On t'attend pour :
• Concevoir, développer et intégrer le logiciel sur les cibles matérielles
• Participer aux évolutions tant techniques que fonctionnelles
• Garantir le bon fonctionnement du produit
• Réaliser les spec's électronique embarquée du logiciel
• Anticiper les futures technos en POCant les futures technos de demain
• ...

Conditions de travail / En pratique :

    Localisation : Saint Herblain
    Proximité des grands axes de transport
    cadre idéal, société où il fait bon vivre
    Possibilité de télétravail : 2 à 3 jours

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
Pour la partie métier : une simple envie suffit mais si par bonheur tu as déjà été confronté à un env d'éditions de logiciels, cela devrait t'aider

Tu es arrivé jusqu'ici, c'est que le poste est fait pour toi, à toi de postuler !",
        '20221213',
        1
    ), (
        2,
        "Je suis Jane Smith, consultante en recrutement au sein d'Externatic, je vous propose aujourd’hui de découvrir l’offre ci-dessous et d’échanger ensemble : plutôt en visio ? Ou autour d’un verre ? Je serai ravie de vous accompagner et de vous présenter ce job plus en détail !",
        "Mon client est un grand groupe Nantais spécialisé dans l’infogérance et l’édition de logiciels de renommés. Il existe depuis de 50 ans ! Pour fêter cet événement, ils ont pour objectif de doubler le chiffre d’affaires en doublant l'effectif.

    Typologie de marchés : santé, retail, transports, habitat, …
    Environ 700 collaborateurs
    Convention Syntec
    Avantages : prime de participation et d’intéressement, primes exceptionnelles, CE ultra dynamique, mutuelle à 70",
        "Ingénieur Infrastructures DBA (H/F) – Nantes Nord Est – @Infogérance",
        'Nantes',
        'CDD',
        "Les missions

Au sein de l'équipe Linux / DBA de la direction Infogérance. Cette équipe de 13 personnes (Administrateurs, Ingénieurs infrastructure et Administrateurs Bases de données) a la charge de réaliser les projets clients (externalisation de SI, hébergement, transformation de SI).

Vous réaliserez les missions suivantes :

    participer à la conception et à la réalisation de projets orientés autour des thématiques de bases de données
    prise en compte des tickets escaladés par le N1 / N2
    participer activement au maintien en conditions opérationnelles des plateformes de Bases de données
    être force de proposition pour l'évolution de nos infrastructures de référence

L'environnement technologique est à la pointe :AWS, Linux/Unix, Ansible, Shell, Python, PostgreSQL

Conditions de travail

    Locaux : Nantes Nord Est
    Une flexibilité horaire & un télétravail ancré dans la culture d'entreprise (2j par semaine en moyenne).

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
        '20221219',
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
    ) engine = InnoDB DEFAULT charset = utf8;

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
    ) engine = InnoDB DEFAULT charset = utf8;