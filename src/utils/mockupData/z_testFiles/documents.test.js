import {documents_mock} from '../documents'

const testData=[
    {
        docId: 'doc-101',
        createDate:'2022-03-25',
      createdBy: 'ur-101',
      title:'Causes & Treatments for Pancreatitus'
    },
    {
      docId: 'doc-102',
      createDate: '2022-03-25',
      createdBy: 'ur-1001',
      title:'Which Biycle Should I buy?'
    }
  ]

describe.only('Documents', () => {
    it('', () => {
    // console.log('Documents:',documents_mock )
      expect(documents_mock).toStrictEqual(testData);
    });
  });