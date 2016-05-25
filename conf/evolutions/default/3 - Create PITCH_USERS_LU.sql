
# --- !Ups

CREATE TABLE PITCH_USERS_LU (
    id            bigint(20)    NOT NULL UNIQUE,
    pitchId       bigint(255)  NOT NULL,
    userId        bigint(255)  NOT NULL,
    userStatus    varchar(15)   NOT NULL DEFAULT 'member',
    CONSTRAINT pk_PITCH_USERS_LU PRIMARY KEY (id)
);

CREATE SEQUENCE PITCH_seq;

# --- !Downs

DROP TABLE PITCH_USERS_LU;
DROP SEQUENCE PITCH_USERS_LU_seq;
