export const mockUseSelector = jest.fn();
export const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => mockUseSelector,
  useDispatch: jest.fn().mockImplementation(() => mockUseDispatch),
}));
