import { Router } from "express";
import AuthRouter from "./auth.route.js";
import UserRouter from "./user.route.js";

const MainRouter = Router();

MainRouter.use("/auth", AuthRouter);
MainRouter.use("/user", UserRouter);

export default MainRouter;