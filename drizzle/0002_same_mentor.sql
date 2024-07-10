CREATE TABLE IF NOT EXISTS "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"phoneNumber" text NOT NULL,
	"email" text NOT NULL,
	"shippingAddress" text NOT NULL,
	"cart" json NOT NULL,
	"subtotal" integer NOT NULL,
	"total" integer NOT NULL,
	"createdAt" timestamp DEFAULT now()
);
