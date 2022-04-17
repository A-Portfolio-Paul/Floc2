import { getObjById } from './functions/utilities/arrayFn';
//stores
import {user_mock, documents, views,users} from './stores'
import {currentDocument, currentViews,currentView ,user} from './stores'
// mock data
import { auth_user_mock } from './mockupData/authUser';
import { users_mock } from './mockupData/users';
import { documents_mock } from './mockupData/documents';
import { views_mock } from './mockupData/views';

export const initMockDocs = () => {
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
//Current Document
export const storesCurrent = (docId) => {
	let _views;
	let _currentViews;
	views.subscribe((value) => {
		_views = value;
	});

	curDoc,curViews,curView
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




export const initCurrentDocMock = (docId) => {
	console.log('Initializing document.....')
	let _views;
	let _currentViews;
	views.subscribe((value) => {
		_views = value;
	});
	currentDocument.update((val) => {
		val = getObjById(documents_mock, docId, 'docId');
		return val;
	});
	currentViews.update((val) => {
		_currentViews = getObjById(_views, docId, 'docId');
          val = _currentViews
		return val;
	});
	currentView.update((val) => {
          let _userId
          user.subscribe((value) => {
               _userId = value.id;
          });
	     const valArr = getObjById(_currentViews, _userId, 'userId');
	     console.log('currentView:',valArr)
	     val = valArr[0]
	     return val;
	});
}