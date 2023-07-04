import { memo } from 'react';

type ModalFooter = {
  footer: JSX.Element;
}

function ModalFooter({ footer } : ModalFooter) {
  return footer;
}

export default memo<ModalFooter>(ModalFooter);
