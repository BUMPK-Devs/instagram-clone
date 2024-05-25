import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { getLogInRequestDto } from "../../test/support/auth";
import { BadRequestException, NotFoundException } from "@nestjs/common";

describe("AuthService", () => {
	let service: AuthService;
	let jwtService;

	beforeEach(async () => {
		jwtService = {
			sign: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{
					useValue: jwtService,
					provide: JwtService,
				},
			],
		}).compile();

		service = module.get<AuthService>(AuthService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});

	describe("login", () => {
		it("should call jwt to generate access token", () => {
			const dto = getLogInRequestDto();

			service.login(dto);

			expect(jwtService.sign).toHaveBeenCalledTimes(1);
			expect(jwtService.sign).toHaveBeenCalledWith(dto);
		});

		it("should throw error when password is not matched", () => {
			const dto = { ...getLogInRequestDto(), password: "12343" };

			expect(() => service.login(dto)).toThrow(
				new BadRequestException("Password does not matched!")
			);
		});

		it("should throw error when user not found", () => {
			const dto = { ...getLogInRequestDto(), email: "paras@gmail.com" };

			expect(() => service.login(dto)).toThrow(
				new NotFoundException("User not found!")
			);
		});
	});
});
