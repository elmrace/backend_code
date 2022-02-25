import UserModel from "../models/UserModel";
import BaseService from "./BaseService";

class UserService extends BaseService {
  constructor() {
    super(UserModel);
  }
}

export default UserService;
