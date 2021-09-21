const router = require('express').Router();
const {
  getProfile, updateProfile,
} = require('../controllers/users');
const { updateProfileSchema } = require('../validation/users');

router.get('/me', getProfile);
router.patch('/me', updateProfileSchema, updateProfile);

module.exports = router;
