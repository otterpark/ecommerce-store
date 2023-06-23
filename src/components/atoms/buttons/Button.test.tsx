import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const context = describe;

describe('Button ', () => {
  const handleClick = jest.fn();
  const buttonProps = {
    name: '#Button',
    value: 'buttonValue',
    onClick: handleClick(),
  };
  const children = 'buttonChildren';

  const renderButtonComponent = () => render(
    <Button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
    >
      {children}
    </Button>,
  );

  context('component props check ', () => {
    it('children에 맞춰 text 잘 들어가는지 체크', () => {
      renderButtonComponent();
      expect(screen.getByRole('button')).toHaveTextContent(children);
    });

    it('buttonProps에 맞는 Button value 체크', () => {
      renderButtonComponent();
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('name', buttonProps.name);
    });
  });

  context('button onclick check ', () => {
    it('onclick 함수 호출 되는지 체크', () => {
      renderButtonComponent();
      userEvent.click(screen.getByText(children));
      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
