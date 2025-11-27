import express from "express";
import { body } from "express-validator";
import {
  getCustomers
} from "../controllers/customerController.js";

const router = express.Router();

router.get("/", getCustomers);


export default router;//Customer Routes