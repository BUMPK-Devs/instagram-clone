import { Test, TestingModule } from "@nestjs/testing";
import { User } from "@prisma/client";
import { PrismaService } from "./../prisma/prismaService";
import { UserService } from "./user.service";

describe("UserService", () => {
	let service: UserService;
	let prismaService: PrismaService;
	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{
					provide: PrismaService,
					useFactory: () => {
						return {
							user: {
								findMany: jest.fn(),
							},
						};
					},
				},
			],
		}).compile();

		service = module.get<UserService>(UserService);
		prismaService = module.get<PrismaService>(PrismaService);
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});

	it("should call prisma service to get all users", async () => {
		const users: User[] = [
			{
				name: "paras",
				email: "paras@bumpk.co",
				id: 1,
			},
			{
				name: "umang",
				email: "umang@bumpk.co",
				id: 2,
			},
		];

		jest.spyOn(prismaService.user, "findMany").mockResolvedValue(users);

		const response = await service.getAll();
		expect(prismaService.user.findMany).toHaveBeenCalledTimes(1);
		expect(response).toHaveLength(2);
	});
});
