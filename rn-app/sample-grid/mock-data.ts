import { GridItem } from './grid-model';

export const mockGridItems: GridItem[] = [
  // Type A Items
  {
    type: "A",
    id: "A1",
    name: "여성패션",
    imageUrl: "https://example.com/women-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A2",
    name: "남성패션",
    imageUrl: "https://example.com/men-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A3",
    name: "키즈패션",
    imageUrl: "https://example.com/kids-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A4",
    name: "스포츠웨어",
    imageUrl: "https://example.com/sports-wear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A5",
    name: "액세서리",
    imageUrl: "https://example.com/accessories.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A6",
    name: "신발",
    imageUrl: "https://example.com/shoes.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A7",
    name: "가방",
    imageUrl: "https://example.com/bags.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A8",
    name: "쥬얼리",
    imageUrl: "https://example.com/jewelry.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A9",
    name: "시계",
    imageUrl: "https://example.com/watches.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A10",
    name: "언더웨어",
    imageUrl: "https://example.com/underwear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A11",
    name: "아웃도어",
    imageUrl: "https://example.com/outdoor.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A12",
    name: "수영복",
    imageUrl: "https://example.com/swimwear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A13",
    name: "홈웨어",
    imageUrl: "https://example.com/homewear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A14",
    name: "트렌디",
    imageUrl: "https://example.com/trendy.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A15",
    name: "빈티지",
    imageUrl: "https://example.com/vintage.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A16",
    name: "유니폼",
    imageUrl: "https://example.com/uniform.jpg",
    children: [],
    parent: undefined
  },

  // Type B Items with children
  {
    type: "B",
    id: "B1",
    name: "스마트폰",
    imageUrl: "https://example.com/smartphones.jpg",
    children: [
      {
        type: "B",
        id: "B1-1",
        name: "아이폰",
        imageUrl: "https://example.com/iphone.jpg",
        children: [],
        parent: undefined // 실제 사용시 부모 참조 필요
      },
      {
        type: "B",
        id: "B1-2",
        name: "갤럭시",
        imageUrl: "https://example.com/galaxy.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-3",
        name: "픽셀",
        imageUrl: "https://example.com/pixel.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-4",
        name: "샤오미",
        imageUrl: "https://example.com/xiaomi.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-5",
        name: "원플러스",
        imageUrl: "https://example.com/oneplus.jpg",
        children: [],
        parent: undefined
      }
    ],
    parent: undefined
  },
  // 나머지 Type B 아이템들
  {
    type: "B",
    id: "B2",
    name: "노트북",
    imageUrl: "https://example.com/laptops.jpg",
    children: [
      {
        type: "B",
        id: "B2-1",
        name: "맥북",
        imageUrl: "https://example.com/macbook.jpg",
        children: [],
        parent: "B2"
      },
      {
        type: "B",
        id: "B2-2",
        name: "그램",
        imageUrl: "https://example.com/gram.jpg",
        children: [],
        parent: "B2"
      },
      {
        type: "B",
        id: "B2-3",
        name: "갤럭시북",
        imageUrl: "https://example.com/galaxybook.jpg",
        children: [],
        parent: "B2"
      },
      {
        type: "B",
        id: "B2-4",
        name: "레노버",
        imageUrl: "https://example.com/lenovo.jpg",
        children: [],
        parent: "B2"
      },
      {
        type: "B",
        id: "B2-5",
        name: "델",
        imageUrl: "https://example.com/dell.jpg",
        children: [],
        parent: "B2"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B3",
    name: "태블릿",
    imageUrl: "https://example.com/tablets.jpg",
    children: [
      {
        type: "B",
        id: "B3-1",
        name: "아이패드",
        imageUrl: "https://example.com/ipad.jpg",
        children: [],
        parent: "B3"
      },
      {
        type: "B",
        id: "B3-2",
        name: "갤럭시탭",
        imageUrl: "https://example.com/galaxytab.jpg",
        children: [],
        parent: "B3"
      },
      {
        type: "B",
        id: "B3-3",
        name: "서피스",
        imageUrl: "https://example.com/surface.jpg",
        children: [],
        parent: "B3"
      },
      {
        type: "B",
        id: "B3-4",
        name: "화웨이",
        imageUrl: "https://example.com/huawei-tablet.jpg",
        children: [],
        parent: "B3"
      },
      {
        type: "B",
        id: "B3-5",
        name: "레노버탭",
        imageUrl: "https://example.com/lenovo-tablet.jpg",
        children: [],
        parent: "B3"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B4",
    name: "스마트워치",
    imageUrl: "https://example.com/smartwatches.jpg",
    children: [
      {
        type: "B",
        id: "B4-1",
        name: "애플워치",
        imageUrl: "https://example.com/applewatch.jpg",
        children: [],
        parent: "B4"
      },
      {
        type: "B",
        id: "B4-2",
        name: "갤럭시워치",
        imageUrl: "https://example.com/galaxywatch.jpg",
        children: [],
        parent: "B4"
      },
      {
        type: "B",
        id: "B4-3",
        name: "가민",
        imageUrl: "https://example.com/garmin.jpg",
        children: [],
        parent: "B4"
      },
      {
        type: "B",
        id: "B4-4",
        name: "핏빗",
        imageUrl: "https://example.com/fitbit.jpg",
        children: [],
        parent: "B4"
      },
      {
        type: "B",
        id: "B4-5",
        name: "샤오미밴드",
        imageUrl: "https://example.com/miband.jpg",
        children: [],
        parent: "B4"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B5",
    name: "이어폰/헤드폰",
    imageUrl: "https://example.com/headphones.jpg",
    children: [
      {
        type: "B",
        id: "B5-1",
        name: "에어팟",
        imageUrl: "https://example.com/airpods.jpg",
        children: [],
        parent: "B5"
      },
      {
        type: "B",
        id: "B5-2",
        name: "갤럭시버즈",
        imageUrl: "https://example.com/galaxybuds.jpg",
        children: [],
        parent: "B5"
      },
      {
        type: "B",
        id: "B5-3",
        name: "소니",
        imageUrl: "https://example.com/sony-headphones.jpg",
        children: [],
        parent: "B5"
      },
      {
        type: "B",
        id: "B5-4",
        name: "보스",
        imageUrl: "https://example.com/bose.jpg",
        children: [],
        parent: "B5"
      },
      {
        type: "B",
        id: "B5-5",
        name: "젠하이저",
        imageUrl: "https://example.com/sennheiser.jpg",
        children: [],
        parent: "B5"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B6",
    name: "스피커",
    imageUrl: "https://example.com/speakers.jpg",
    children: [
      {
        type: "B",
        id: "B6-1",
        name: "홈팟",
        imageUrl: "https://example.com/homepod.jpg",
        children: [],
        parent: "B6"
      },
      {
        type: "B",
        id: "B6-2",
        name: "JBL",
        imageUrl: "https://example.com/jbl.jpg",
        children: [],
        parent: "B6"
      },
      {
        type: "B",
        id: "B6-3",
        name: "마샬",
        imageUrl: "https://example.com/marshall.jpg",
        children: [],
        parent: "B6"
      },
      {
        type: "B",
        id: "B6-4",
        name: "보스",
        imageUrl: "https://example.com/bose-speaker.jpg",
        children: [],
        parent: "B6"
      },
      {
        type: "B",
        id: "B6-5",
        name: "소노스",
        imageUrl: "https://example.com/sonos.jpg",
        children: [],
        parent: "B6"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B7",
    name: "카메라",
    imageUrl: "https://example.com/cameras.jpg",
    children: [
      {
        type: "B",
        id: "B7-1",
        name: "캐논",
        imageUrl: "https://example.com/canon.jpg",
        children: [],
        parent: "B7"
      },
      {
        type: "B",
        id: "B7-2",
        name: "니콘",
        imageUrl: "https://example.com/nikon.jpg",
        children: [],
        parent: "B7"
      },
      {
        type: "B",
        id: "B7-3",
        name: "소니",
        imageUrl: "https://example.com/sony-camera.jpg",
        children: [],
        parent: "B7"
      },
      {
        type: "B",
        id: "B7-4",
        name: "후지필름",
        imageUrl: "https://example.com/fujifilm.jpg",
        children: [],
        parent: "B7"
      },
      {
        type: "B",
        id: "B7-5",
        name: "고프로",
        imageUrl: "https://example.com/gopro.jpg",
        children: [],
        parent: "B7"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B8",
    name: "프린터",
    imageUrl: "https://example.com/printers.jpg",
    children: [
      {
        type: "B",
        id: "B8-1",
        name: "HP",
        imageUrl: "https://example.com/hp.jpg",
        children: [],
        parent: "B8"
      },
      {
        type: "B",
        id: "B8-2",
        name: "엡손",
        imageUrl: "https://example.com/epson.jpg",
        children: [],
        parent: "B8"
      },
      {
        type: "B",
        id: "B8-3",
        name: "캐논",
        imageUrl: "https://example.com/canon-printer.jpg",
        children: [],
        parent: "B8"
      },
      {
        type: "B",
        id: "B8-4",
        name: "브라더",
        imageUrl: "https://example.com/brother.jpg",
        children: [],
        parent: "B8"
      },
      {
        type: "B",
        id: "B8-5",
        name: "삼성",
        imageUrl: "https://example.com/samsung-printer.jpg",
        children: [],
        parent: "B8"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B9",
    name: "모니터",
    imageUrl: "https://example.com/monitors.jpg",
    children: [
      {
        type: "B",
        id: "B9-1",
        name: "LG",
        imageUrl: "https://example.com/lg-monitor.jpg",
        children: [],
        parent: "B9"
      },
      {
        type: "B",
        id: "B9-2",
        name: "삼성",
        imageUrl: "https://example.com/samsung-monitor.jpg",
        children: [],
        parent: "B9"
      },
      {
        type: "B",
        id: "B9-3",
        name: "델",
        imageUrl: "https://example.com/dell-monitor.jpg",
        children: [],
        parent: "B9"
      },
      {
        type: "B",
        id: "B9-4",
        name: "벤큐",
        imageUrl: "https://example.com/benq.jpg",
        children: [],
        parent: "B9"
      },
      {
        type: "B",
        id: "B9-5",
        name: "에이서",
        imageUrl: "https://example.com/acer.jpg",
        children: [],
        parent: "B9"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B10",
    name: "키보드",
    imageUrl: "https://example.com/keyboards.jpg",
    children: [
      {
        type: "B",
        id: "B10-1",
        name: "로지텍",
        imageUrl: "https://example.com/logitech-keyboard.jpg",
        children: [],
        parent: "B10"
      },
      {
        type: "B",
        id: "B10-2",
        name: "레오폴드",
        imageUrl: "https://example.com/leopold.jpg",
        children: [],
        parent: "B10"
      },
      {
        type: "B",
        id: "B10-3",
        name: "앱코",
        imageUrl: "https://example.com/abko.jpg",
        children: [],
        parent: "B10"
      },
      {
        type: "B",
        id: "B10-4",
        name: "키크론",
        imageUrl: "https://example.com/keychron.jpg",
        children: [],
        parent: "B10"
      },
      {
        type: "B",
        id: "B10-5",
        name: "덕키",
        imageUrl: "https://example.com/ducky.jpg",
        children: [],
        parent: "B10"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B11",
    name: "마우스",
    imageUrl: "https://example.com/mice.jpg",
    children: [
      {
        type: "B",
        id: "B11-1",
        name: "로지텍",
        imageUrl: "https://example.com/logitech-mouse.jpg",
        children: [],
        parent: "B11"
      },
      {
        type: "B",
        id: "B11-2",
        name: "레이저",
        imageUrl: "https://example.com/razer.jpg",
        children: [],
        parent: "B11"
      },
      {
        type: "B",
        id: "B11-3",
        name: "매직마우스",
        imageUrl: "https://example.com/magic-mouse.jpg",
        children: [],
        parent: "B11"
      },
      {
        type: "B",
        id: "B11-4",
        name: "제닉스",
        imageUrl: "https://example.com/xenics.jpg",
        children: [],
        parent: "B11"
      },
      {
        type: "B",
        id: "B11-5",
        name: "마이크로소프트",
        imageUrl: "https://example.com/microsoft-mouse.jpg",
        children: [],
        parent: "B11"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B12",
    name: "공유기",
    imageUrl: "https://example.com/routers.jpg",
    children: [
      {
        type: "B",
        id: "B12-1",
        name: "ipTIME",
        imageUrl: "https://example.com/iptime.jpg",
        children: [],
        parent: "B12"
      },
      {
        type: "B",
        id: "B12-2",
        name: "넷기어",
        imageUrl: "https://example.com/netgear.jpg",
        children: [],
        parent: "B12"
      },
      {
        type: "B",
        id: "B12-3",
        name: "티피링크",
        imageUrl: "https://example.com/tp-link.jpg",
        children: [],
        parent: "B12"
      },
      {
        type: "B",
        id: "B12-4",
        name: "링크시스",
        imageUrl: "https://example.com/linksys.jpg",
        children: [],
        parent: "B12"
      },
      {
        type: "B",
        id: "B12-5",
        name: "아수스",
        imageUrl: "https://example.com/asus-router.jpg",
        children: [],
        parent: "B12"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B13",
    name: "외장하드",
    imageUrl: "https://example.com/external-drives.jpg",
    children: [
      {
        type: "B",
        id: "B13-1",
        name: "삼성",
        imageUrl: "https://example.com/samsung-ssd.jpg",
        children: [],
        parent: "B13"
      },
      {
        type: "B",
        id: "B13-2",
        name: "WD",
        imageUrl: "https://example.com/wd.jpg",
        children: [],
        parent: "B13"
      },
      {
        type: "B",
        id: "B13-3",
        name: "씨게이트",
        imageUrl: "https://example.com/seagate.jpg",
        children: [],
        parent: "B13"
      },
      {
        type: "B",
        id: "B13-4",
        name: "샌디스크",
        imageUrl: "https://example.com/sandisk.jpg",
        children: [],
        parent: "B13"
      },
      {
        type: "B",
        id: "B13-5",
        name: "도시바",
        imageUrl: "https://example.com/toshiba.jpg",
        children: [],
        parent: "B13"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B14",
    name: "충전기",
    imageUrl: "https://example.com/chargers.jpg",
    children: [
      {
        type: "B",
        id: "B14-1",
        name: "애플",
        imageUrl: "https://example.com/apple-charger.jpg",
        children: [],
        parent: "B14"
      },
      {
        type: "B",
        id: "B14-2",
        name: "삼성",
        imageUrl: "https://example.com/samsung-charger.jpg",
        children: [],
        parent: "B14"
      },
      {
        type: "B",
        id: "B14-3",
        name: "앤커",
        imageUrl: "https://example.com/anker.jpg",
        children: [],
        parent: "B14"
      },
      {
        type: "B",
        id: "B14-4",
        name: "벨킨",
        imageUrl: "https://example.com/belkin.jpg",
        children: [],
        parent: "B14"
      },
      {
        type: "B",
        id: "B14-5",
        name: "베이스어스",
        imageUrl: "https://example.com/baseus.jpg",
        children: [],
        parent: "B14"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B15",
    name: "스마트홈기기",
    imageUrl: "https://example.com/smart-home.jpg",
    children: [
      {
        type: "B",
        id: "B15-1",
        name: "구글홈",
        imageUrl: "https://example.com/google-home.jpg",
        children: [],
        parent: "B15"
      },
      {
        type: "B",
        id: "B15-2",
        name: "알렉사",
        imageUrl: "https://example.com/alexa.jpg",
        children: [],
        parent: "B15"
      },
      {
        type: "B",
        id: "B15-3",
        name: "필립스휴",
        imageUrl: "https://example.com/philips-hue.jpg",
        children: [],
        parent: "B15"
      },
      {
        type: "B",
        id: "B15-4",
        name: "링",
        imageUrl: "https://example.com/ring.jpg",
        children: [],
        parent: "B15"
      },
      {
        type: "B",
        id: "B15-5",
        name: "네스트",
        imageUrl: "https://example.com/nest.jpg",
        children: [],
        parent: "B15"
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B16",
    name: "게이밍기어",
    imageUrl: "https://example.com/gaming.jpg",
    children: [
      {
        type: "B",
        id: "B16-1",
        name: "레이저",
        imageUrl: "https://example.com/razer-gaming.jpg",
        children: [],
        parent: "B16"
      },
      {
        type: "B",
        id: "B16-2",
        name: "로지텍G",
        imageUrl: "https://example.com/logitech-g.jpg",
        children: [],
        parent: "B16"
      },
      {
        type: "B",
        id: "B16-3",
        name: "스틸시리즈",
        imageUrl: "https://example.com/steelseries.jpg",
        children: [],
        parent: "B16"
      },
      {
        type: "B",
        id: "B16-4",
        name: "콕스",
        imageUrl: "https://example.com/cox.jpg",
        children: [],
        parent: "B16"
      },
      {
        type: "B",
        id: "B16-5",
        name: "corsair",
        imageUrl: "https://example.com/corsair.jpg",
        children: [],
        parent: "B16"
      }
    ],
    parent: undefined
  },

  // Type C Items
  {
    type: "C",
    id: "C1",
    name: "과일",
    imageUrl: "https://example.com/fruits.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C2",
    name: "채소",
    imageUrl: "https://example.com/vegetables.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C3",
    name: "육류",
    imageUrl: "https://example.com/meat.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C4",
    name: "수산물",
    imageUrl: "https://example.com/seafood.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C5",
    name: "유제품",
    imageUrl: "https://example.com/dairy.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C6",
    name: "간식",
    imageUrl: "https://example.com/snacks.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C7",
    name: "음료",
    imageUrl: "https://example.com/beverages.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C8",
    name: "즉석식품",
    imageUrl: "https://example.com/instant-food.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C9",
    name: "조미료",
    imageUrl: "https://example.com/seasonings.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C10",
    name: "곡물",
    imageUrl: "https://example.com/grains.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C11",
    name: "빵/제과",
    imageUrl: "https://example.com/bakery.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C12",
    name: "냉동식품",
    imageUrl: "https://example.com/frozen-food.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C13",
    name: "반찬",
    imageUrl: "https://example.com/side-dishes.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C14",
    name: "김치",
    imageUrl: "https://example.com/kimchi.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C15",
    name: "견과류",
    imageUrl: "https://example.com/nuts.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C16",
    name: "건강식품",
    imageUrl: "https://example.com/health-food.jpg",
    children: [],
    parent: undefined
  }
];
