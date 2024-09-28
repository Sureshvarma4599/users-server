const { Router } = require('express');
const { createUser, getUsers ,assignRole} = require('../controllers/UserController'); // Named import

const router = Router();

// Define routes
router.post('/create', createUser); // Route to create a new user
router.get('/all', getUsers);        // Route to fetch all users
router.post('/assign/role',assignRole)
module.exports = router; // Export the router
