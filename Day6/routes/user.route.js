import { Router } from "express";
import { getCartProduct,addToCart, Orders, Profile, UpdateProfile, DeleteProfile } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post("/profile", Profile);
UserRouter.post("/add-to-cart", addToCart);
UserRouter.get("/get-cart-products", getCartProduct);
UserRouter.post("/orders", Orders);
UserRouter.patch("/update-profile/:userId", UpdateProfile);
UserRouter.delete("/delete-profile/:userId", DeleteProfile);

export default UserRouter;