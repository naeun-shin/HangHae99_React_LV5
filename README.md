# JWT로 로그인 구현하기 by 나은
- 배포 링크 :[https://hang-hae99-react-lv-4.vercel.app/]
- 
## < 구현 항목 및 기능 정리 >
## 1. 회원가입
### - AXIOS 연결 사항
   - method : post
   - url : register
   - request : body 
     - id : string
     - password : string
## 2. 로그인
### 1. 로그인 시도
#### - AXIOS 연결 사항
      - methos : post
      - url : login
      - request : body
        - id : String
        - password : String
        - response
          - status code : 201
          - token : String
      1) 전송 전 체크사항
         - 아이디 & 비밀번호 공백 확인 (utils-isEmpty 컴포넌트)
           - 모두 입력 안하면 API 요청 X
      2) reponse로 구분
         - 서버에러 => alert or modal
           - 중복된 ID
           - 존재하지 않는 ID
           - 잘못된 PW

### 2. AccessToken 인증
#### - AXIOS 연결 사항
      - methos : get
      - url : user
      - request : header
        - authorization : String (Bearer + token)
        - response
          - status code : 200
          - message : String  
      1) reponse로 구분
         - 유효시간 만료 => 재로그인 유도
         - 로그인 X => 로그인 회원가입 페이지만 접근
         - 로그인 O => 로그인 회원가입 페이지 접근 X

## 3. 로그아웃 기능

## 4. 페이지 분리
         - 로그인 X => 로그인 회원가입 페이지만 접근
         - 로그인 O => 로그인 회원가입 페이지 접근 X
