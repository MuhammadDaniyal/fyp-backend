import { Router } from "express";
import { getAllCollection } from "../controllers";
const router = Router();

/** POST METHOD */

/** GET METHOD */
router.route("/collections").get(getAllCollection); // get the user with username

/** PUT METHOD */

export default router;
