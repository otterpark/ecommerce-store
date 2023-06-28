import styled from 'styled-components';

import { fontSize, space } from '@/styles/sizes';
import { breakpoints } from '@/styles/medias';

const Info = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${space.xs} 0;
  margin-top: ${space.m};
  li {
    font-size: ${fontSize.s};
    ::after {
      content: "";
      display: inline-block;
      width: 0.1rem;
      height: 1rem;
      margin: 0px ${space.xs};
      background-color: rgb(204, 204, 204);
    }
    :last-child {
      ::after {
        content: none;
      }
    }
  }
  ${breakpoints.tablet} {
    flex-direction: column;
    margin-top: ${space.m};
    li {
      ::after {
        content: none;
      }
    }
    .copyright {
      margin-top: ${space.s}
    }
  }
`;

export default function FooterInfo() {
  return (
    <Info>
      <li>상호 : (주)헬로우마켓</li>
      <li>대표 : 박진우</li>
      <li>사업자등록번호 : 213-87-48392</li>
      <li>통신판매업신고번호 : 2023-서울영등포-0628</li>
      <li>대표번호 : 02-1234-5678</li>
      <li>이메일 : otterliark94@gmail.com</li>
      <li>주소 : 서울특별시 영등포구 도신로</li>
      <li className="copyright">© HelloMarket Corp. All rights reserved</li>
    </Info>
  );
}
