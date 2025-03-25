import { GridItem } from './grid-model';

export const mockGridItems: GridItem[] = [
  // Type A Items
  {
    type: "A",
    id: "A1",
    name: "Women's Fashion",
    imageUrl: "https://example.com/women-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A2",
    name: "Men's Fashion",
    imageUrl: "https://example.com/men-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A3",
    name: "Kids Fashion",
    imageUrl: "https://example.com/kids-fashion.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A4",
    name: "Sportswear",
    imageUrl: "https://example.com/sports-wear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A5",
    name: "Accessories",
    imageUrl: "https://example.com/accessories.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A6",
    name: "Shoes",
    imageUrl: "https://example.com/shoes.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A7",
    name: "Bags",
    imageUrl: "https://example.com/bags.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A8",
    name: "Jewelry",
    imageUrl: "https://example.com/jewelry.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A9",
    name: "Watches",
    imageUrl: "https://example.com/watches.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A10",
    name: "Underwear",
    imageUrl: "https://example.com/underwear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A11",
    name: "Outdoor",
    imageUrl: "https://example.com/outdoor.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A12",
    name: "Swimwear",
    imageUrl: "https://example.com/swimwear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A13",
    name: "Homewear",
    imageUrl: "https://example.com/homewear.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A14",
    name: "Trendy",
    imageUrl: "https://example.com/trendy.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A15",
    name: "Vintage",
    imageUrl: "https://example.com/vintage.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "A",
    id: "A16",
    name: "Uniform",
    imageUrl: "https://example.com/uniform.jpg",
    children: [],
    parent: undefined
  },

  // Type B Items
  {
    type: "B",
    id: "B1",
    name: "Smartphones",
    imageUrl: "https://example.com/smartphones.jpg",
    children: [
      {
        type: "B",
        id: "B1-1",
        name: "iPhone",
        imageUrl: "https://example.com/iphone.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-2",
        name: "Galaxy",
        imageUrl: "https://example.com/galaxy.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-3",
        name: "Pixel",
        imageUrl: "https://example.com/pixel.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-4",
        name: "Xiaomi",
        imageUrl: "https://example.com/xiaomi.jpg",
        children: [],
        parent: undefined
      },
      {
        type: "B",
        id: "B1-5",
        name: "OnePlus",
        imageUrl: "https://example.com/oneplus.jpg",
        children: [],
        parent: undefined
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B2",
    name: "Laptops",
    imageUrl: "https://example.com/laptops.jpg",
    children: [
      {
        type: "B",
        id: "B2-1",
        name: "MacBook",
        imageUrl: "https://example.com/macbook.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://example.com/laptops.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-2",
        name: "LG Gram",
        imageUrl: "https://example.com/gram.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://example.com/laptops.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-3",
        name: "Galaxy Book",
        imageUrl: "https://example.com/galaxybook.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://example.com/laptops.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-4",
        name: "Lenovo",
        imageUrl: "https://example.com/lenovo.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B2",
          name: "Laptops",
          imageUrl: "https://example.com/laptops.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B2-5",
        name: "Dell",
        imageUrl: "https://example.com/dell.jpg",
        children: [],
        parent: {
          type: "B",
    id: "B2",
    name: "Laptops",
    imageUrl: "https://example.com/laptops.jpg",
    parent: undefined,
    children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B3",
    name: "Tablets",
    imageUrl: "https://example.com/tablets.jpg",
    children: [
      {
        type: "B",
        id: "B3-1",
        name: "iPad",
        imageUrl: "https://example.com/ipad.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://example.com/tablets.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-2",
        name: "Galaxy Tab",
        imageUrl: "https://example.com/galaxytab.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://example.com/tablets.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-3",
        name: "Surface",
        imageUrl: "https://example.com/surface.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://example.com/tablets.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-4",
        name: "Huawei",
        imageUrl: "https://example.com/huawei-tablet.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://example.com/tablets.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B3-5",
        name: "Lenovo Tab",
        imageUrl: "https://example.com/lenovo-tablet.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B3",
          name: "Tablets",
          imageUrl: "https://example.com/tablets.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B4",
    name: "Smartwatches",
    imageUrl: "https://example.com/smartwatches.jpg",
    children: [
      {
        type: "B",
        id: "B4-1",
        name: "Apple Watch",
        imageUrl: "https://example.com/applewatch.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://example.com/smartwatches.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-2",
        name: "Galaxy Watch",
        imageUrl: "https://example.com/galaxywatch.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://example.com/smartwatches.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-3",
        name: "Garmin",
        imageUrl: "https://example.com/garmin.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://example.com/smartwatches.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-4",
        name: "Fitbit",
        imageUrl: "https://example.com/fitbit.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://example.com/smartwatches.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B4-5",
        name: "Mi Band",
        imageUrl: "https://example.com/miband.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B4",
          name: "Smartwatches",
          imageUrl: "https://example.com/smartwatches.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B5",
    name: "Earphones/Headphones",
    imageUrl: "https://example.com/headphones.jpg",
    children: [
      {
        type: "B",
        id: "B5-1",
        name: "AirPods",
        imageUrl: "https://example.com/airpods.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://example.com/headphones.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-2",
        name: "Galaxy Buds",
        imageUrl: "https://example.com/galaxybuds.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://example.com/headphones.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-3",
        name: "Sony",
        imageUrl: "https://example.com/sony-headphones.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://example.com/headphones.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-4",
        name: "Bose",
        imageUrl: "https://example.com/bose.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://example.com/headphones.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B5-5",
        name: "Sennheiser",
        imageUrl: "https://example.com/sennheiser.jpg",
        children: [],
          parent: {
          type: "B",
          id: "B5",
          name: "Earphones/Headphones",
          imageUrl: "https://example.com/headphones.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B6",
    name: "Speakers",
    imageUrl: "https://example.com/speakers.jpg",
    children: [
      {
        type: "B",
        id: "B6-1",
        name: "HomePod",
        imageUrl: "https://example.com/homepod.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://example.com/speakers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-2",
        name: "JBL",
        imageUrl: "https://example.com/jbl.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://example.com/speakers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-3",
        name: "Marshall",
        imageUrl: "https://example.com/marshall.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://example.com/speakers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-4",
        name: "Bose",
        imageUrl: "https://example.com/bose-speaker.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://example.com/speakers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B6-5",
        name: "Sonos",
        imageUrl: "https://example.com/sonos.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B6",
          name: "Speakers",
          imageUrl: "https://example.com/speakers.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B7",
    name: "Cameras",
    imageUrl: "https://example.com/cameras.jpg",
    children: [
      {
        type: "B",
        id: "B7-1",
        name: "Canon",
        imageUrl: "https://example.com/canon.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://example.com/cameras.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-2",
        name: "Nikon",
        imageUrl: "https://example.com/nikon.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://example.com/cameras.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-3",
        name: "Sony",
        imageUrl: "https://example.com/sony-camera.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://example.com/cameras.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-4",
        name: "Fujifilm",
        imageUrl: "https://example.com/fujifilm.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://example.com/cameras.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B7-5",
        name: "GoPro",
        imageUrl: "https://example.com/gopro.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B7",
          name: "Cameras",
          imageUrl: "https://example.com/cameras.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B8",
    name: "Printers",
    imageUrl: "https://example.com/printers.jpg",
    children: [
      {
        type: "B",
        id: "B8-1",
        name: "HP",
        imageUrl: "https://example.com/hp.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://example.com/printers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-2",
        name: "Epson",
        imageUrl: "https://example.com/epson.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://example.com/printers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-3",
        name: "Canon",
        imageUrl: "https://example.com/canon-printer.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://example.com/printers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-4",
        name: "Brother",
        imageUrl: "https://example.com/brother.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://example.com/printers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B8-5",
        name: "Samsung",
        imageUrl: "https://example.com/samsung-printer.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B8",
          name: "Printers",
          imageUrl: "https://example.com/printers.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B9",
    name: "Monitors",
    imageUrl: "https://example.com/monitors.jpg",
    children: [
      {
        type: "B",
        id: "B9-1",
        name: "LG",
        imageUrl: "https://example.com/lg-monitor.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://example.com/monitors.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-2",
        name: "Samsung",
        imageUrl: "https://example.com/samsung-monitor.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://example.com/monitors.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-3",
        name: "Dell",
        imageUrl: "https://example.com/dell-monitor.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://example.com/monitors.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-4",
        name: "BenQ",
        imageUrl: "https://example.com/benq.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://example.com/monitors.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B9-5",
        name: "Acer",
        imageUrl: "https://example.com/acer.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B9",
          name: "Monitors",
          imageUrl: "https://example.com/monitors.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B10",
    name: "Keyboards",
    imageUrl: "https://example.com/keyboards.jpg",
    children: [
      {
        type: "B",
        id: "B10-1",
        name: "Logitech",
        imageUrl: "https://example.com/logitech-keyboard.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://example.com/keyboards.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-2",
        name: "Leopold",
        imageUrl: "https://example.com/leopold.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://example.com/keyboards.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-3",
        name: "ABKO",
        imageUrl: "https://example.com/abko.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://example.com/keyboards.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-4",
        name: "Keychron",
        imageUrl: "https://example.com/keychron.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://example.com/keyboards.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B10-5",
        name: "Ducky",
        imageUrl: "https://example.com/ducky.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B10",
          name: "Keyboards",
          imageUrl: "https://example.com/keyboards.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B11",
    name: "Mice",
    imageUrl: "https://example.com/mice.jpg",
    children: [
      {
        type: "B",
        id: "B11-1",
        name: "Logitech",
        imageUrl: "https://example.com/logitech-mouse.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://example.com/mice.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-2",
        name: "Razer",
        imageUrl: "https://example.com/razer.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://example.com/mice.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-3",
        name: "Magic Mouse",
        imageUrl: "https://example.com/magic-mouse.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://example.com/mice.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-4",
        name: "Xenics",
        imageUrl: "https://example.com/xenics.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://example.com/mice.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B11-5",
        name: "Microsoft",
        imageUrl: "https://example.com/microsoft-mouse.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B11",
          name: "Mice",
          imageUrl: "https://example.com/mice.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B12",
    name: "Routers",
    imageUrl: "https://example.com/routers.jpg",
    children: [
      {
        type: "B",
        id: "B12-1",
        name: "ipTIME",
        imageUrl: "https://example.com/iptime.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://example.com/routers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-2",
        name: "Netgear",
        imageUrl: "https://example.com/netgear.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://example.com/routers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-3",
        name: "TP-Link",
        imageUrl: "https://example.com/tp-link.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://example.com/routers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-4",
        name: "Linksys",
        imageUrl: "https://example.com/linksys.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://example.com/routers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B12-5",
        name: "ASUS",
        imageUrl: "https://example.com/asus-router.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B12",
          name: "Routers",
          imageUrl: "https://example.com/routers.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B13",
    name: "External Storage",
    imageUrl: "https://example.com/external-drives.jpg",
    children: [
      {
        type: "B",
        id: "B13-1",
        name: "Samsung",
        imageUrl: "https://example.com/samsung-ssd.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://example.com/external-drives.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-2",
        name: "WD",
        imageUrl: "https://example.com/wd.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://example.com/external-drives.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-3",
        name: "Seagate",
        imageUrl: "https://example.com/seagate.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://example.com/external-drives.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-4",
        name: "SanDisk",
        imageUrl: "https://example.com/sandisk.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://example.com/external-drives.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B13-5",
        name: "Toshiba",
        imageUrl: "https://example.com/toshiba.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B13",
          name: "External Storage",
          imageUrl: "https://example.com/external-drives.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B14",
    name: "Chargers",
    imageUrl: "https://example.com/chargers.jpg",
    children: [
      {
        type: "B",
        id: "B14-1",
        name: "Apple",
        imageUrl: "https://example.com/apple-charger.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://example.com/chargers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-2",
        name: "Samsung",
        imageUrl: "https://example.com/samsung-charger.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://example.com/chargers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-3",
        name: "Anker",
        imageUrl: "https://example.com/anker.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://example.com/chargers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-4",
        name: "Belkin",
        imageUrl: "https://example.com/belkin.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://example.com/chargers.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B14-5",
        name: "Baseus",
        imageUrl: "https://example.com/baseus.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B14",
          name: "Chargers",
          imageUrl: "https://example.com/chargers.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B15",
    name: "Smart Home Devices",
    imageUrl: "https://example.com/smart-home.jpg",
    children: [
      {
        type: "B",
        id: "B15-1",
        name: "Google Home",
        imageUrl: "https://example.com/google-home.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://example.com/smart-home.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-2",
        name: "Alexa",
        imageUrl: "https://example.com/alexa.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://example.com/smart-home.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-3",
        name: "Philips Hue",
        imageUrl: "https://example.com/philips-hue.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://example.com/smart-home.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-4",
        name: "Ring",
        imageUrl: "https://example.com/ring.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://example.com/smart-home.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B15-5",
        name: "Nest",
        imageUrl: "https://example.com/nest.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B15",
          name: "Smart Home Devices",
          imageUrl: "https://example.com/smart-home.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },
  {
    type: "B",
    id: "B16",
    name: "Gaming Gear",
    imageUrl: "https://example.com/gaming.jpg",
    children: [
      {
        type: "B",
        id: "B16-1",
        name: "Razer",
        imageUrl: "https://example.com/razer-gaming.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://example.com/gaming.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-2",
        name: "Logitech G",
        imageUrl: "https://example.com/logitech-g.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://example.com/gaming.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-3",
        name: "SteelSeries",
        imageUrl: "https://example.com/steelseries.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://example.com/gaming.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-4",
        name: "Cox",
        imageUrl: "https://example.com/cox.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://example.com/gaming.jpg",
          parent: undefined,
          children: []
        }
      },
      {
        type: "B",
        id: "B16-5",
        name: "Corsair",
        imageUrl: "https://example.com/corsair.jpg",
        children: [],
        parent: {
          type: "B",
          id: "B16",
          name: "Gaming Gear",
          imageUrl: "https://example.com/gaming.jpg",
          parent: undefined,
          children: []
        }
      }
    ],
    parent: undefined
  },

  // Type C Items
  {
    type: "C",
    id: "C1",
    name: "Fruits",
    imageUrl: "https://example.com/fruits.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C2",
    name: "Vegetables",
    imageUrl: "https://example.com/vegetables.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C3",
    name: "Meat",
    imageUrl: "https://example.com/meat.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C4",
    name: "Seafood",
    imageUrl: "https://example.com/seafood.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C5",
    name: "Dairy Products",
    imageUrl: "https://example.com/dairy.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C6",
    name: "Snacks",
    imageUrl: "https://example.com/snacks.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C7",
    name: "Beverages",
    imageUrl: "https://example.com/beverages.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C8",
    name: "Instant Food",
    imageUrl: "https://example.com/instant-food.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C9",
    name: "Seasonings",
    imageUrl: "https://example.com/seasonings.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C10",
    name: "Grains",
    imageUrl: "https://example.com/grains.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C11",
    name: "Bakery",
    imageUrl: "https://example.com/bakery.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C12",
    name: "Frozen Food",
    imageUrl: "https://example.com/frozen-food.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C13",
    name: "Side Dishes",
    imageUrl: "https://example.com/side-dishes.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C14",
    name: "Kimchi",
    imageUrl: "https://example.com/kimchi.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C15",
    name: "Nuts",
    imageUrl: "https://example.com/nuts.jpg",
    children: [],
    parent: undefined
  },
  {
    type: "C",
    id: "C16",
    name: "Health Food",
    imageUrl: "https://example.com/health-food.jpg",
    children: [],
    parent: undefined
  }
];
