import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "./../prisma/prismaService";

@Injectable()
export class UserService {
	constructor(private readonly prismaService: PrismaService) {}

	getAll(): Promise<User[]> {
		return this.prismaService.user.findMany();
	}
}
