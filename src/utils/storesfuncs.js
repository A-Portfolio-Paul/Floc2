import supabase from '../lib/db';
import {views, documents } from './stores'

export const loadDocs = async () => {
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
export const loadViews = async () => {
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