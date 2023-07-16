import { render, screen } from '@/utils/tests/renderWithTheme';

import userEvent from '@testing-library/user-event';

import ProductQuantity from './ProductQuantity';

const context = describe;

describe('ProductQuantity ', () => {
  const handleClickIncrease = jest.fn();
  const handleClickDecrease = jest.fn();

  const renderProductQuantity = () => {
    render(<ProductQuantity
      quantity={1}
      handleClickIncrease={handleClickIncrease}
      handleClickDecrease={handleClickDecrease}
    />);
  };

  it('render ProductQuantity', () => {
    renderProductQuantity();

    expect(screen.getByLabelText('quantity')).toBeInTheDocument();
    expect(screen.getByLabelText('quantity')).toHaveValue('1');

    expect(screen.getByAltText('plus-icon')).toBeInTheDocument();
    expect(screen.getByAltText('minus-icon')).toBeInTheDocument();
  });

  context('when click handleClickIncrease', () => {
    it('should call handleClickIncrease', async () => {
      renderProductQuantity();

      const plusIcon = screen.getByAltText('plus-icon');
      await userEvent.click(plusIcon);

      expect(handleClickIncrease).toBeCalledTimes(1);
    });
  });

  context('when click handleClickDecrease', () => {
    it('should call handleClickDecrease', async () => {
      renderProductQuantity();

      const deleteIcon = screen.getByAltText('minus-icon');
      await userEvent.click(deleteIcon);

      expect(handleClickDecrease).toBeCalledTimes(1);
    });
  });
});
