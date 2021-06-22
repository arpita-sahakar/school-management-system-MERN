
export const getStudents = async (req, res) => {
  try {
    const allStudents = await Stu.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {

  try {
    const singleStudent = await Stu.create(req.body);
    res.status(201).json(singleStudent);
  } catch (error) {
      res.status(409).json({message: error.message})
  }


};
