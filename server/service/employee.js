const Employee = require('../models/employee')

exports.list = async (req, res, next) => {
  await Employee.find()
    .then((employee) => {
      res.send(employee)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Employees.'
      })
    })
}
exports.findOne = async (req, res, next) => {
  console.log(req.params.id)
  await Employee.findById(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      res.send(employee)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      return res.status(500).send({
        message: 'Error retrieving Employee with id ' + req.params.id
      })
    })
}

exports.create = async (req, res, next) => {
  // Create a Employee
  const employee = new Employee(req.body)
  console.log(req.body)
  // Save Employee in the database
  await employee
    .save()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the Employee.'
      })
    })
}
exports.update = async (req, res, next) => {
  // Validate Request
  if (!req.body.content) {
    return res.status(400).send({
      message: 'Employee content can not be empty'
    })
  }

  // Find Employee and update it with the request body
  await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      res.send(employee)
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      return res.status(500).send({
        message: 'Error updating Employee with id ' + req.params.id
      })
    })
}
exports.delete = async (req, res, next) => {
  await Employee.findByIdAndRemove(req.params.id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      res.send({ message: 'Employee deleted successfully!' })
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Employee not found with id ' + req.params.id
        })
      }
      return res.status(500).send({
        message: 'Could not delete Employee with id ' + req.params.id
      })
    })
}
