// import {newId} from 'newid'
import { auth_user_mock } from '../../mockupData/authUser';
import { v4 as uuidv4 } from 'uuid';
import { documents } from '../../stores';
import { views } from '../../stores';
import { newView } from '../../functions/documents/newObj/view';
import { user } from '../../stores';

export const addDocument = () => {
	let userId;
	user.subscribe((value) => {
		userId = value.id;
		console.log('userId', userId);
	});

	const newDoc = {
		docId: 'doc-' + uuidv4(),
		createDate: new Date(),
		createdBy: auth_user_mock.userId,
		title: 'New Document'
	};
	documents.update((value) => {
		value.push(newDoc);
		return value;
	});
	console.log('say Hi');
	views.update((value) => {
		const nwView = newView(userId, newDoc.docId);
		console.log('nwView', nwView);
		value.push(nwView);
		return value;
	});
};
