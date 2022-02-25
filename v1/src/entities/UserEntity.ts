import BaseEntity from "./BaseEntity";

export default interface User extends BaseEntity {
  name: String;
  email: String;
  password: String;
  gsm: String;
  user_type: String;
}
