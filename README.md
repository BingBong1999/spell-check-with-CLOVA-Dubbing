# Project - Spell Check (게임 내 스킬 쿨타임 알림 서비스)

## 📌 프로젝트 정보

![image](https://github.com/BingBong1999/spell-check/assets/142529694/dfe3fa68-d501-4157-aab4-4ff71d24d1c0)

- **2020년도** 리그오브레전드 게임을 시작하면서 제작한 서비스로, **현재(~2024.05.04)까지도** 꾸준히 리팩토링하고 있습니다.
- **개인**으로 진행한 프로젝트입니다.
- 해당 README.md 파일은 **요약된 정보**만 기재되어 있습니다. 더 많은 정보를 확인하시려면 아래 첨부된 **pdf 파일 및 mp3 파일 공유 링크를 확인해주시면** 감사하겠습니다.
 	-  **(pdf 파일 링크)**
  -  **(pdf 발표 자료 구두 설명 및 프로젝트 시연 영상)**

## 🚀 개발 배경 및 목적

- 대학교 2학년 때, 저는 교내 게임대회(리그오브레전드)에서 참가하였지만, **본선에서 탈락**하였습니다.
- 해당 경험을 계기로, 저는 **다음 대회**에서 반드시 우승하겠다고 다짐하며 저의 실력을 키우고자 노력하였습니다.
- **더 높은 수준의 게임을 경험**하기 위하여 티어를 올리는 데 몰두했고,
- 그 과정 속에서 **상대편의 스펠 쿨 타임을 계산하여 알려주는 웹 서비스**를 제작하였습니다.

## 🛸 주요 기능 및 특징

### 1. Game Start / Finish Buttons

- **```Game Start```** 버튼을 누르면 화면 오른쪽 상단에 Uptime을 표시하는 기능 추가
- **```Finish```** 버튼을 누르면 모든 view가 초기화되어, 원래의 상태로 되돌아가는 기능 추가 

### 2. Spells View

- 서비스 이용자는 각 포지션마다 **```Spell```** 버튼을 클릭하여, 스펠을 선택할 수 있음
- 선택된 스펠은 화면에 고정되어 표시
  - 한 번 선택한 스펠은 **```Finish```** 버튼을 눌러 초기화하지 않는 한 **수정 불가능**
- 화면에 고정된 스펠을 클릭하면, 해당 스펠의 이미지가 어두워지는 기능 추가
  - 만약, 고정된 스펠이 점멸일 경우, 하단 **Text View**에 게임 Uptime을 기준으로 계산한 만료기간이 텍스트로 표시
- 앞서 클릭한 스펠의 쿨타임이 지나면, 음성메세지가 출력되고 스펠의 이미지가 밝아지면서
- 상대방이 스펠을 사용할 수 있음을 서비스 이용자에게 알림.

### 3. Text View

- 게임을 진행하면서 상대 팀원이 점멸을 사용하였다면, 서비스 이용자는 Spell View의 해당 포지션의 점멸 버튼 클릭
- 해당 버튼을 클릭하면 게임 Uptime을 기준으로 계산한 만료기간이 텍스트로 표시

> **Example)**  
> - 상대팀의 Top이 게임이 시작된 후 5분 13초에 점멸을 사용하였다면, 서비스 이용자는 Spells View의 점멸 이미지 버튼을 클릭합니다.      
> - 이때, 점멸의 쿨타임이 5분이고, 상대팀의 Top은 5분 13초에 점멸을 사용하였으므로, Text View에는 "Top 10:13"로 표시됩니다.

## 🎯 비즈니스 로직이 사용된 프로그램 기능 이미지 파일

![image](https://github.com/BingBong1999/spell-check/assets/142529694/64ae70e9-40c3-4034-b172-82250965d206)
![image](https://github.com/BingBong1999/spell-check/assets/142529694/414326f5-ccc6-4a0a-bab6-2fb1badad0dd)
![image](https://github.com/BingBong1999/spell-check/assets/142529694/fbc6f55a-14ad-40e9-8367-7c0438701d2e)
![image](https://github.com/BingBong1999/spell-check/assets/142529694/7dcd3456-9bce-49ae-97fc-cffb34b06894)
![image](https://github.com/BingBong1999/spell-check/assets/142529694/dfd58c01-07df-42bf-b342-d26946d662fd)

- 더 자세한 내용은 README.md 파일 상단에 첨부한 pdf 공유 링크를 확인해주시면 감사하겠습니다.
