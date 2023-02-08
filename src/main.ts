import { App } from "./app"
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";

const bootstrap = async () => {
  const logger = new LoggerService();
  const app = new App(
    logger,
    new UserController(logger)
    );
  app.init();
}

bootstrap();