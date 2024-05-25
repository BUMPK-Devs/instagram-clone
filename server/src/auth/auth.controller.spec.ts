import { Test, TestingModule } from "@nestjs/testing";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LogInResponseDto } from "./dto/login-response.dto";
import { getLogInRequestDto } from "../../test/support/auth";

describe("AuthController", () => {
	let controller: AuthController;
	let authService;

	beforeEach(async () => {
		authService = {
			login: jest.fn(),
		};
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthController],
			providers: [
				{
					provide: AuthService,
					useValue: authService,
				},
			],
		}).compile();

		controller = module.get<AuthController>(AuthController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});

	describe("login()", () => {
		it("should call auth service to login", () => {
			const requestDto = getLogInRequestDto();

			controller.login(requestDto);

			expect(authService.login).toHaveBeenCalledTimes(1);
			expect(authService.login).toHaveBeenCalledWith(requestDto);
		});

		it("should return accessToken", () => {
			const requestDto = getLogInRequestDto();
			const accessToken = "accessToken";
			(authService.login as jest.Mock).mockReturnValueOnce({
				accessToken,
			});

			const result: LogInResponseDto = controller.login(requestDto);

			expect(result).toStrictEqual({ accessToken });
		});
	});
});
