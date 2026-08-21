---
name: 맘숲놀이
colors:
  background: "#FBF9F4"
  on-background: "#666263"
  on-background-strong: "#3A3735"
  surface: "#FFFFFF"
  surface-variant: "#F3EEE3"
  outline: "#E4DCC8"
  outline-strong: "#C9BC9E"
  primary: "#097A44"
  on-primary: "#FFFFFF"
  primary-container: "#DDEFE1"
  on-primary-container: "#06502E"
  secondary: "#4B3615"
  on-secondary: "#FFFFFF"
  secondary-container: "#F0E5D2"
  on-secondary-container: "#3A2A10"
  accent: "#E8720C"
  on-accent: "#FFFFFF"
  accent-container: "#FBE7D0"
  on-accent-container: "#8A4508"
  error: "#C0392B"
  on-error: "#FFFFFF"
  shadow-tint: "#4B3615"
typography:
  headline-lg:
    fontFamily: Pretendard
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
  headline-md:
    fontFamily: Pretendard
    fontSize: 22px
    fontWeight: "700"
    lineHeight: 30px
  body:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 26px
  meta:
    fontFamily: Pretendard
    fontSize: 13px
    fontWeight: "500"
    lineHeight: 18px
  button:
    fontFamily: Pretendard
    fontSize: 15px
    fontWeight: "600"
    lineHeight: 20px
  title-sm:
    fontFamily: Pretendard
    fontSize: 14.5px
    fontWeight: "700"
    lineHeight: 20px
  body-sm:
    fontFamily: Pretendard
    fontSize: 12.5px
    fontWeight: "400"
    lineHeight: 18px
  meta-sm:
    fontFamily: Pretendard
    fontSize: 11px
    fontWeight: "400"
    lineHeight: 16px
  badge-label:
    fontFamily: Pretendard
    fontSize: 10.5px
    fontWeight: "600"
    lineHeight: 14px
  chip-label:
    fontFamily: Pretendard
    fontSize: 12.5px
    fontWeight: "400"
    lineHeight: 18px
rounded:
  sm: 8px
  DEFAULT: 12px
  md: 16px
  lg: 20px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  section: 64px
shadows:
  sm: "0 1px 2px rgba(75,54,21,0.06), 0 1px 3px rgba(75,54,21,0.08)"
  md: "0 4px 12px rgba(75,54,21,0.12)"
  lg: "0 12px 32px rgba(75,54,21,0.18)"
breakpoints:
  mobile: "0–639px, 1열"
  tablet: "640–1023px, 2열"
  desktop: "1024px 이상, 3열"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.on-primary-container}"
    textColor: "{colors.on-primary}"
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    border: "1px solid {colors.secondary}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
  card-event:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    shadow: "{shadows.sm}"
  card-event-hover:
    shadow: "{shadows.md}"
  badge-meta:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.meta}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background-strong}"
    border: "1px solid {colors.outline}"
    typography: "{typography.body}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
  nav-link-active:
    textColor: "{colors.primary}"
    border-bottom: "2px solid {colors.primary}"
  button-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.button}"
    fontSize: 14px
    rounded: "{rounded.DEFAULT}"
    padding: 12px 22px
  button-cta-hover:
    backgroundColor: "{colors.on-accent-container}"
  filter-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    border: "1px solid {colors.outline}"
    typography: "{typography.chip-label}"
    rounded: "{rounded.full}"
    padding: 6px 14px
  filter-chip-active:
    backgroundColor: "{colors.accent}"
    border: "1px solid {colors.accent}"
    textColor: "{colors.on-accent}"
  badge-category:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-background}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: 2px 9px
  badge-status-received:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: 2px 9px
  badge-status-progress:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: 2px 9px
  badge-status-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: 2px 9px
  card-post-compact:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.sm}"
    padding: 12px
    gap: 12px
    shadow: "{shadows.sm}"
  textarea-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background-strong}"
    border: "1px solid {colors.outline}"
    typography: "{typography.body}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm}"
    minHeight: 160px
  photo-dropzone:
    backgroundColor: "{colors.surface-variant}"
    border: "1px dashed {colors.outline-strong}"
    textColor: "{colors.on-background}"
    typography: "{typography.meta}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
    minHeight: 120px
  photo-thumb:
    border: "1px solid {colors.outline}"
    rounded: "{rounded.sm}"
    size: 72px
  button-google:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background-strong}"
    border: "1px solid {colors.outline-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.sm} {spacing.md}"
  auth-card:
    backgroundColor: "{colors.surface}"
    border: "1px solid {colors.outline}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    shadow: "{shadows.sm}"
    maxWidth: 360px
  tab-bar:
    backgroundColor: "{colors.surface}"
    border-bottom: "1px solid {colors.outline}"
  tab-item:
    textColor: "{colors.on-background}"
    typography: "{typography.button}"
    padding: "{spacing.sm} {spacing.md}"
    border-bottom: "2px solid transparent"
  tab-item-active:
    textColor: "{colors.primary}"
    border-bottom: "2px solid {colors.primary}"
  status-toggle-inactive:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-background}"
    border: "1px solid {colors.outline}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  status-toggle-received:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  status-toggle-progress:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  status-toggle-done:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
  category-chip-editable:
    backgroundColor: "{colors.surface-variant}"
    textColor: "{colors.on-background}"
    typography: "{typography.badge-label}"
    rounded: "{rounded.full}"
    padding: "{spacing.xs} {spacing.sm}"
---

## Brand & Style

맘숲놀이는 **학부모와 아이를 위한 주말 숲 놀이 모임**이다. 디자인은 화면 안에서도 "숲에 온 것 같은" 안정감을 주는 것을 목표로 한다. 느낌은 한 줄로 정의하면 다음과 같다.

> 따뜻하고 편안한 주말 숲속 놀이터 — 자연스럽고 아이 친화적이며, 과하게 꾸미지 않는 차분함.

스타일은 **Warm Nature / Community** 톤이다. 채도 높은 원색이나 각진 레이아웃 대신, 초록·흙색 계열과 부드러운 곡선을 사용해 아이를 동반한 학부모가 편안하게 훑어볼 수 있는 화면을 만든다. 기존 앱 아이콘([icon-src.svg](icon-src.svg))이 이 톤의 기준점이다 — 초록 배경의 둥근 사각형 위에 흰색 새싹/나뭇잎 모양을 올린 형태이며, 여기서 나온 "둥근 사각형 + 자연 모티프" 언어를 UI 전반에 반영한다.

서비스 "맘숲 목소리함"의 홈 화면은 [home-시안.html](home-시안.html)의 세 시안 중 **안 2(밀도형)**로 확정됐다 — 정보 밀도 높게, 사진은 작은 정사각 썸네일로, 히어로는 강한 한 줄 카피("말하면, 동네가 바뀝니다.")로 간다. 이때 CTA·필터 선택 버튼에 한해 강조색(오렌지)을 추가로 채택했다.

## Colors

- **주색(Primary) `#097A44`**: 참여 신청, 활성 상태, 강조 텍스트, 그리고 처리상태 배지(접수/처리중/완료) 체계에 사용한다.
- **강조색(Accent) `#E8720C`**: "의견 남기기" 같은 CTA 버튼과 필터의 선택된 상태에만 쓰는 두 번째 액션 컬러다. 처리상태 배지 등 의미를 전달하는 색은 계속 주색(초록) 체계를 따르며, 강조색과 섞어 쓰지 않는다 — 강조색은 오직 "지금 누를 수 있는 것"을 표시할 때만 쓴다.
  > ⚠ **접근성 참고**: 강조색 위 흰 글자(`on-accent`)는 실측 대비 약 3.07:1로 WCAG AA 기준(일반 텍스트 4.5:1)에 못 미친다. 필터 칩처럼 글자가 작을수록(12.5px) 더 두드러진다. 지금 밝기를 그대로 쓰고 싶다면 감수해야 할 트레이드오프이고, 기준을 맞추려면 강조색을 `#C55300` 안팎으로 살짝 어둡게 조정하면 대비 4.5:1 이상을 확보할 수 있다(그만큼 채도·밝기는 줄어든다). 어느 쪽을 택할지는 제품 결정이 필요하다.
- **보조색(Secondary) `#4B3615`**: 흙/나무를 연상시키는 색으로, 보조 버튼 테두리, 뱃지(날짜·장소 태그), 그림자 틴트에 사용한다.
- **배경(Background) `#FBF9F4`**: 페이지 전체 배경. 순백(`#FFFFFF`)은 카드나 입력창 같은 "표면(surface)"에만 쓰고, 페이지 배경에는 절대 쓰지 않는다.
- **글자(Text) `#666263`**: 본문 기본 색. 제목처럼 더 강한 대비가 필요한 곳은 `on-background-strong (#3A3735)`을 쓴다.
- **테두리(Outline) `#E4DCC8`**: 카드·입력창 기본 테두리. 포커스나 강조가 필요하면 `outline-strong (#C9BC9E)`.
- **그림자(Shadow)**: 순수 검정 대신 보조색 `#4B3615`을 낮은 투명도로 섞어 따뜻한 톤을 유지한다.

## Typography

기본 서체는 **Pretendard** (fallback: `-apple-system, BlinkMacSystemFont, sans-serif`)를 사용한다. 한글·숫자(날짜, 시간) 혼용 가독성이 좋고, 굵기 단계가 넓어 아래 4단계 위계에 잘 맞는다.

| 단계 | 토큰 | 크기 / 굵기 | 용도 |
|---|---|---|---|
| 제목(대) | `headline-lg` | 32px / 700 | 페이지 대표 타이틀 |
| 제목(소) | `headline-md` | 22px / 700 | 섹션 제목 (예: "이번 주 모임") |
| 본문 | `body` | 16px / 400 | 설명 텍스트, 줄간격 넉넉하게(26px) |
| 메타 | `meta` | 13px / 500 | 날짜·장소·인원 등 보조 정보 |
| 버튼 | `button` | 15px / 600 | 버튼/CTA 라벨 |

목록이 빽빽한 밀도형 화면(예: 홈의 의견 카드 목록)에서는 위 4단계보다 한 단계씩 작은 압축 스케일을 쓴다.

| 단계 | 토큰 | 크기 / 굵기 | 용도 |
|---|---|---|---|
| 카드 제목 | `title-sm` | 14.5px / 700 | 밀도형 카드의 제목 |
| 카드 본문 | `body-sm` | 12.5px / 400 | 밀도형 카드의 본문 발췌 (1줄 말줄임) |
| 카드 메타 | `meta-sm` | 11px / 400 | 밀도형 카드의 작성자·날짜 |
| 배지 라벨 | `badge-label` | 10.5px / 600 | 상태 배지·분야 배지·칩 안의 짧은 글자 |
| 칩 라벨 | `chip-label` | 12.5px / 400 | 홈 목록 필터 칩 |

## Layout & Spacing

간격은 **8px 배수**로 고정한다: `xs 4 · sm 8 · md 16 · lg 24 · xl 40 · section 64`.

- 카드 내부 여백은 `lg(24px)`, 카드 사이 그리드 거터는 `gutter(16px)`를 기본으로 쓴다.
- 섹션과 섹션 사이 세로 간격은 `section(64px)`로 고정해, 스크롤할 때 "다음 놀이 모임" 같은 구획이 뚜렷하게 나뉘도록 한다.
- 컨텐츠는 최대 너비 1120px로 가운데 정렬한다.

### 반응형 3폭

| 화면 | 기준 | 열 수 |
|---|---|---|
| 모바일 | 0–639px | 1열 |
| 태블릿 | 640–1023px | 2열 |
| PC | 1024px 이상 | 3열 |

카드형 콘텐츠(모임 목록, 후기 등)는 이 3단계 그리드를 기본 골격으로 삼는다. 열이 늘어나도 카드 너비가 좁아 사진·설명이 잘리지 않도록 PC에서도 3열을 넘기지 않는다.

## Elevation & Depth (그림자)

그림자 값은 3단계로 고정한다.

- `sm`: 기본 카드 (`0 1px 2px rgba(75,54,21,.06), 0 1px 3px rgba(75,54,21,.08)`)
- `md`: 호버/포커스 시 살짝 떠오르는 느낌 (`0 4px 12px rgba(75,54,21,.12)`)
- `lg`: 모달, 팝업 등 최상위 레이어 (`0 12px 32px rgba(75,54,21,.18)`)

모든 그림자는 보조색(`#4B3615`)을 틴트로 사용해, 회색·검정 그림자로 인한 "차가운" 느낌을 피한다.

## Shapes (모서리)

로고의 둥근 사각형 톤을 이어받아, 각진 모서리(`radius: 0`)는 쓰지 않는다.

- `sm (8px)`: 뱃지 안쪽 요소, 작은 태그
- `DEFAULT (12px)`: 버튼, 입력창
- `md (16px)`: 이미지 썸네일
- `lg (20px)`: 카드
- `full`: 필(pill) 뱃지, 아바타

## Page Skeleton (헤더 · 히어로 · 푸터)

[home-시안.html](home-시안.html) 안 2(밀도형)에서 확정된 그대로 쓴다. 오늘 새로 만드는 화면(글쓰기, 로그인/회원가입, 마이페이지, 관리자)도 전부 이 골격 위에 얹는다 — 헤더·푸터는 모든 화면 공통, 히어로는 홈 전용이다.

### 헤더 (모든 화면 공통)
- 배경 `surface`, 하단 테두리 `outline` 1px, 패딩 12px 20px
- 아이콘 28px + 단체명("맘숲놀이") 15px/700, 간격 10px
- 로그인 상태에서는 헤더 오른쪽에 마이페이지 진입 지점을 둔다. 별도 컴포넌트를 만들지 않고 `tab-item`과 같은 텍스트 스타일을 쓴다.

### 히어로 (홈 화면 전용)
- 배경 `primary-container`, 텍스트 `on-primary-container`, 패딩 36px 20px 28px
- 제목(h1) 28px/800, 부제 14px/400, 우측(모바일은 아래)에 `button-cta` 하나
- 홈이 아닌 화면에는 히어로를 반복하지 않는다. 대신 `headline-md`(22px/700) 크기의 페이지 제목 한 줄로 대체한다.

### 푸터 (모든 화면 공통)
- 상단 테두리 `outline` 1px, 텍스트 12px, 가운데 정렬, 패딩 18px 20px
- 내용: `© 2026 맘숲놀이 · 맘숲 목소리함`

## Components

오늘 함께 만드는 네 가지 공통 기능 — 글 저장하기, 사진 올리기, 로그인 & 회원가입, 처리상태 & 관리자 화면 — 을 기준으로 규격을 정리한다.

### 게시글 카드

기본 단위는 `card-post-compact`다. "글 저장하기"의 네 값과 "사진 올리기" 값이 카드 안에 이렇게 자리 잡는다.

| 자리 | 토큰 | 내용 |
|---|---|---|
| 왼쪽 사진 | `photo-thumb` (64px 정사각) | 업로드한 제보 사진. 사진이 없는 글은 이 자리를 통째로 생략하고 본문이 카드 전체 너비를 쓴다 |
| 배지 줄 | `badge-status-*` + `badge-category` | 처리상태 → 분야 순서. 접수 배지와 분야 배지는 색이 겹치면 안 되므로 서로 다른 토큰을 쓴다(아래 "분야 칩" 참고) |
| 제목 | `title-sm`, 1줄 말줄임 | 글 제목 |
| 본문 | `body-sm`, 1줄 말줄임 | 내용 앞부분 발췌 |
| 메타 | `meta-sm` | 작성자 · 작성시간(`YYYY.MM.DD`) |

카드 내부 여백은 12px, 사진과 본문 사이 간격도 12px, 배지·제목·본문 사이 세로 간격은 4~6px로 촘촘하게 — 밀도형으로 정한 결정을 그대로 따른다.

### 상태 배지 & 상태 변경(관리자)

읽기 전용 배지(`badge-status-received` / `badge-status-progress` / `badge-status-done`)는 누구나 보는 카드·목록에 쓴다. 접수·완료는 색을 채우고, 처리중만 테두리만 남겨 "칠해지는" 진행감을 준다 — 배지 하나만 단독으로 보이는 자리라 헷갈릴 일이 없다.

관리자 [의견 관리] 화면처럼 상태를 "바꾸는" 곳은 다르다. 세 값을 누를 수 있는 버튼 3개(`status-toggle-*`)가 나란히 보이는데, 배지와 똑같이 처리중을 테두리만으로 표시하면 "선택 안 됨"(흰 배경+연한 테두리)과 "처리중 선택됨"(흰 배경+초록 테두리)이 둘 다 "속이 빈" 모양이라 색 차이만으로 구분해야 해서 헷갈린다. 그래서 토글에서는 세 상태 모두 확실히 채운다.

- 기본은 `status-toggle-inactive`(흰 배경 + 옅은 테두리)
- 선택된 버튼만 그 상태 색으로 꽉 채운다 — 접수는 `status-toggle-received`(연한 갈색), 처리중은 `status-toggle-progress`(진한 초록 + 흰 글자), 완료는 `status-toggle-done`(연한 초록)
- 강조색(오렌지)은 쓰지 않는다 — 상태를 보여주는 색은 항상 주색(초록) 체계를 따른다
- 3버튼은 항상 가로 한 줄, 버튼 사이 간격 `spacing.xs(4px)`

### 분야 칩

분야는 쓰이는 자리마다 모양이 다르다.

| 위치 | 토큰 | 특징 |
|---|---|---|
| 카드 위 표시 | `badge-category` | 읽기 전용, 눌리지 않는다. `badge-meta`(보조색 계열)와 다르게 `surface-variant` 톤을 쓴다 — 접수 배지(`secondary-container`)와 색이 겹치면 한 카드 안에서 상태·분야를 구분할 수 없기 때문이다 |
| 홈 목록 필터 | `filter-chip` / `filter-chip-active` | 가로 스크롤, 선택 시 강조색(오렌지) 채움 |
| 관리자 [분야 관리] | `category-chip-editable` | 오른쪽에 삭제(×) 포함. 새 분야는 `input-field` + `button-secondary`("추가")로 만든다 |

분야는 단체마다 개수가 다르고 늘어난다. 세 자리 모두 줄바꿈이나 가로 스크롤로 처리하고, 고정 개수를 가정해 레이아웃을 짜지 않는다.

### 탭

마이페이지([내가 쓴 글] / [내 정보])와 관리자 화면([의견 관리] / [분야 관리])은 모두 2탭 구조다. `tab-bar`(하단 테두리 1px) 안에 `tab-item` 두 개를 정확히 50:50으로 나눠 채운다. 선택된 탭은 `tab-item-active`로, 텍스트와 밑줄 모두 주색(초록)을 쓴다 — 탭 전환은 "이동/보기"이지 CTA가 아니므로 강조색을 쓰지 않는다.

### 버튼

| 용도 | 토큰 | 비고 |
|---|---|---|
| 글 저장하기 제출 | `button-cta` | 화면당 하나뿐인 핵심 행동 |
| 취소 · 뒤로 | `button-secondary` | |
| 구글 로그인/회원가입 | `button-google` | 흰 배경 유지 — 구글 브랜드 가이드라인상 주색·강조색으로 칠하지 않는다 |
| 관리자 상태 변경 | `status-toggle-*` | "상태 배지 & 상태 변경" 참고 |
| 분야 추가 | `button-secondary` | |

### 입력 폼 (글쓰기 · 사진 업로드)

"글 저장하기" 폼은 아래 순서로 구성한다.

1. 제목 — `input-field` 1줄
2. 내용 — `textarea-field` (최소 높이 160px)
3. 사진 — `photo-dropzone`. 비어 있을 때는 "사진 추가" 안내문 + 아이콘을 보여주고, 선택하면 `photo-thumb` 미리보기로 바뀌며 우측 상단에 삭제(×)가 붙는다. 지금 범위는 1장이다.
4. 작성자 / 작성시간 — 입력칸이 아니다. 로그인된 계정 이름과 저장 시각이 자동으로 붙는다. 폼에 노출하더라도 수정 불가능한 읽기 전용 텍스트로만 보여준다.

### 로그인 & 회원가입

`/login`, `/signup`은 같은 골격을 쓰는 게이트 화면이다 — 헤더·푸터는 유지하고, 히어로 대신 가운데 정렬된 `auth-card` 하나만 놓는다.

- `auth-card` 최대 폭 360px. 안에 아이콘 + 서비스명, 한 줄 안내문, `button-google` 하나
- 회원가입도 별도 폼 없이 같은 구글 버튼을 쓴다 — 이메일/비밀번호 입력 필드는 만들지 않는다
- 로그인 후에는 헤더의 진입 지점을 통해 마이페이지(2탭)로 이동한다

## 하지 말 것 (Don'ts)

1. **페이지 배경에 순백(`#FFFFFF`)을 쓰지 않는다.** 항상 `background(#FBF9F4)`. 흰색은 카드·입력창 표면에만 허용.
2. **회색/검정 그림자(`rgba(0,0,0,x)`)를 쓰지 않는다.** 항상 보조색 틴트 그림자(`shadow-tint` 기반)를 쓴다.
3. **각진 모서리(`radius: 0`)를 쓰지 않는다.** 로고와 톤이 어긋난다.
4. **본문 텍스트에 `#666263`보다 연한 회색을 쓰지 않는다.** 배경 대비 접근성(AA) 기준 미달.
5. **PC에서 4열 이상으로 그리드를 늘리지 않는다.** 3열 고정 — 카드가 좁아지면 사진/설명이 잘린다.
6. **카드·버튼 등 인터랙티브 요소 사이 간격을 `gutter(16px)`보다 좁히지 않는다.** 아이를 동반한 부모가 모바일에서 오터치하기 쉽다.
7. **강조색(오렌지)을 처리상태 배지나 일반 강조 텍스트에 쓰지 않는다.** 강조색은 CTA·필터 선택 상태 등 "누를 수 있는 것"에만 쓰고, 의미를 전달하는 상태색은 항상 주색(초록) 체계를 따른다.
8. **구글 로그인 버튼을 주색·강조색으로 칠하지 않는다.** `button-google`은 항상 흰 배경 + 테두리 — 구글 브랜드 가이드라인을 따른다.
9. **작성자·작성시간을 사용자가 직접 입력하는 칸으로 만들지 않는다.** 둘 다 로그인 계정과 서버 시각에서 자동으로 채운다.
