import supabase from '../lib/db';
//stores
import {user,sess ,alerts,documents,views,users,currentDocument,currentViews, currentView} from './stores'
//Functions
import { getObjById } from './functions/utilities/arrayFn';


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

