import { mockUseDispatch } from '@/fixtures/__mocks__/jest/reactRedux';
import useAlert from './useAlert';

const context = describe;

describe('useAlert', () => {
  beforeEach(() => {
    mockUseDispatch.mockClear();
  });

  context('when hook method', () => {
    it('use showAlert method', () => {
      const { showAlert } = useAlert();
      showAlert('test');

      expect(mockUseDispatch).toBeCalledTimes(1);
    });

    it('use showAlert method', () => {
      const { hideAlert } = useAlert();
      hideAlert();

      expect(mockUseDispatch).toBeCalledTimes(1);
    });
  });
});
