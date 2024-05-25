import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		maxAge: 24 * 60 * 60 * 2,
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "email" },
				password: { label: "password", type: "password" },
			},
			async authorize(credentials, req) {
				const payload = JSON.stringify({
					email: credentials?.email,
					password: credentials?.password,
				});
				try {
					const res = await fetch(
						"http://localhost:6969/auth/login",
						{
							method: "POST",
							body: payload,
							headers: {
								"Content-Type": "application/json",
							},
						}
					);
					const data = await res.json();
					return data;
				} catch (error) {
					return null;
				}
			},
		}),
	],
});

export { handler as GET, handler as POST };
