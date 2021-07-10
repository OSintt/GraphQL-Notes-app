import { Schema, model } from 'mongoose';

const NotesSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	isDone: {
		type: Boolean,
		default: false
	}
});

export default model('Notes', NotesSchema);