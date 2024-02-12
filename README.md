# 쇼핑몰 프로젝트 👩‍💻

react.js, firebase, cloudinary를 활용해서 쇼핑몰 사이트를 구현 합니다.

## 쇼핑몰 사이트에서 구현된 기능들 

- <b>헤더(라우터) :</b> react-router-dom의 link태그를 활용해서 해당 페이지들로 이동할 수 있게 처리합니다. router를 설정할 때 한 단계 component로 감싸고 context를 만들어서 로그인 상태와 권한에 따라서 경로를 보호 할 수 있습니다.
- <b>로그인/로그아웃 :</b> useState hook과 firebase를 활용해서 googleAuthProvider를 가져와 로그인/로그아웃 기능을 구현합니다. useEffect hook과 onAuthStateChanged 함수를 사용해서 refresh 후에도 로그인/로그아웃 상태를 유지합니다. firebase 데이터에 어드민 사용자uid를 추가해서 제품등록 권한을 줄 수 있습니다. 
- <b>제품 동록 :</b> useState hook과 firebase, cloudinary를 사용해서 어드민 권한을 가진 사용자가 입력폼을 통해 제품을 등록할 수 있습니다. 한 제품당 여러장의 사진을 등록할 수 있습니다.
- <b>제품 필터링 :</b> router를 사용해서 필터링된 제품들만 보여지는 페이지로 이동합니다.
- <b>제품 상세페이지 :</b> router를 사용해서 해당 제품의 상세페이지로 경로를 이동할 수 있고 react-query를 사용해서 등록된 제품들을 보여줄 수 있습니다. useState를 활용해서 selected된 option을 보여줄 수 있습니다. 
- <b>장바구니 기능:</b> context를 사용해서 user의 uid를 받아오고 firebase에 제품을 추가하고 삭제하고 읽어올 수 있습니다. useQuery를 사용해서 바구니 안에 있는 갯수를 표시할 수 있습니다.

## 완성작 보기 

미리보기 : https://resilient-selkie-38c036.netlify.app/

### 사용스택

- react.js(https://react.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- react-router-dom(https://reactrouter.com/en/main)를 활용해서 사이트의 네비게이션과 라우팅을 관리합니다.
- react-query(https://tanstack.com/query/v3/)훅을 사용하여 데이터를 관리하고 상태를 처리할 수 있습니다.
- firebase(https://firebase.google.com/)의 Authentication, 데이터베이스를 활용할 수 있습니다.
- cloudinary(https://cloudinary.com/)를 활용해서 상품 이미지들을 관리합니다.
- UUID(https://www.npmjs.com/package/react-uuid)를 사용해서 data의 고유한 아이디를 자동으로 생성합니다.
- react-icons(https://react-icons.github.io/react-icons/) 를 이용하여 아이콘들을 활용했습니다.
- tailwindcss(https://tailwindcss.com/docs/installation)를 사용해서 스타일링을 해줍니다.
- react slick(https://react-slick.neostack.com/)을 사용해서 이미지 슬라이드를 해줍니다.
- netlify(https://www.netlify.com/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, CSS 기반으로 웹사이트의 기본 레이아웃 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업합니다. [ARIA(Accessible Rich Internet Applications)](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

## 프로젝트 실행
- react를 설치합니다. `npm install -g create-react-app`
- react-router-dom를 설치합니다. `npm install react-router-dom`
- react-query를 설치합니다. `npm install react-query`
- firebase를 설치합니다. `npm install firebase`
- cluodinary를 설치합니다. `npm install cloudinary-react`
- UUID를 설치합니다 `npm install uuid`
- react-icons를 설치합니다. `npm install react-icon ==save`
- tailwindcss를 설치합니다. `npm install -D tailwindcss`
- react slick를 설치합니다. `npm install react-slick --save`
- .env파일을 만들고 .gitignore파일에 git commit 되지 않도록 .env 추가해줍니다.
