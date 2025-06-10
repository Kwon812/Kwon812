## 설명
테마사용 X
스택 : next.js & tailwindCss
JS 프레임워크인 NEXTJS 를 이용해서 자기이력 사이트를 만들었습니다 
css 라이브러리로 Tailwind를 사용하였습니다
기능은 next의 app Routing 방식을 이용해 네비게이션 바에 자기소개 페이지(AboutMe), 연락 페이지 (Contact) , 프로젝트 페이지(Projects) 이렇게 세개로 나누었고
자기소개 페이지(AboutMe)의 오른쪽 아래 모서리에있는 호버버튼을 클릭하면 수상과 경력을 삭제&추가 할 수 있도록 구현했습니다

## 수상경력 삭제&추가 기능 
1. 기능이름 : 수상경력 삭제 & 추가 
2. 코드위치 : /app/aboutMe/page.js ->  100 ~ 143
3. 기능설명 : 수상&경력을 삭제하거나 추가 할 수 있는 기능
4. 코드설명 : 포지션은 fixed로 항상 부모컨테이너의 오른쪽 대각선 아래에 위치하도록 했고. input 태그에 값을 입력하고 버튼을 누르면 input의 ref(dom) 속성에  접근, current.value로 입력된 값을 참조해 상태(Details)에 추가하도록 했습니다. details.map으로  상태들을 리턴해서 표시하도록 했습니다
## CONTACT 기능
1. 기능이름 : 연락(email) 기능
2. 코드위치 : /app/contact/page.js , /services/emailService.js , /pages/api/email.js
3. 기능설명 : 무료 이메일 보내주는 라이브러리 - nodemailder 사용해봄. 사용자의 이메일, 전화번호, 본문 내용이 내 이메일 주소로 자동으로 발송됩니다.
4. 코드설명 : nodemailer라이브러리를 직접 사용하는 api구현부, api를 사용하는 서비스 로직, 그 서비스 로직을 사용하는 클라이언트로 나눠서 만들어보았습니다.
## ..
* github에 코드를 올렸습니다  
* next.js로 만든 프로젝트라서 vercel로 배포하고 링크를 따로 걸었습니다
* 깃헙 사이트 주소 :https://github.com/Kwon812/Kwon812 
* 배포한 사이트 주소 : https://hnu13.vercel.app/