/**
 * Created by zeru on 14-10-23.
 */
var mongoose = require('mongoose');

exports.db = mongoose.connect('mongodb://localhost/blog');