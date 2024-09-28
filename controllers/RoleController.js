const { Role } = require('../models/Role'); // Adjust the import path based on your project structure

// Create a new role
const createRole = async (req, res) => {
    try {
        // Extract the role and normalize it
        let { role } = req.body;
        // Check if the role already exists
       
        let roleId = role.split(' ').join("");

        console.log("role",roleId)
        const existingRole = await Role.findOne({ roleId:roleId });
        if (existingRole) {
            return res.status(400).json({ message: 'Role already exists' });
        }

        // Create a new role if it doesn't exist
        const newRole = new Role({ roleId:roleId,roleName:role });
        console.log({ roleId:roleId,roleName:role })
        await newRole.save();
        res.status(201).json(newRole);
    } catch (error) {
        console.log("error",error)
        res.status(500).json({ message: error });
    }
};


// Retrieve all roles
const getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch roles' });
    }
};

module.exports = { createRole, getRoles };
