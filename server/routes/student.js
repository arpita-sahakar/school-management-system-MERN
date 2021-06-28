import express from "express";
import {getStudents, createStudent, deleteStudent} from "../controllers/studnt.js";
import stdnt from "../models/stdnt.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/", createStudent);
router.delete("/:idNo", deleteStudent);

export default router;