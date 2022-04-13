import { mockIds } from '../../../utils/mockupData/mockids'

export const document2 = () => {
	const res = {
		docId:mockIds.doc2,
		createDate: '2022-03-25',
		createdBy: mockIds.secondUserId,
		title: 'Which Bicycle should I buy'
	};
	return res;
};
