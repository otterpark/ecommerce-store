import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

import useModal from '@/hooks/useModal';

import styled from 'styled-components';

type AddressSearchProps = {
  changeAddress: (address: string, postalCode: string) => void;
}

const DaumPostCodeWrap = styled.div`
  height: 400px;
`;

export default function DaumPostcode({ changeAddress }: AddressSearchProps) {
  const [isScriptLoading, setIsScriptLoading] = useState(true);
  const refElement = useRef<HTMLDivElement>(null);
  const { hideModal } = useModal();

  useEffect(() => {
    if (!isScriptLoading) {
      const themeObj = {
        searchBgColor: '#0B65C8',
        queryTextColor: '#FFFFFF',
      };
      new daum.Postcode({
        theme: themeObj,
        oncomplete(data) {
          const { address, zonecode: postalCode } = data;
          changeAddress(address, postalCode);
          hideModal();
        },
        width: '100%',
        height: '100%',
      }).embed(refElement.current);
    }
  }, [isScriptLoading]);

  return (
    <>
      <DaumPostCodeWrap ref={refElement} />
      <Script
        src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        onReady={() => setIsScriptLoading(false)}
        onLoad={() => setIsScriptLoading(false)}
      />
    </>
  );
}
