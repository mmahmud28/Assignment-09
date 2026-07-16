import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.DB_URI);
const db = client.db("my-tutor");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }
  },

  session: {
    cookiesCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 60 * 60 * 24 * 10, // 7 days
    }
  },

  plugins: [
    jwt(),
  ]
});