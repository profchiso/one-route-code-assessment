CREATE TABLE IF NOT EXISTS public."messageBodies"
(
    id serial NOT NULL ,
    body character varying(255) COLLATE pg_catalog."default",
    "messageId" integer NOT NULL,
    timestamps integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "messageBodies_pkey" PRIMARY KEY (id),
    CONSTRAINT "messageBodies_messageId_fkey" FOREIGN KEY ("messageId")
        REFERENCES public.messages (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS public.messages
(
    id serial NOT NULL,
    recipient_type character varying(255) COLLATE pg_catalog."default",
    "to" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "from" character varying(255) COLLATE pg_catalog."default",
    type character varying(255) COLLATE pg_catalog."default",
    timestamps integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT messages_pkey PRIMARY KEY (id)
)