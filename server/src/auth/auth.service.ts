import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginRequestDto } from "./dto/login-request.dto";
import { LogInResponseDto } from "./dto/login-response.dto";

@Injectable()
export class AuthService {
	constructor(private readonly jwtService: JwtService) {}

	login(dto: LoginRequestDto): LogInResponseDto {
		const { password, email } = dto;

		if (!email || email !== "john@wick.com") {
			throw new NotFoundException("User not found!");
		}

		if (!password || password !== "123") {
			throw new BadRequestException("Password does not matched!");
		}

		return {
			accessToken: this.jwtService.sign(dto),
		};
	}
}
