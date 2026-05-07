import { Router } from "express";
import AuthRouter from "./auth.route.js";
import UserRouter from "./user.route.js";
import AdminRouter from './admin.route.js'
import SellerRouter from './seller.route.js'
import ProductRouter from './product.route.js'

const MainRouter = Router();

MainRouter.use("/auth", AuthRouter);
MainRouter.use("/user", UserRouter);
MainRouter.use("/admin", AdminRouter);
MainRouter.use("/product", ProductRouter);
MainRouter.use("/seller", SellerRouter);

export default MainRouter;