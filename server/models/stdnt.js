import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    registrationNum : Number,
    name : String,
    grade : String,
    section : {
        type : String,
        default : "A"
    },
    subjects : [String]
});

const Stu = mongoose.model("stu", studentSchema);

export default Stu;