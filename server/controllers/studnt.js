import studentData from "../models/stdnt.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await studentData.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {

  try {
      console.log(req.body);
    const singleStudent = await studentData.create(req.body);
    res.status(201).json(singleStudent);
  } catch (error) {
      res.status(409).json({message: error.message})
  }


};

export const deleteStudent = async(req, res) => {
  
  try {
    console.log(req.params);
    await studentData.deleteOne({_id : req.params.idNo});
    res.send("Deleted successfully...")
  } catch (error) {
    console.log(error)
  }
}
