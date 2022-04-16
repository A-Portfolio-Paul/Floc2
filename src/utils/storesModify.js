export const clearStores = () => {
	// user.update((val) => {
	// 	val = false;
	// 	return val;
	// });

	//auth_user_mock is not cleared as it is hardcoded and indpendent of login
	documents.update((val) => {
		val = false;
		return val;
	});
	views.update((val) => {
		val = false;
		return val;
	});
	users.update((val) => {
		val = false;
		return val;
	});
	currentDocument.update((val) => {
		val = false;
		return val;
	});
	currentViews.update((val) => {
		val = false;
		return val;
	});
	currentView.update((val) => {
		val = false;
		return val;
	});
};