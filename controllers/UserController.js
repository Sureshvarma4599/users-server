const { v4: uuidv4 } = require('uuid');
const { User } = require('../models/User'); // Adjust the import path based on your project structure
const {Role} = require("../models/Role");
// Function to create a new user
const createUser = async (req, res) => {
    try {
        const { userName, phoneNumber, emailId } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ emailId });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create a new user instance
        const newUser = new User({
            userId: 'userId_' + uuidv4(),
            userName,
            phoneNumber,
            emailId,
        });

        // Save the new user to the database
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to create user' });
    }
};

// Function to fetch all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch all users from the database
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to fetch users' });
    }
};

const assignRole = async(req,res)=>{
    try{
      const {roleId,users } = req.body;
      const roleExists = await Role.findOne({roleId:roleId});
      // check if role is invalid
      if(!roleExists) return res.status(400).json({ message: 'Role not found'});

      for(const user of users){
        const userData = await User.findOne({userId:user});
        if(userData){
            if(userData?.roles && !userData.roles.includes(roleId)){
                userData.roles.push(roleId);
                await userData.save()
            }
        }
      }
      return res.status(200).json({"message":"user roles updated"});

    }catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to assign role to users' });
    }
}

module.exports = { createUser, getUsers,assignRole };
