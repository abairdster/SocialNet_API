const { User, Thought}= require('../models');
const thoughts_controller = {
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '-_v'
        })
        .select('-_v')
        .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err =>{
            console.log(err);
            res.sendStatus(400);
        });
    },

    getThoughtsById({ params }, res){
        Thought.findOne({ _id: params.id})
        .populate({ 
            path: 'reactions',
            select: '-_v'
        })
        .select('-_v')
        .sort({ _id: -1 })
        .then(dbThoughtData =>{
            if(!dbThoughtData){
                res.status(404).json({ message: 'No thoughts found with that ID!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err =>{
            console.log(err);
            res.sendStatus(400);
        });
    },

    createThoughts({body}, res) {
        Thought.create(body)
        .then(({_id})=> {
            return User.findOneAndUpdate(
                {_id: body.userId},
                {$push:{thoughts:_id}},
                {new: true},
            );
        })
        .then(dbThoughtData=> {
            if (!dbThoughtData){
                res.status(404).json({ message: 'No user found with this ID!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    updateThoughts({ params, body}, res){
        Thought.findOneAndUpdate({_id: params.id},body,{ new: true, runValidators: true})
        .then(dbThoughtData=> {
            if(!dbUserData) {
                res.status(404).json({ message: 'No User found with this ID!' })
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.json(err));
    },

    deleteThoughts({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id})
        .then(dbThoughtData =>{
            if (!dbUserData){
                res.status(404).json({ message: 'No User found with this ID!' });
                return;
            }
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$pull: {thoughts: params.Id}},
                {new: true}
            )
        })
        .then(dbUserData =>{
            if (!dbUserData){
                res.status(404).json({ message: 'No User found with this ID!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    createReaction({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id }, body, { new: true, runValidators: true})
        .populate({path: 'reactions', select: '-_v'})
        .select('-_v')
        .then( dbThoughtData =>{
            if (!dbThoughtData){
                res.status(404).json({ message: 'No thoughts with this ID!' });
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(404).json(err))
        return;
    },
    
    deleteReaction({params}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull:{reactions: {reactionId: params.reactionId}}},
            {new: true}
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message:'Nada!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.json(err));
        }

};

module.exports = thoughtController;


        
    
    