// import {newId} from 'newid'
import {auth_user_mock} from '../../mockupData/authUser'
import { v4 as uuidv4 } from 'uuid';
import {documents} from '../../stores'
import {cuurentView} from '../../stores'




export const addDocument = () =>{
    documents.update((value) => {
        const newDoc = {
            docId:uuidv4(),
            createDate:new Date(),
            createdBy:auth_user_mock.userId,
            title:'New Document'
        }
        value.push(newDoc)
        console.log('VALUE',value)
        return value
	});
    cuurentView.update((value) => {
        const newView = 



        
        value.push(newDoc)
        console.log('VALUE',value)
        return value
	});








    }

