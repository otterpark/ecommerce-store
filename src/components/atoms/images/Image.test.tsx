import { render, screen } from '@testing-library/react';
import Logo from '../../../assets/logo.png';
import Image from './Image';

describe('Image ', () => {
  const width = 25;
  const height = 25;

  const renderImageComponent = () => render(
    <Image
      src="../../../assets/logo.png"
      alt="logo"
      width={width}
      height={height}
    />,
  );

  it('render image', () => {
    renderImageComponent();

    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
