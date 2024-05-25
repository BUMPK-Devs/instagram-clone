"use client";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { FormEventHandler, useRef } from "react";

const LogInPage = () => {
	const { replace } = useRouter();
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const handleSubmitForm: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const password = passwordInputRef.current?.value;
		const email = emailInputRef.current?.value;
		console.log(password, email);
		await signIn("credentials", {
			redirect: false,
			email,
			password,
			callbackUrl: "/",
		});
	};

	return (
		<div>
			<span>Login page</span>
			<form onSubmit={handleSubmitForm}>
				<input ref={emailInputRef} type="email" placeholder="email" />
				<input
					ref={passwordInputRef}
					type="password"
					placeholder="password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LogInPage;
