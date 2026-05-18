import { Router } from "express";
import { UserRepository } from "./userRepository";
import { UserService } from "./userService";
import { getUserById, listUsers } from "./userController";

const repository = new UserRepository();
const service = new UserService(repository);

const router = Router();

router.get("/", listUsers(service));
router.get("/:id", getUserById(service));

export default router;