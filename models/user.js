var mongoose = require('mongoose');

// The factSchema is used to embedded docs in as tudent doc.
// There is no model and no 'facts' collection
var SpoolSchema = new mongoose.Schema ({
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

module.exports = mongoose.model('User', userSchema);