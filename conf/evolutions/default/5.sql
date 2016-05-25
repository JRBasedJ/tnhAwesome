
# --- !Ups

CREATE TABLE PITCH_USERS_LU (
    id            bigint(20)    NOT NULL UNIQUE,
    pitchId       bigint(255)  NOT NULL,
    userId        bigint(255)  NOT NULL,
    userStatus    varchar(15)   NOT NULL DEFAULT 'member',
    CONSTRAINT pk_PITCH_USERS_LU PRIMARY KEY (id),
    CONSTRAINT fk_PITCH_ID FOREIGN KEY (pitchId) REFERENCES PITCH(id),
    CONSTRAINT fk_USER_ID FOREIGN KEY (userId) REFERENCES USER(id)
);

CREATE SEQUENCE PITCH_USERS_LU_seq;

# --- !Downs

DROP TABLE PITCH_USERS_LU;
DROP SEQUENCE PITCH_USERS_LU_seq;
