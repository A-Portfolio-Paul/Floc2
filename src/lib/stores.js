import { writable } from 'svelte/store';
import supabase from '$lib/db';
import { getObjById } from './functions/utilities/arrayFn';

// mock data
import { auth_user_mock } from './mockupData/authUser';
import { users_mock } from './mockupData/users';
import { documents_mock } from './mockupData/documents';
import { views_mock } from './mockupData/views';
// stores
export const user = writable(
	supabase.auth.user() || //Authenticated user from Superbase
		false
);
export const user_mock = writable({}); // used for docs (will replace when db integration complete)
export const sess = writable(''); //session data
export const alerts = writable({}); //alerts

//Documents
export const documents = writable({}); // all docs for user
export const views = writable({}); // all views for user
export const users = writable({}); // all users that conrributed to users docs

export const currentDocument = writable({}); // current selected dcoument
export const currentViews = writable({}); // Views for current document
export const currentView = writable(); // authenticated users view of current document

// This is hardcoded it will come from superbase when the data resides there
let mockCurrentUser = 'ur-101';

export const InitUserDocuments = () => {
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

	currentView.update((val) => {
          let _userId
          user.subscribe((value) => {
               _userId = value.id;
          });
          console.log('auth user:', _userId)

          console.log('currentViews',_currentViews)
	     const valArr = getObjById(_currentViews, _userId, 'userId');
	     console.log('currentView valArr',valArr)
	     val = valArr[0]
	     return val;
	});
};
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
