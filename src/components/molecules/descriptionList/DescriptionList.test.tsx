import { render, screen } from '@/utils/tests/renderWithTheme';

import Text from '@/components/atoms/texts/Text';
import DescriptionList from './DescriptionList';

describe('DescriptionList ', () => {
  const renderDescriptionList = () => {
    render(
      <DescriptionList
        listTitle="listTitle"
      >
        <Text textSize="s" textAlign="center" text="listDescription" color="black" />
      </DescriptionList>,
    );
  };

  it('render ProductQuantity', () => {
    renderDescriptionList();

    expect(screen.getByText('listTitle')).toBeInTheDocument();
    expect(screen.getByText('listDescription')).toBeInTheDocument();
  });
});
