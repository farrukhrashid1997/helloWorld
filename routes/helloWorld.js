import express from "express";
import { helloWorld } from "../controllers/helloWorld.js";

const router = express.Router();

router.get("/hello-world", helloWorld);

export default router;
