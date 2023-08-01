import userEvent from '@testing-library/user-event';

import {
  act, render, screen, waitFor,
} from '@/utils/tests/renderWithRedux';

import { modal } from '@/features';

import OrderForm from './OrderForm';
import Modal from '../modal/Modal';

jest.unmock('react-redux');

const context = describe;

describe('OrderForm ', () => {
  const name = '';
  const phonenumber = '';
  const postalCode = '';
  const address = '';
  const addressDetail = '';

  const setName = jest.fn();
  const setPhoneNumber = jest.fn();
  const setPostalCode = jest.fn();
  const setAddress = jest.fn();
  const setAddressDetail = jest.fn();

  const renderOrderForm = () => {
    const store = render(
      <>
        <OrderForm
          name={name}
          phoneNumber={phonenumber}
          postalCode={postalCode}
          address={address}
          addressDetail={addressDetail}
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setPostalCode={setPostalCode}
          setAddress={setAddress}
          setAddressDetail={setAddressDetail}
        />
        <Modal />
      </>,
    );

    return store;
  };
  it('render component', () => {
    renderOrderForm();

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
  });

  context('when form change value', () => {
    it('should change form data', async () => {
      renderOrderForm();

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
      const { store } = renderOrderForm();

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
});
