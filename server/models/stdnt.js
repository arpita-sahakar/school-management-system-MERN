import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo : Number,
    studentName : String,
    grade : String,
    section : {
        type : String,
        default : "A"
    },

});

const Stu = mongoose.model("stu", studentSchema);

export default Stu;