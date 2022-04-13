import { user } from '../../stores'
import { mockIds } from '../../../utils/mockupData/mockids'
 
export const document1 = () =>{
    const res = {
        docId:mockIds.doc1,
        createDate:'2022-03-25',
        createdBy:mockIds.AuthenticatedUserId,
        title:'Causes & Treatments for Pancreatitus'
    }
    return res
}


