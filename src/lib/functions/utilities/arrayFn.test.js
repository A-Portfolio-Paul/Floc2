import {  getObjById } from './arrayFn'
import { documents_mock } from '../../mockupData/documents'

const testData=
  {
    docId:'doc-101',
    createDate:'2022-03-25',
    createdBy:'ur-101',
    title:'Causes & Treatments for Pancreatitus'
}

describe('UTILS:ARRAYS:getObjById:docs', () => {
    it('', () => {
      console.log('docArr:',testData)
      console.log('getById',getObjById(documents_mock,'doc-101','docId'))
      const res = getObjById(documents_mock,'doc-101','docId')

      expect(res).toStrictEqual(testData);
    });
  });
