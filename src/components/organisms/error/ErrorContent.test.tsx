import { render, screen } from '@/utils/tests/renderWithTheme';

import ErrorContent from './ErrorContent';

describe('ErrorContent ', () => {
  const renderErrorContentComponent = () => render(
    <ErrorContent
      imageWidth={320}
      imageSrc="/assets/page-error.png"
      imageAlt="page error image"
      errorText="에러 발생"
    />,
  );

  it('component props render check ', () => {
    renderErrorContentComponent();

    expect(screen.getByAltText('page error image')).toBeInTheDocument();
    expect(screen.getByText('에러 발생')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '메인으로 돌아가기' })).toBeInTheDocument();
  });
});
