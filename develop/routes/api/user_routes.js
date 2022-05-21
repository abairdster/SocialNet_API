const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUser,
    udpateUser,
    deleteUser,
    addFriend,
    deleteFriendById,
} = require('../../controllers/user_controllers');

router
    .route('/users')
    .get(getAllUser)
    .post(createUser);

router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router  
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;