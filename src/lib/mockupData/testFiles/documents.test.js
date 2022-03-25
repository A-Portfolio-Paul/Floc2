import {documents} from '../documents'

const testData=[
    {
        docId: 'doc-101',
        createDate:'2022-03-25',
      createdBy: 'ur-101'
    },
    {
      docId: 'doc-102',
      createDate: '2022-03-25',
      createdBy: 'ur-1001'
    }
  ]

describe.only('Documents', () => {
    it('', () => {
    // console.log('Documents:',documents )
      expect(documents).toStrictEqual(testData);
    });
  });