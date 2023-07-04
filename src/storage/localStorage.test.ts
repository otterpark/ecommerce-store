import { clearLocalStorageItem, getLocalStorageItem, setLocalStorageItem } from './localStorage';

const context = describe;

describe('LocalStorage ', () => {
  beforeEach(() => {
    clearLocalStorageItem('accessToken');
  });
  context('when get localstorage data', () => {
    it('key does not have data', () => {
      const accessToken = getLocalStorageItem('accessToken');

      expect(accessToken).toBe('');
    });

    it('key have data "tokenData"', () => {
      setLocalStorageItem('accessToken', 'tokenData');
      const accessToken = getLocalStorageItem('accessToken');

      expect(accessToken).toBe('tokenData');
    });

    it('key have object data', () => {
      setLocalStorageItem('accessToken', JSON.stringify({
        isLogin: true,
        accessToken: 'tokenData',
      }));
      const accessToken = JSON.parse(getLocalStorageItem('accessToken'));

      expect(accessToken.isLogin).toBeTruthy();
      expect(accessToken.accessToken).toBe('tokenData');
    });
  });
});
