import { user } from '../../stores';

export const document2 = () => {
	let userId;
	userId='d82d629e-168d-48f3-8100-b66e745c6b21'	
	// user.subscribe((value) => {
	// 	userId = value.id;
	// 	console.log('userId', userId);
	// });
	const res = {
		docId: 'doc-102',
		createDate: '2022-03-25',
		createdBy: userId,
		title: 'Which Bicycle should I buy'
	};
	return res;
};
