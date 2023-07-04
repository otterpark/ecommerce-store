import { memo } from 'react';

type ModalBody = {
  body: JSX.Element;
}

function ModalBody({ body } : ModalBody) {
  return body;
}

export default memo<ModalBody>(ModalBody);
