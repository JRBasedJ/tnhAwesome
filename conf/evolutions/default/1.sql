
# --- !Ups

CREATE TABLE USER (
    id          bigint(20)    NOT NULL UNIQUE,
    email       varchar(255)  NOT NULL UNIQUE,
    fullname    varchar(255)  NOT NULL,
    password    varchar(255)  NOT NULL,
    CONSTRAINT pk_USER PRIMARY KEY (id)
);

CREATE SEQUENCE USER_seq;

# --- !Downs

DROP TABLE USER;
DROP SEQUENCE USER_seq;
