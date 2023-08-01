import {
  act, render, screen, waitFor,
} from '@/utils/tests/renderWithRedux';
import userEvent from '@testing-library/user-event';

import { mockCart } from '@/fixtures/__mocks__/api';
import { modal } from '@/features';

import OrderPaymentContent from './OrderPaymentContent';
import Modal from '../modal/Modal';

jest.unmock('react-redux');

const context = describe;

describe('OrderPaymentContent', () => {
  const setName = jest.fn();
  const setPhoneNumber = jest.fn();
  const setPostalCode = jest.fn();
  const setAddress = jest.fn();
  const setAddressDetail = jest.fn();
  const handleChangePaymentMethod = jest.fn();

  const renderOrderPaymentContent = () => render(
    <>
      <OrderPaymentContent
        name=""
        phoneNumber=""
        postalCode=""
        address=""
        addressDetail=""
        cart={mockCart}
        paymentMethod="kakaopay"
        setName={setName}
        setPhoneNumber={setPhoneNumber}
        setPostalCode={setPostalCode}
        setAddress={setAddress}
        setAddressDetail={setAddressDetail}
        handleChangePaymentMethod={handleChangePaymentMethod}
      />
      <Modal />
    </>,
  );

  it('render OrderPaymentContent', async () => {
    renderOrderPaymentContent();

    expect(screen.getByText(/주문 상품/)).toBeInTheDocument();
    expect(screen.getByText('[CBCL 사틴셔츠] 포함 2개의 상품을 주문합니다.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /자세히보기/ })).toBeInTheDocument();

    expect(screen.getByText(/배송 정보/)).toBeInTheDocument();
    expect(screen.getByText('이름')).toBeInTheDocument();
    expect(screen.getByLabelText('name')).toBeInTheDocument();
    expect(screen.getByText('핸드폰 번호')).toBeInTheDocument();
    expect(screen.getByLabelText('phonenumber')).toBeInTheDocument();
    expect(screen.getByText('우편번호')).toBeInTheDocument();
    expect(screen.getByLabelText('postal-code')).toBeInTheDocument();
    expect(screen.getByText('주소')).toBeInTheDocument();
    expect(screen.getByLabelText('address')).toBeInTheDocument();
    expect(screen.getByText('상세 주소')).toBeInTheDocument();
    expect(screen.getByLabelText('address-detail')).toBeInTheDocument();

    expect(screen.getByText(/결제 수단/)).toBeInTheDocument();
    expect(screen.getByAltText('kakao-pay-logo-black')).toBeInTheDocument();
    expect(screen.getByAltText('toss-pay-logo-black')).toBeInTheDocument();
  });

  context('when click "자세히보기" button', () => {
    it('should see cart list', async () => {
      renderOrderPaymentContent();

      const button = screen.getByRole('button', { name: /자세히보기/ });

      await userEvent.click(button);

      expect(screen.getByText(/CBCL 사틴셔츠/)).toBeInTheDocument();
      expect(screen.getByText(/CBCL 레귤러핏 야구점퍼/)).toBeInTheDocument();
    });
  });

  context('when form change value', () => {
    it('should change form data', async () => {
      renderOrderPaymentContent();

      const formName = screen.getByLabelText('name');
      const formPhonenumber = screen.getByLabelText('phonenumber');
      const formAddressDetail = screen.getByLabelText('address-detail');

      await userEvent.type(formName, '박진우');
      expect(setName).toBeCalled();

      await userEvent.type(formPhonenumber, '01079424473');
      expect(setPhoneNumber).toBeCalled();

      await userEvent.type(formAddressDetail, '상세 주소를 적습니다.');
      expect(setAddressDetail).toBeCalled();
    });
  });

  context('when form "postalCode, Address" click', () => {
    it('should active modal', async () => {
      const { store } = renderOrderPaymentContent();

      const formPostalCode = screen.getByLabelText('postal-code');
      const formAddress = screen.getByLabelText('address');

      await userEvent.click(formPostalCode);

      await waitFor(() => {
        expect(screen.getByText(/우편번호 검색/)).toBeTruthy();
        expect(store.getState().modal.isActive).toBeTruthy();
      });

      act(() => {
        store.dispatch(modal.actions.closeModal());
      });
      expect(store.getState().modal.isActive).toBeFalsy();

      await userEvent.click(formAddress);

      await waitFor(() => {
        expect(screen.getByText(/우편번호 검색/)).toBeTruthy();
        expect(store.getState().modal.isActive).toBeTruthy();
      });
      expect(store.getState().modal.isActive).toBeTruthy();
    });
  });

  context('when click toss payment method button', () => {
    it('should call handleChangePaymentMethod', async () => {
      renderOrderPaymentContent();

      const tossButton = screen.getByAltText('toss-pay-logo-black');

      await userEvent.click(tossButton);

      expect(handleChangePaymentMethod).toBeCalledTimes(1);
    });
  });
});
