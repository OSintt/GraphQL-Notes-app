import Notes from '../../models/Notes';

const Mutation = {
	createNote: async (_, {title, content}) => {
		const newNote = new Notes({
			title,
			content
		});
		if (title.length == 0 || content.length == 0) {
			throw new Error("You forgot to fill inputs!");
		}
		return await newNote.save();
	},

	deleteNote: async(parent, {_id}) => {
		const noteExist = await Notes.findById({_id});
		const ok = Boolean(noteExist);
		if (!noteExist) {
			throw new Error("This note does not exist");
		}
		await Notes.findByIdAndDelete({_id});
		return { ok };
	},
	
	checkNote: async(parent, {_id}) => {
		const noteExist = await Notes.findById({_id});
		if (!noteExist) {
			throw new Error("This note does not exist");
		}
		noteExist.isDone = true;
		await noteExist.save();
		return noteExist;
	} 
}

export default Mutation;