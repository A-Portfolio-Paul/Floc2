import supabase from '../lib/db';
import {views, documents } from './stores'

export const loadDocs = async () => {
    console.log('load docs')
    let { data: documents, error } = await supabase
    .from('documents')
    .select('*')
  }
    if (Error) {
       console.log('error:', Error)
    } else {
        console.log('load successfull:', documents)
};


