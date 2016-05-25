
# --- !Ups

CREATE TABLE PITCH (
    id          bigint(20)    NOT NULL UNIQUE,
    name       varchar(255)  NOT NULL UNIQUE,
    description    varchar(255)  NOT NULL,
    CONSTRAINT pk_PITCH PRIMARY KEY (id)
);

CREATE SEQUENCE PITCH_seq;

# --- !Downs

DROP TABLE PITCH;
DROP SEQUENCE PITCH_seq;
