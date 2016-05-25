
# --- !Ups

INSERT INTO USER (
    id,
    email,
    fullname,
    password
) VALUES (
    1,
    'amino@acid.com',
    'Amino Acid',
    'pitch'
);

INSERT INTO USER (
    id,
    email,
    fullname,
    password
) VALUES (
    2,
    'elsa@frozen.com',
    'Elsa Baby',
    'pitch'
);

INSERT INTO USER (
    id,
    email,
    fullname,
    password
) VALUES (
    3,
    'sproppy@doo.com',
    'Sproppy Doo',
    'pitch'
);

INSERT INTO USER (
    id,
    email,
    fullname,
    password
) VALUES (
    4,
    'mike@jones.com',
    'Mike Jones',
    'pitch'
);


# --- !Downs

DELETE FROM USER WHERE ID=1;
DELETE FROM USER WHERE ID=2;
DELETE FROM USER WHERE ID=3;
DELETE FROM USER WHERE ID=4;