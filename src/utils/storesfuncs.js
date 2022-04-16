import supabase from '../lib/db';
import {views, documents } from './stores'

export const loadDocs = async () => {
    try {
        let { data, err } = await supabase.from('documents').select('*');
        documents.update((val) => {
            val = data
            return val;
        });
    } catch {
        console.log(err);
    }
};
//update views
export const loadViews = async () => {
    try {
        let { data, err } = await supabase.from('views').select('*');
        views.update((val) => {
            val = data
            return val;
        });
    } catch {
        console.log(err);
    }
};