import { render, screen } from '@/utils/tests/renderWithTheme';

import { mockProductDetail } from '@/fixtures/__mocks__/api/product';

import userEvent from '@testing-library/user-event';
import ProductSelectBox from './ProductSelectBox';

const context = describe;

describe('ProductSelectBox ', () => {
  const mockProduct = mockProductDetail;
  const toggleDropdown = jest.fn();
  const handleOptionClick = jest.fn();

  const renderProductSelectBox = () => {
    render(<ProductSelectBox
      data={mockProduct}
      openSelect={mockProduct.options[0].id}
      index={0}
      selectedOptions={{
        '0BV000OPT0003': '0BV000ITEM006',
      }}
      toggleDropdown={toggleDropdown}
      handleOptionClick={handleOptionClick}
    />);
  };

  it('render ProductSelectBox', () => {
    renderProductSelectBox();

    expect(screen.getByAltText(/unfold-icon/)).toBeInTheDocument();
    expect(screen.getAllByText(/white/).length).toBe(2);
    expect(screen.getByText(/black/)).toBeInTheDocument();
    expect(screen.getByText(/beige/)).toBeInTheDocument();
  });

  context('when click toggleDropdown', () => {
    it('should call toggleDropdown', async () => {
      renderProductSelectBox();

      const selectBox = screen.getByTestId('select-box');
      await userEvent.click(selectBox);

      expect(toggleDropdown).toBeCalledTimes(1);
    });
  });

  context('when click handleOptionClick', () => {
    it('should call handleOptionClick', async () => {
      renderProductSelectBox();

      const selectItem = screen.getByText(/black/);
      await userEvent.click(selectItem);

      expect(handleOptionClick).toBeCalledTimes(1);
    });
  });
});
