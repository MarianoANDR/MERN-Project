import asyncHandler from 'express-async-handler';

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'});
})

const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: 'Set goal'});
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({messsage: `Update goal ${req.params.id}`}); 
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({messsage: `Delete goal ${req.params.id}`}); 
})
 
export {getGoals as getGoal };
export {setGoal as setGoal};
export {updateGoal as updateGoal};
export {deleteGoal as deleteGoal};