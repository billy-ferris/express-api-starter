import express from "express";
import exampleRoute from "./example-route";

const router = express.Router();

router.use("/example", exampleRoute);

export = router;
