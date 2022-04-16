
import { getObjById } from './functions/utilities/arrayFn';
//stores
import {user_mock, documents, views,users} from './stores'
import {currentDocument, currentViews,currentView } from './stores'

// mock data
import { auth_user_mock } from './mockupData/authUser';
import { users_mock } from './mockupData/users';
import { documents_mock } from './mockupData/documents';
import { views_mock } from './mockupData/views';


export const storesInitMock = () =>{
    console.log('storesInitMock ...Running.')
    InitUserDocuments()
}

// This is hardcoded it will come from superbase when the data resides there
let mockCurrentUser = 'ur-101';

const InitUserDocuments = () => {
	user_mock.update((val) => {
		val = auth_user_mock;
		return val;
	});
	documents.update((val) => {
		val = documents_mock;
		return val;
	});
	views.update((val) => {
		val = views_mock;
		return val;
	});
	users.update((val) => {
		val = users_mock;
		return val;
	});
};
export const initCurrentDocument = (docId) => {
	let _views;
	let _currentViews;
	views.subscribe((value) => {
		_views = value;
	});

	// curDoc,curViews,curView
	currentDocument.update((val) => {
		val = getObjById(documents_mock, docId, 'docId');
		return val;
	});
	currentViews.update((val) => {
		console.log('_views', _views);
		_currentViews = getObjById(_views, docId, 'docId');
		console.log('_currentViews', _currentViews);
          val = _currentViews
		return val;
	});
}