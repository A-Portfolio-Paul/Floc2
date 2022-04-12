// Authenticated user
import { user } from '../../stores';

// mock data
import { auth_user_mock } from '../../mockupData/authUser';
import { users_mock } from '../../mockupData/users';
import { documents_mock } from '../../mockupData/documents';
import { views_mock } from '../../mockupData/views';
// superbase
import supabase from '../../../lib/db';


export const seedDb = (documents, views) => {
	console.log('seed database is running....');
	const loopDocs = () => {
		for (let doc of documents_mock) {
            insertDocs(doc);
		}
	};
    loopDocs()
    const loopViews = () =>{
        for (let view of views_mock) {
			console.log('views_mock:', views_mock);
            insertViews(view);
		}
    } 
    loopViews()
};

const insertDocs = async (doc) => {
	try {

		const { data, error } = await supabase
			.from('documents')
			.insert([{ title: doc.title, created_by: doc.createdBy }]);
	} catch {
		console.log(Error);
	}
};
const insertViews = async (view) => {
	console.log('saving........Views:',view);
	try {

		const { data, error } = await supabase
			.from('views')
			.insert([{ cardMap: view.cardMap, cards:view.cards , userId:user.id}]);
	} catch {
		console.log(Error);
	}
};