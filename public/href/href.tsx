// header href
export const headerHref = [
  {
    title: "농행동행",
    href: "/pages/intro",
    subMenu: [
      { title: "농행동행 소개", href: "/pages/intro/nonghang" },
      { title: "농촌관광 소개", href: "/pages/intro/tour" },
    ],
  },
  {
    title: "농촌여행",
    href: "/pages/trip",
    subMenu: [
      { title: "농촌관광", href: "/pages/trip/tour" },
      { title: "농촌체험", href: "/pages/trip/exp" },
      { title: "농촌숙박", href: "/pages/trip/lodg" },
    ],
  },
  {
    title: "기획상품",
    href: "/pages/item",
    subMenu: [],
  },
  {
    title: "커뮤니티",
    href: "/pages/commu",
    subMenu: [
      { title: "공지사항", href: "/pages/commu/notification" },
      { title: "농행후기", href: "/pages/commu/review" },
      { title: "고객문의", href: "/pages/commu/inquiry" },
    ],
  },
];

// nav href
export const introHref = {
  mainMenu: { href: "/pages/intro", title: "농행동행" },
  subMenu: [
    { href: "/pages/intro/nonghang", title: "농행동행 소개" },
    { href: "/pages/intro/tour", title: "농촌관광 소개" },
  ],
};
export const tripHref = {
  mainMenu: { href: "/pages/trip", title: "농촌여행" },
  subMenu: [
    { href: "/pages/trip/tour", title: "농촌관광" },
    { href: "/pages/trip/exp", title: "농촌체험" },
    { href: "/pages/trip/lodg", title: "농촌숙박" },
  ],
};
export const commuHref = {
  mainMenu: { href: "/page/cummu", title: "커뮤니티" },
  subMenu: [
    { href: "/pages/commu/notification", title: "공지사항" },
    { href: "/pages/commu/review", title: "농행후기" },
    { href: "/pages/commu/inquiry", title: "고객문의" },
  ],
};
export const itemHref = {
  mainMenu: { title: "기획상품", href: "/pages/item" },
  subMenu: [],
};
export const mypageHref = {
  mainMenu: { title: "마이페이지", href: "/pages/mypage" },
  subMenu: [
    { href: "/pages/mypage/reserve", title: "최근예약" },
    { href: "/pages/mypage/edit", title: "회원정보수정" },
  ],
};
export const acountHref = {
  mainMenu: { title: "마이페이지", href: "/pages/acount/login" },
  subMenu: [
    { href: "/pages/acount/login", title: "로그인" },
    { href: "/pages/acount/join", title: "회원가입" },
    { href: "/pages/acount/findid", title: "아이디찾기" },
    { href: "/pages/acount/findpass", title: "비밀번호찾기" },
  ],
};
export const adminHref = {
  mainMenu: { title: "관리자 페이지", href: "/pages/admin" },
  subMenu: [
    { href: "/pages/admin/tour", title: "관광등록" },
    { href: "/pages/admin/experience", title: "체험등록" },
    { href: "/pages/admin/room", title: "숙소등록" },
  ],
};

// footer href
export const footerHref = [
  { href: "/", title: "소개" },
  { href: "/", title: "이벤트" },
  { href: "/", title: "이용약관" },
  { href: "/", title: "개인정보처리방침" },
  { href: "/", title: "이메일수집거부" },
  { href: "/", title: "고객문의" },
];
