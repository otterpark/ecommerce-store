// import { renderHook, waitFor } from '@testing-library/react';
// import mockRouter from 'next-router-mock';

// import { mockOrder } from '@/fixtures/__mocks__/api/order';

// import { render } from '@/utils/tests/renderWithSWR';

// import useOrder from './useOrder';

// const context = describe;

// describe('useOrder', () => {
//   const { result } = renderHook(() => useOrder());
//   mockRouter.push('/order/complete/01H6JABMXXAFZ7XYCCWAJE489C');
//   context('when request data using by useOrder', () => {
//     it('get order data', async () => {
//       await waitFor(() => {
//         expect(result.current.order('01H6JABMXXAFZ7XYCCWAJE489C').data).toEqual(mockOrder);
//       });
//     });
//   });
// });
