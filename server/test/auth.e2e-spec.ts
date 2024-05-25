import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";
import { getLogInRequestDto } from "./support/auth";

describe("AuthController (e2e)", () => {
	let app: INestApplication;
	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();
		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it("/auth/login (POST)", () => {
		return request(app.getHttpServer())
			.post("/auth/login")
			.send(getLogInRequestDto())
			.expect(201)
			.expect({
				accessToken: expect.any(String),
			});
	});
});
