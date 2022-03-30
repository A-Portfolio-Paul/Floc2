import { v4 as uuidv4 } from 'uuid';

//PUT TYPESCRIPT INTYERFACE HERE

export const newView = (userId: string, docId: string) => {
	const newView = {
		viewId: 'vw-' + uuidv4(),
		userId: userId, //used for security in the database (must match current user to allow edit)
		docId: docId,
		cardMap: {
			1: { id: 1, items: [] }
		},
		cards: {
			1: {
				cardId: 1,
				tags: ['lesiure', 'sport', 'machines'],
				title: 'Document Title',
				imageUrl: '',
				notes: ''
			}
		}
	};
	return newView;
};
