import { Router } from "express";
import { getCartProduct, addToCart, Profile, UpdateProfile, DeleteProfile, placeOrder, getOrders, applyCoupon } from "../controllers/user.controller.js";

const UserRouter = Router();

UserRouter.post("/profile", Profile);
UserRouter.post("/add-to-cart", addToCart);
UserRouter.get("/get-cart-products", getCartProduct);
UserRouter.post("/place-orders", placeOrder);
UserRouter.get("/get-orders",getOrders)
UserRouter.patch("/update-profile/:userId", UpdateProfile);
UserRouter.delete("/delete-profile/:userId", DeleteProfile);
UserRouter.post("/apply-coupon", applyCoupon)

export default UserRouter;