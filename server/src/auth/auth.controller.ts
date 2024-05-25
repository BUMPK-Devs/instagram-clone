import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginRequestDto } from "./dto/login-request.dto";
import { LogInResponseDto } from "./dto/login-response.dto";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("/login")
	login(@Body() requestDto: LoginRequestDto): LogInResponseDto {
		return this.authService.login(requestDto);
	}
}
