import { Router } from "express";
import { Cart, Orders, Profile, UpdateProfile, DeleteProfile } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post("/profile", Profile);
UserRouter.post("/cart", Cart);
UserRouter.post("/orders", Orders);
UserRouter.patch("/update-profile/:userId", UpdateProfile);
UserRouter.delete("/delete-profile/:userId", DeleteProfile);

export default UserRouter;