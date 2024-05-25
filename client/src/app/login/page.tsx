import React from "react";

const LogInPage = () => {
	return (
		<div>
			<span>Login page</span>

			<form>
				<input type="email" placeholder="email" />
				<input type="password" placeholder="password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LogInPage;
