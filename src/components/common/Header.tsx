import { styled } from 'styled-components';

function Header() {
  return (
    <HeaderWrap>
      <h1>한국임상정보</h1>
      <div>
        <ul>
          <li>소개</li>
          <li>질문과 답변</li>
          <li>소식받기</li>
          <li>제휴문의</li>
        </ul>
      </div>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    font-size: 19px;
    font-weight: 700;
  }
  ul {
    display: flex;
    gap: 15px;
  }
`;
