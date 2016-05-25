
# --- !Ups

/* Pitch id=1 */

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId,
    userStatus
) VALUES (
    1,
    1,
    1,
    'lead'
);

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId
) VALUES (
    2,
    1,
    2
);

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId
) VALUES (
    3,
    1,
    3
);



/* Pitch id=2 */

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId
) VALUES (
    4,
    2,
    1
);

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId
) VALUES (
    5,
    2,
    3
);

INSERT INTO PITCH_USERS_LU (
    id,
    pitchId,
    userId,
    userStatus
) VALUES (
    6,
    2,
    4,
    'lead'
);

# --- !Downs

DELETE FROM PITCH_USERS_LU WHERE ID=1;
DELETE FROM PITCH_USERS_LU WHERE ID=2;
DELETE FROM PITCH_USERS_LU WHERE ID=3;
DELETE FROM PITCH_USERS_LU WHERE ID=4;
DELETE FROM PITCH_USERS_LU WHERE ID=5;
DELETE FROM PITCH_USERS_LU WHERE ID=6;
