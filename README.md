## 검색어 추천

# WANTED 프리온보딩 프론트엔드 3주차 과제

- 임상시험에 과해 검색어를 추천해주는 프로젝트입니다.

## [배포 링크](https://mellow-crostata-87786e.netlify.app)

## 사용 라이브러리

- 언어: TypeScript
- 스타일 관리: styled-components
- HTTP Client: fetch

```js
  "dependencies": {
    "axios": "^1.2.2",
    "react-router-dom": "^6.15.0",
    "styled-components": "^6.0.7",
    "typescript": "^4.9.5",
  },
  "devDependencies": {
    "eslint": "^8.48.0",
    "eslint-config-prettier": "^9.0.0",
    "husky": "^8.0.3",
    "lint-staged": "^14.0.1",
    "prettier": "^3.0.3",
    "react-icons": "^4.10.1"
  },
```

## 프로젝트 실행 방법

```
git clone https://github.com/devshinn/keyword-suggestion
cd keyword-suggestion
npm install
npm start
```

## 프로젝트 구조

```js
    src/
    ├── 📂api/
    │   └── 📄index.ts
    └── 📂components/
        ├── 📂common/
        │   ├── 📄Header.tsx
        │   ├── 📄Layout.tsx
        │   └── 📄ShearchIcon.tsx
        ├── 📂ShearchSection/
        │   ├── 📄InputBox.tsx
        │   ├── 📄ShearchSection.tsx
        │   └── 📄Suggestions.tsx
        ├── 📂context/
        │   ├── 📄ShearchContext.ts
        │   └── 📄ShearchProvider.tsx
        ├── 📂lib/
        │   └── 📄utils.ts
        └── 📂types/
            └── 📄index.ts
```

### 기능 상세

검색어를 입력시 매 입력마다 server와 통신하여 유사 검색어를 추천 합니다.

### 사용방법

~~`검색어 입력시 api server 속도로 인해 추천검색어가 보여지는데 딜레이가 있을 수 있습니다.`~~

> 검색어 입력시 추천검색어가 보이면 키보드의 Up Down(화실표)및 Enter 키로 검색어를 선택합니다.
>
> 추천검색어가 보이면 마우스 클릭으로도 선택 가능합니다.

### 로컬 캐싱 구현

- context api를 사용하여 state에 expireTime과 저장하여 만료가된 캐시를 관리하고 핸들링 합니다.
- 하지만 state로 휘발성 메모리로 캐싱을 관리하는 것은 잘못된 선택이였다고 생각합니다.
- 현재는 state에서 관리되어 새로고침시 cache는 사라지게되어, cache를 관리하는 의미가 좀 부족하다고 생각하였습니다.
- cache storage같은 저장소를 사용 했으면 더 좋을 것이라 생각하여 현재 업데이트 되고 있습니다.

### API 호출 횟수 줄이기

추천 검색어에서 api 호출을 줄일 수 있는 방법은 여러가지가 있습니다.

1. 캐싱 (Caching)
2. 요청 중복 제거
3. 요청 병합 (Request Batching)
4. 클라이언트 측 검색 (Client-Side Search)
5. 서버 사이드 검색 (Server-Side Search)
6. 미리 가져오기 (Prefetching)
7. 델타 업데이트 (Delta Updates)
8. 웹 소켓 (WebSocket) 또는 실시간 기술 활용
9. debouncing

현재 적용된 로직은 단모음, 단자음, 공백을 구분하여 api 호출을 줄였습니다 + 캐싱.

단어 별로 요청을 할수도 있지만 그러면 검색어를 추천해주는 의미가 없다고 생각했습니다.

예를 들어 '대한 민국' 검색 할 경우 naver 나 google은 다른 로직들이 있겠지만 네트워크상

`ㄷ대ㅎ하한' 'ㅁ미민ㄱ구국` 이렇게 12번의 요청을 하고있었습니다.

현재 프로젝트에서는 가장 단순하게 '단모음/단자음/공백' 경우에는 api(cache 포)호출을 하지않아(ㄷㅎ" "ㅁㄱ) 7번의 호출을 하고 있습니다.
