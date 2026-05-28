import { Router } from "express";
import { addProduct, getProducts,sellerDashboard } from "../controllers/seller.controller.js";

const SellerRouter = Router();

SellerRouter.post("/add-product", addProduct);
SellerRouter.get("/get-products", getProducts);
SellerRouter.get("/dashboard", sellerDashboard);

export default SellerRouter;