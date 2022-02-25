import BaseController from "./BaseController";
import UserService from "../services/UserService";

class UserController extends BaseController {
  constructor(userService: UserService) {
    super(userService);
  }
}

export default new UserController(new UserService());
