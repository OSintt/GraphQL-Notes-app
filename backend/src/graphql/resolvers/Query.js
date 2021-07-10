import Notes from '../../models/Notes';

const Query = {
	notes: async () => {
		return await Notes.find();
	}
}

export default Query;