import { useShearch } from '../../context/ShearchContext';
import { isEmpty } from '../../lib/utils';
import ShearchIcon from '../common/ShearchIcon';
import { styled } from 'styled-components';

function Suggestions() {
  const { suggestions, handleSuggestionClick, searchText, isFocus } = useShearch();

  return (
    <Div>
      {isEmpty(searchText) && (
        <div>
          <span>최근 검색어 (준비중)</span>
          <p></p>
        </div>
      )}
      {!isEmpty(suggestions) && (
        <div>
          <span>추천 검색어</span>
          <ul>
            {suggestions.map(sick => (
              <li
                key={sick.sickCd}
                onClick={() => {
                  console.info('clicked');
                  handleSuggestionClick(sick.sickNm);
                }}
                className={sick.sickNm === searchText ? 'selected' : ''}
              >
                <i>
                  <ShearchIcon color='#b9b9b9' />
                </i>
                <p>{sick.sickNm} </p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchText && !suggestions.length && <span>""검색어 없음""</span>}
    </Div>
  );
}

export default Suggestions;

const Div = styled.div`
  padding: 10px 0;
  min-height: 100px;
  position: absolute;
  top: 100px;

  background-color: white;
  border-radius: 1rem;
  width: 100%;

  max-width: 490px;
  overflow: auto;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);

  span {
    display: block;
    padding: 15px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #535353;
  }

  ul {
    max-height: 500px;
    overflow: auto;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: solid 1px #ececec;
    font-size: 15px;
    font-weight: 600;
    padding: 12px;
    width: 100%;
    text-align: left;
    overflow: hidden;
  }
  li:hover,
  .selected {
    background-color: #e6ecff;
  }
  svg {
    width: 20px;
    height: 20px;
    padding-top: 3px;
  }
`;
