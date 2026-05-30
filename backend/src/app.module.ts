import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { appConfig } from "./config/app.config";
import validationSchema from "./config/validation.config";

@Module({
  import: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: validationSchema
    })
  ]
})