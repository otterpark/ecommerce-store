import { Color } from '@/types/color';

// eslint-disable-next-line import/prefer-default-export
export const ERROR_MESSAGE = {
  USER: {
    INVALED_USER: '회원정보를 찾을 수 없습니다. \n 아이디/비밀번호를 다시 확인해 주세요.',
    INVALED_TOKEN: '유효하지 않는 토큰입니다. 다시 로그인을 진행해 주세요.',
    INVALED_SIGNUP: '중복되는 이메일 입니다. \n 다시 입력해 주세요.',
  },
  AUTH: {
    INVALED_ACCESS: '접근 권한이 없거나 잘못된 접근입니다.',
    LOGIN_ACCESS: '로그인이 필요한 기능입니다. 로그인 후 이용해 주세요.',
  },
  PAGE: {
    NOT_FOUND: '페이지가 존재하지 않거나, \n 삭제되어 찾을 수 없어요!',
    SERVER_ERROR: '페이지에 예상치 못한 오류가 발생하였습니다. \n 잠시 후 다시 시도해 주세요.',
  },
  PRODUCT: {
    FAIL_TO_FIND_CATEGORY: '해당 카테고리를 찾을 수 없습니다. \n 정상적인 루트로 진행해 주세요.',
    FAIL_TO_FIND_PRODUCT: '해당 상품을 찾을 수 없습니다. \n 정상적인 루트로 진행해 주세요.',
  },
  CART: {
    NULL_CART_DATA: '장바구니에 담긴 상품이 없습니다. 상품을 장바구니에 담은 후 재 시도해 주세요.',
    FAIL_TO_ADD: '장바구니 넣기에 실패하였습니다. 잠시 후 다시 시도해 주세요.',
  },
  ORDER: {
    NULL_CART_DATA: '장바구니에 담겨진 상품이 없습니다. 상품을 장바구니에 담아주세요.',
    FAIL_PAYMENT: '사용자에 의해 결제가 취소되었습니다.',
    FAIL_ORDER: '상품 주문에 실패하였습니다. 이미 결제가 되셨다면 고객센터로 연락 주시면 신속하게 처리해 드리겠습니다.',
    NOT_FOUND_ORDER: '해당 주문을 찾을 수 없습니다. 상품 구매를 하신 상태라면 고객센터로 문의 주세요.',
  },
};

export const SUCCESS_MESSAGE = {
  CART: {
    SUCESS_TO_ADD: '해당 상품이 장바구니에 추가되었습니다.',
  },
};

export const PAYMENT = {
  METHOD: {
    CARD: 'card',
  },
  STATUS: {
    PAID: '결제 완료',
  },
};

export const BRAND = {
  KAKAO_PAY: {
    NAME: 'kakaopay',
    COLOR: '#f6e600' as Color,
  },
  TOSS_PAY: {
    NAME: 'tosspay',
    COLOR: '#0064FF' as Color,
  },
};
