import { Controller, Get } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	getUsers(): Promise<User[]> {
		return this.userService.getAll();
	}
}
