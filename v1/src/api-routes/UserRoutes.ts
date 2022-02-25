import { Router } from "express";
import UserController from "../controllers/UserController";
import Validate from "../middlewares/Validation";
import Validations from "../validations/UserValidation";

const router = Router();

router.route("/").get(UserController.index);
router.route("/:id").get(UserController.show);
router.route("/").post(Validate(Validations.createValidation), UserController.store);
router.route("/:id").put(UserController.update);
router.route("/:id").delete(UserController.destroy);

export default router;
