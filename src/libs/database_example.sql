CREATE TABLE "usuarios" (
  "id" integer PRIMARY KEY,
  "nombre" varchar,
  "apellido_pat" varchar,
  "apellido_mat" varchar,
  "run" integer,
  "usuario" varchar,
  "correo" varchar,
  "contrasena" varchar,
  "created_at" timestamp
);

CREATE TABLE "roles" (
  "id" integer PRIMARY KEY,
  "nombre" varchar,
  "created_at" timestamp
);

CREATE TABLE "roles_usuarios" (
  "id_rol" integer,
  "id_user" integer,
  "created_at" timestamp
);

CREATE TABLE "token_premio" (
  "id" varchar PRIMARY KEY,
  "descripcion" varchar,
  "profesor_creador" integer,
  "alumno_premio" integer,
  "estado" boolean DEFAULT True
);

CREATE TABLE "premio" (
  "id" integer PRIMARY KEY,
  "premio" varchar,
  "descripcion" varchar,
  "profesor_creador" integer,
  "created_at" timestamp
);

CREATE TABLE "premio_disponible" (
  "id" integer PRIMARY KEY,
  "token" varchar,
  "premio_id" integer,
  "estado" boolean DEFAULT false,
  "fecha_cobro" date DEFAULT null
);

ALTER TABLE "premio_disponible" ADD FOREIGN KEY ("premio_id") REFERENCES "premio" ("id");

ALTER TABLE "premio_disponible" ADD FOREIGN KEY ("token") REFERENCES "token_premio" ("id");

ALTER TABLE "premio" ADD FOREIGN KEY ("profesor_creador") REFERENCES "usuarios" ("id");

ALTER TABLE "token_premio" ADD FOREIGN KEY ("profesor_creador") REFERENCES "usuarios" ("id");

ALTER TABLE "token_premio" ADD FOREIGN KEY ("alumno_premio") REFERENCES "usuarios" ("id");

ALTER TABLE "roles_usuarios" ADD FOREIGN KEY ("id_user") REFERENCES "usuarios" ("id");

ALTER TABLE "roles_usuarios" ADD FOREIGN KEY ("id_rol") REFERENCES "roles" ("id");


CREATE SEQUENCE usuarios_id_seq;

ALTER TABLE usuarios ALTER COLUMN id SET DEFAULT nextval('usuarios_id_seq');

ALTER SEQUENCE usuarios_id_seq OWNED BY usuarios.id;

CREATE SEQUENCE roles_id_seq;

ALTER TABLE roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq');

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;