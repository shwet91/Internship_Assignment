import { Router } from "express";
import { 
    getUserDetails,
    getUserPaymentHistory,
 
} from "../controllers/user.controller.js";


const router = Router()


router.route("/getUserDetails").post( getUserDetails)
router.route("/getUserPaymentHistory").post(getUserPaymentHistory)

export default router