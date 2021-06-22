import express from "express";
import {getStudents, createStudent} from "../controllers/studnt.js";
import stdnt from "../models/stdnt.js"

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);

export default router;