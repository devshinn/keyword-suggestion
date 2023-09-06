import { useShearch } from '../../context/ShearchContext';
import InputBox from './InputBox';
import Suggestions from './Suggestions';
import { styled } from 'styled-components';

function ShearchSection() {
  const { searchText, inputChange, isFocus, changeFocus, keyboardEvent } = useShearch();

  const onSubmit = () => {
    changeFocus(false);
  };

  return (
    <Div>
      <h2>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h2>
      <div className='shearch-wrap'>
        <InputBox
          onSubmit={onSubmit}
          placeholder={'질환명을 입력해 주세요.'}
          value={searchText}
          onChange={inputChange}
          onFocus={() => changeFocus(true)}
          onBlur={() => {
            setTimeout(() => {
              changeFocus(false);
            }, 100);
          }}
          onKeyDown={keyboardEvent}
        />
        {isFocus && <Suggestions />}
      </div>
    </Div>
  );
}

export default ShearchSection;

const Div = styled.div`
  background-color: #cae9ff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  h2 {
    padding: 20px;
    text-align: center;
  }
  > div {
    width: 100%;
  }
  .shearch-wrap {
    display: flex;
    justify-content: center;
    position: relative;
    height: fit-content;
  }
`;
