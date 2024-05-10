import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class UserService {
	constructor(private readonly prismaClient: PrismaClient) {}

	getAll() {
		return this.prismaClient.user.findMany();
	}
}
