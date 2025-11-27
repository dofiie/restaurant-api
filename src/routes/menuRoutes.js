import express from "express";
import { body } from "express-validator";
import auth from "../middleware/auth.js";
import {
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenu,
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", auth,getMenu);

router.delete("/:id", deleteMenuItem);

router.post(
  "/add",
  [
    body("name").notEmpty().withMessage("Name is required!"),
    body("price").notEmpty().withMessage("Price is required!"),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price needs to be greater than 0!"),
  ],
  auth,
  addMenuItem
);

router.put(
  "/:id",
  [
    body("name").optional().notEmpty(),
    body("price").optional().isFloat({ gt: 0 }),
  ],
  updateMenuItem
);

export default router;