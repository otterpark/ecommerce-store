import userEvent from '@testing-library/user-event';
import { render, screen } from '@/utils/tests/renderWithTheme';
import InputText from './InputText';

const context = describe;

describe('InputText  ', () => {
  const inputProps = {
    placeholder: 'test-placeholder',
  };

  const renderInputText = () => render(
    <InputText
      label="test-label"
      type="text"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
    />,
  );

  it('props에 맞춰 결과 화면 체크', () => {
    renderInputText();

    expect(screen.getByLabelText('test-label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(inputProps.placeholder)).toBeInTheDocument();
  });

  context('text 수정 시 ', () => {
    it('value 값이 바뀌는지 체크', async () => {
      renderInputText();

      const input = screen.getByPlaceholderText(inputProps.placeholder);
      await userEvent.type(input, '바뀐 값');
      expect((input as HTMLInputElement).value).toBe('바뀐 값');
    });
  });
});
