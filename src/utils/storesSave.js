export const saveSuperbase = async (userId) => {
	console.log('saving........',userId);
	try {

		const { data, error } = await supabase
			.from('documents')
			.insert([{ title: 'Dummy document', createdBy: userId }]);
	} catch {
		console.log(Error);
	}
};