import {users_mock} from '../users'
import util from 'util'

const testData =   [
  { userId: 'ur-101', userName: 'paul', views: [ 'vw-101', 'vw-145' ] },
  { userId: 'ur-102', userName: 'Jenny', views: [ 'vw-102' ] }
]

describe.only('Mock:Views', () => {
    it('', () => {
        // console.log(util.inspect(users, { depth: null, colors: true}))
      expect(testData).toStrictEqual(users_mock);
    });
  });