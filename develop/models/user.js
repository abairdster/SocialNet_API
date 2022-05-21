const {Schema, model} = require('mongoose');
const moment = require('moment');

const userSchema = new Schema({
    username: {
        type: 'string',
        unique: true,
        required: true,
        trim: true,
    }, 
    email: {
        type: 'string',
        required: true,
        unique: true,
        trim: true,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
            
    }, 
        {
            toJSON: {
                virtuals: true,
            },
            id: false
        }           
);

UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
});

const user = model('user', userSchema);

module.exports = user;        