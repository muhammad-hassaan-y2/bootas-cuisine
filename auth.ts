import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./database";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/login",
  },
  providers: [
    google({ allowDangerousEmailAccountLinking: true }),
    CredentialsProvider({
      name: "Sign in",
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        // Temporary user for testing purposes
        const tempUser = {
          email: "temp@example.com",
          password: await bcrypt.hash("tempPassword123", 10), // Temporarily hashed password
          id: "1",
          name: "Temporary User",
        };

        if (credentials.email === tempUser.email &&
          await bcrypt.compare(credentials.password, tempUser.password)) {
        return {
          id: tempUser.id,
          email: tempUser.email,
          name: tempUser.name,
          randomKey: "Hey cool",
        };
      }

        const user = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, String(credentials.email)),
        });

        if (
          !user ||
          !(await bcrypt.compare(String(credentials.password), user.password!))
        ) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedPaths = [
        "/bestselling",
        "/desi-taste",
        "/fast-food",
        "/home",
        "/sides",
        "/"
      ];
      const isProtected = protectedPaths.some((path) => nextUrl.pathname.startsWith(path));

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/login", nextUrl.origin);
        redirectUrl.searchParams.append("callbackUrl", nextUrl.href);
        return Response.redirect(redirectUrl);
      }
      return true;
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
    session(params) {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.token.id as string,
          randomKey: params.token.randomKey,
        },
      };
    },
  },
});
