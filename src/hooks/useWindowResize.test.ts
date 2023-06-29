import { act, fireEvent, renderHook } from '@testing-library/react';
import useWindowSize from './useWindowResize';

const context = describe;

describe('useWindowResize', () => {
  function renderHookWindowSize() {
    const { result } = renderHook(() => useWindowSize());
    return { result };
  }

  function triggerResize(dimension: 'width' | 'height', value: number) {
    if (dimension === 'width') {
      (window.innerWidth as number) = value;
    } else if (dimension === 'height') {
      (window.innerHeight as number) = value;
    }
    act(() => {
      fireEvent(window, new Event('resize'));
    });
  }

  afterEach(() => {
    triggerResize('width', 1024);
    triggerResize('height', 768);
  });

  context('when resize window', () => {
    it('only resize width', () => {
      const { result } = renderHookWindowSize();
      expect(result.current.width).toBe(1024);

      triggerResize('width', 768);
      expect(result.current.width).toBe(768);

      triggerResize('width', 320);
      expect(result.current.width).toBe(320);
    });

    it('only resize height', () => {
      const { result } = renderHookWindowSize();
      expect(result.current.height).toBe(768);

      triggerResize('height', 1024);
      expect(result.current.height).toBe(1024);

      triggerResize('height', 320);
      expect(result.current.height).toBe(320);
    });

    it('resize width, height', () => {
      const { result } = renderHookWindowSize();
      expect(result.current.width).toBe(1024);
      expect(result.current.height).toBe(768);

      triggerResize('width', 320);
      triggerResize('height', 320);
      expect(result.current.width).toBe(320);
      expect(result.current.height).toBe(320);
    });
  });
});
