import  express  from "express";
import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create
router.post("/",verifyAdmin,createHotel);
//update
router.put("/:id",verifyAdmin, updateHotel)
//delete
router.delete("/:id",verifyAdmin, deleteHotel)
//get
router.get("/:id", getHotel)
//getall
router.get("/", getallHotel)

export default router