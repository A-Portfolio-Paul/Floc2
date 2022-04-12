import { user } from '../../stores';
import { v4 as uuidv4 } from 'uuid';

export const document2 = () => {
	let userId;
	userId='d82d629e-168d-48f3-8100-b66e745c6b21'	
	// user.subscribe((value) => {
	// 	userId = value.id;
	// 	console.log('userId', userId);
	// });
	const res = {
		docId:'doc-' + uuidv4(),
		createDate: '2022-03-25',
		createdBy: userId,
		title: 'Which Bicycle should I buy'
	};
	return res;
};
