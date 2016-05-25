
# --- !Ups

INSERT INTO PITCH (
    id,
    name,
    description
) VALUES (
    1,
    'We Pitchin - Pitch #1',
    'If a nice pitch could pitch people, how many people could a nice pitch pitch?'
);

INSERT INTO PITCH (
    id,
    name,
    description
) VALUES (
    2,
    'This is My Side Pitch - #2',
    'Twinkle twinkle little pitch, how I wonder what you itch.'
);


# --- !Downs

DELETE FROM PITCH WHERE ID=1;
DELETE FROM PITCH WHERE ID=2;
