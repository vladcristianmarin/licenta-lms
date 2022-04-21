import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema({
	description: {
		type: String,
		required: true,
	},
	file: {
		type: Buffer,
		required: true,
	},
});

const courseSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	acronym: {
		type: String,
		required: true,
	},
	teacher: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Teacher',
	},
	description: {
		type: String,
		required: true,
	},
	weekday: {
		type: String,
		required: true,
	},
	hour: {
		type: Date,
		required: true,
	},
	inCall: {
		type: Boolean,
		default: false,
	},
	// students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
	chat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
	resources: [resourceSchema],
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
