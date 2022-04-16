import supabase from '../lib/db';
//stores
import {user,sess ,alerts,documents,views,users,currentDocument,currentViews, currentView} from './stores'
// Mock data
import {users_mock} from '../utils/mockupData/users' 
//Functions
import {getObjById} from './functions/utilities/arrayFn'



const loadDocs = async () => {
    try {
        let { data, error } = await supabase.from('documents').select('*');
        documents.update((val) => {
            console.log('loaddocs:',data)
            val = data
            return val;
        });
    } catch {
        console.log(error);
    }
};
//update views
const loadViews = async () => {
    try {
        let { data, err } = await supabase.from('views').select('*');
        views.update((val) => {
            console.log('loaddviews:',data)
            val = data
            return val;
        });
    } catch {
        console.log(err);
    }
};
export const storesInit = async () =>{
    console.log('stores are initializing with live data.......')
    // await loadDocs()
    // await loadViews()
    // users.update((val) => {
	// 	val = users_mock;
	// 	return val;
	// });
}



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




