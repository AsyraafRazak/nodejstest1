const express = require('express');
const router = express.Router();
const path = require('path');
const { updateEmployee, getEmployee } = require('../../controllers/employeesController');
const employeesController = require('../../controllers/employeesController');

router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router