import supabase from '../lib/db';
import {views, documents } from './stores'

let docs
const updateStore = (newVal) =>{
    console.log('updateStore....' , newVal)
    documents.update((val) => {
		val = newVal
		return val;
	});
}

export const loadDocs = async () => {
    try {
        let { data, err } = await supabase.from('documents').select('*');
        updateStore(data)
    } catch {
        console.log(err);
    }
};
