var mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 var Schema = mongoose.Schema;
 
 
 var SpoolSchema = new Schema ({
    Goal: {
        type: String,  
    },
    language: {
        type: String,
        enum: ['C', 'C++', 'C#', 'Java','JavaScript', 'PHP', 'Python', 'Ruby', 'TypeScript', 'Other'],
        required: true
    },
    Input: {
        type: String,
    }

 });

  
  var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    spools: [SpoolSchema],
    googleId: String
  
  }, {
    timestamps: true
  });

    module.exports = mongoose.model('Spool', SpoolSchema );