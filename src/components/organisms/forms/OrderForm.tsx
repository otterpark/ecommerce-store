import Text from '@/components/atoms/texts/Text';
import DescriptionList from '@/components/molecules/descriptionList/DescriptionList';
import InputText from '@/components/molecules/inputs/InputText';
import DaumPostcode from '@/components/libs/DaumPostcode';

import useModal from '@/hooks/useModal';

import { space } from '@/styles/sizes';

type OrderFormProps = {
  name: string;
  phoneNumber: string;
  postalCode: string;
  address: string;
  addressDetail: string;
  setName: (name: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setPostalCode: (postalCode: string) => void;
  setAddress: (address: string) => void;
  setAddressDetail: (addressDetail: string) => void;
}

export default function OrderForm({
  name, phoneNumber, postalCode, address, addressDetail,
  setName, setPhoneNumber, setPostalCode, setAddress, setAddressDetail,
}: OrderFormProps) {
  const { showModal } = useModal();

  const handleChangeAddress = (searchAddress: string, searchPostalCode: string) => {
    setAddress(searchAddress);
    setPostalCode(searchPostalCode);
  };

  const handleClickSearchAddress = () => {
    showModal({
      title: '우편번호 검색',
      body: <DaumPostcode changeAddress={handleChangeAddress} />,
    });
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };

  const handleChangeAddressDetail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setAddressDetail(value);
  };

  const handleChangePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const replaceValue = value.replace(/\D/g, '');
    setPhoneNumber(replaceValue);
  };

  const handleKeyDownPhoneNumber = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === 'Tab') {
      handleClickSearchAddress();
    }
  };

  return (
    <>
      <Text
        textSize="m"
        textAlign="left"
        text="배송 정보"
        color="text"
        pb="xs"
      />
      <DescriptionList
        listTitle="이름"
        padding={`${space.xs}`}
        isMobileHidedt
      >
        <InputText
          type="text"
          placeholder="이름을 입력해 주세요."
          label="name"
          value={name}
          onChange={handleChangeName}
        />
      </DescriptionList>
      <DescriptionList
        listTitle="핸드폰 번호"
        padding={`${space.xs}`}
        isMobileHidedt
      >
        <InputText
          type="text"
          placeholder="핸드폰 번호('-' 없이)를 입력해 주세요."
          label="phonenumber"
          minLength={10}
          maxLength={13}
          value={phoneNumber}
          onKeyDown={handleKeyDownPhoneNumber}
          onChange={handleChangePhoneNumber}
        />
      </DescriptionList>
      <DescriptionList
        listTitle="우편번호"
        padding={`${space.xs}`}
        isMobileHidedt
      >
        <InputText
          type="text"
          placeholder="우편번호"
          label="postal-code"
          onClick={handleClickSearchAddress}
          value={postalCode}
          readOnly
        />
      </DescriptionList>
      <DescriptionList
        listTitle="주소"
        padding={`${space.xs}`}
        isMobileHidedt
      >
        <InputText
          type="text"
          placeholder="주소"
          label="address"
          onClick={handleClickSearchAddress}
          value={address}
          readOnly
        />
      </DescriptionList>
      <DescriptionList
        listTitle="상세 주소"
        padding={`${space.xs}`}
        isMobileHidedt
      >
        <InputText
          type="text"
          placeholder="상세 주소를 입력해 주세요."
          label="address-detail"
          onChange={handleChangeAddressDetail}
          value={addressDetail}
        />
      </DescriptionList>
    </>
  );
}
