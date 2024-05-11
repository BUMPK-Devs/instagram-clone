import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaService } from "./prismaService";
@Global()
@Module({
	providers: [PrismaService],
	exports: [PrismaService],
	imports: [ConfigModule],
})
export class PrismaModule {}
