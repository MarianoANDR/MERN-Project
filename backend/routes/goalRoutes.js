import express from 'express';
import { getGoal, setGoal, updateGoal, deleteGoal } from '../controllers/goalController.js'; 
 
const router = express.Router();

router.route('/').get(getGoal).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal) 

// router.get('/', getGoal)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

export {router as goalRouter};