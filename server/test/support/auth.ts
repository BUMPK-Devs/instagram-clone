import { LoginRequestDto } from "src/auth/dto/login-request.dto";

export const getLogInRequestDto = (): LoginRequestDto => {
	return {
		email: "john@wick.com",
		password: "123",
	};
};
