import {users} from './users'
import util from 'util'

const testData =  [
]

describe.only('Mock:Views', () => {
    it('', () => {
        console.log(util.inspect(users, { depth: null, colors: true}))
      expect(testData).toStrictEqual(testData);
    });
  });