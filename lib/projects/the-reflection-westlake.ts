// ─────────────────────────────────────────────────────────────
//  Project Config: The Reflection Westlake
//  To clone: copy this file, change slug + all text, then
//  register the export in lib/projects/index.ts
// ─────────────────────────────────────────────────────────────

import type { Project } from "./types"

export const theReflectionWestlake: Project = {
  // ── identity ─────────────────────────────────────
  slug: "the-reflection-westlake",
  brand: "ĐỊA ỐC KIẾN HƯNG",
  name: "The Reflection Westlake",
  tagline: "Kiệt tác phản chiếu – Sống xứng tầm thượng lưu bên Hồ Tây",
  city: "Hà Nội",
  address: "3RJ8+924, Phú Thượng, Tây Hồ, Hà Nội, Việt Nam",
  legalStatus: "Đang cập nhật",
  bookingMin: "100.000.000đ",
  hotline: "0857161157",
  zalo: "0857161157",
  // ↓ Thay bằng iframe src thực khi có
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.86756!2d105.8166!3d21.0715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zVMOieSBI4buTLCBIw6AgTuG7mWk!5e0!3m2!1svi!2svn!4v1700000000000",

  // ── hero ─────────────────────────────────────────
  hero: {
    image: "/projects/the-reflection-westlake/hero.jpg",
    subtitle: "Căn hộ cao cấp | Tây Hồ, Hà Nội",
    badge: "Ra mắt độc quyền",
  },

  // ── overview ─────────────────────────────────────
  overview: {
    title: "The Reflection Westlake",
    description:
      "Tòa Nhà Đất Hồ Tây – tổ hợp căn hộ cao cấp kết hợp khách sạn và thương mại dịch vụ, tọa lạc tại lô A khu D1, phường Tây Hồ. Kiến trúc phản chiếu mặt hồ, thiết kế nội thất cao cấp, hạ tầng tiện ích đầy đủ từ hồ bơi, spa đến sky bar.",
    badges: ["Tây Hồ, Hà Nội", "Căn hộ cao cấp", "Kết hợp khách sạn"],
    highlights: [
      { icon: "Home",         label: "Tổng số căn hộ",        value: "154 căn"      },
      { icon: "BedDouble",    label: "Khối khách sạn",         value: "184 phòng"    },
      { icon: "Building2",    label: "Tòa căn hộ",             value: "20 tầng"      },
      { icon: "Hotel",        label: "Tòa khách sạn",          value: "25 tầng"      },
      { icon: "Ruler",        label: "Diện tích đất",          value: "5.423 m²"     },
      { icon: "LayoutGrid",   label: "Tổng diện tích sàn nổi", value: "37.964 m²"    },
      { icon: "BarChart2",    label: "Mật độ xây dựng",        value: "46,6%"        },
      { icon: "Layers",       label: "Tầng hầm",               value: "2 tầng"       },
    ],
    image: "/projects/the-reflection-westlake/overview-location.jpg",
    imageCaption: "Vị trí lô đất – Phú Thượng, Tây Hồ, Hà Nội",
    bullets: [
      { label: "Tên dự án",          value: "Tòa Nhà Đất Hồ Tây" },
      { label: "Tên thương mại",     value: "The Reflection Westlake" },
      { label: "Địa chỉ thửa đất",  value: "Lô A, khu D1, phường Tây Hồ, Hà Nội" },
      { label: "Loại hình",          value: "Căn hộ cao cấp · Khách sạn · TMDV" },
      { label: "Quy mô",             value: "1 tháp 20T (căn hộ) · 1 tháp 25T (khách sạn) · 3T đế TMDV · 2 hầm" },
      { label: "Tổng số căn hộ",     value: "154 căn" },
      { label: "Khối khách sạn",     value: "184 phòng" },
      { label: "Mật độ xây dựng",    value: "46,6% (khối đế) · 30,6% (khối tháp)" },
    ],
    keyMetrics: [
      { value: "154 căn",   label: "Căn hộ"          },
      { value: "184 phòng", label: "Khách sạn"        },
      { value: "5.423 m²",  label: "Diện tích đất"   },
    ],
    accordion: [
      {
        title: "Diện tích & chỉ tiêu quy hoạch",
        items: [
          { label: "Diện tích đất",               value: "5.423 m²" },
          { label: "Diện tích xây dựng",          value: "2.526 m²" },
          { label: "Tổng diện tích sàn nổi",      value: "37.964,2 m² (không gồm hầm & mái kỹ thuật)" },
          { label: "Tổng diện tích sàn hầm",      value: "9.174 m²" },
          { label: "Mật độ xây dựng khối đế",     value: "46,6%" },
          { label: "Mật độ xây dựng khối tháp",   value: "30,6%" },
          { label: "Hệ thống thang",               value: "3 thang cư dân + 1 thang PCCC + 2 thang bộ thoát hiểm" },
        ],
      },
      {
        title: "Khối đế thương mại dịch vụ",
        items: [
          { label: "Tầng 1",  value: "Shop 71,7 m²  ·  TMDV 1: 83 m²" },
          { label: "Tầng 2",  value: "TMDV 1: 496,9 m²  ·  TMDV 3: 729,4 m²" },
          { label: "Tầng 3",  value: "TMDV 2: 324,1 m²  ·  TMDV 35: 406,3 m²" },
        ],
      },
      {
        title: "Tiện ích tầng 4",
        items: [
          { label: "Sàn quan sát & bar ngoài trời", value: "217,4 m²" },
          { label: "Sảnh hồ bơi & tiện ích",        value: "372,2 m²" },
          { label: "Yoga",                           value: "46,9 m²"  },
          { label: "Spa",                            value: "224,3 m²" },
          { label: "Phòng giải trí",                 value: "141,3 m²" },
          { label: "Phòng đa chức năng 1",           value: "131,3 m²" },
          { label: "Phòng đa chức năng 2",           value: "66,1 m²"  },
        ],
      },
    ],
  },

  // ── unit types ────────────────────────────────────
  unitTypes: [
    { type: "1 Phòng ngủ", area: "45 – 55 m²", price: "Từ 4,8 tỷ", pricePerSqm: "~92 tr/m²", badge: "Còn hàng" },
    { type: "2 Phòng ngủ", area: "68 – 85 m²", price: "Từ 7,2 tỷ", pricePerSqm: "~91 tr/m²", badge: "Còn hàng" },
    { type: "3 Phòng ngủ", area: "96 – 120 m²", price: "Từ 10,5 tỷ", pricePerSqm: "~94 tr/m²", badge: "Hạn chế" },
    { type: "Duplex", area: "150 – 180 m²", price: "Từ 18 tỷ", pricePerSqm: "~108 tr/m²", badge: "Giới hạn" },
    { type: "Penthouse", area: "220 – 300 m²", price: "Liên hệ", pricePerSqm: "Liên hệ", badge: "Độc quyền" },
  ],

  // ── amenities ─────────────────────────────────────
  amenities: {
    title: "Tiện ích đẳng cấp",
    description:
      "Hơn 40 tiện ích nội khu được thiết kế theo chuẩn resort 5 sao, mang đến trải nghiệm sống hoàn hảo ngay tại nhà.",
    items: [
      { icon: "Waves", name: "Hồ bơi vô cực", description: "Nhìn ra Hồ Tây tầng 5" },
      { icon: "Dumbbell", name: "Phòng gym & Spa", description: "Diện tích 1.200m²" },
      { icon: "Trees", name: "Công viên nội khu", description: "Mảng xanh 8.000m²" },
      { icon: "Shield", name: "An ninh 24/7", description: "Camera AI + bảo vệ" },
      { icon: "Car", name: "Bãi đỗ xe thông minh", description: "3 tầng hầm – 1.200 xe" },
      { icon: "Utensils", name: "Khu ẩm thực", description: "12 nhà hàng & café" },
      { icon: "School", name: "Trường học liên cấp", description: "Ngay trong khu đô thị" },
      { icon: "Building2", name: "Trung tâm thương mại", description: "Shophouse tầng 1–3" },
      { icon: "Sunset", name: "Sky Lounge", description: "Tầng 44 – view 360°" },
      { icon: "Gamepad2", name: "Khu vui chơi trẻ em", description: "Outdoor & Indoor" },
      { icon: "Coffee", name: "Co-working Space", description: "Làm việc từ nhà tiện nghi" },
      { icon: "Sparkles", name: "Sauna & Jacuzzi", description: "Dành riêng cư dân" },
    ],
  },

  // ── master plan ───────────────────────────────────
  masterPlan: {
    title: "Mặt bằng tổng thể",
    description:
      "Được quy hoạch bởi đội ngũ kiến trúc sư hàng đầu Singapore, mặt bằng The Reflection Westlake tối ưu tầm nhìn và lưu thông không khí tự nhiên cho toàn bộ cư dân.",
    image: "/projects/the-reflection-westlake/masterplan.jpg",
    zones: [
      {
        name: "Tháp A – The Mirror",
        description:
          "45 tầng, 320 căn hộ từ 1PN đến Penthouse. Tầm nhìn trực diện Hồ Tây. Lobby đẳng cấp 5 sao tầng 1 với trần cao 8m.",
      },
      {
        name: "Tháp B – The Reflection",
        description:
          "42 tầng, 280 căn hộ. Hướng Đông Nam, đón nắng sáng tự nhiên. Kết nối trực tiếp với Sky Lounge tầng 44.",
      },
      {
        name: "Tháp C – The Horizon",
        description:
          "38 tầng, 290 căn hộ gồm Duplex và căn tiêu chuẩn. Hướng hồ bơi vô cực và công viên nội khu xanh mát.",
      },
      {
        name: "Podium – Tiện ích cộng đồng",
        description:
          "Tầng 1–5: thương mại, nhà hàng, siêu thị, phòng gym. Tầng 5: hồ bơi vô cực 4.000m² nối liền 3 tháp.",
      },
    ],
  },

  // ── gallery ───────────────────────────────────────
  gallery: {
    title: "Thư viện ảnh",
    images: [
      { src: "/projects/folder/Bể bơi vô cực.jpg", alt: "Bể bơi vô cực", caption: "Bể bơi vô cực" },
      { src: "/projects/folder/Tiện ích.jpg", alt: "Tiện ích", caption: "Tiện ích" },
      { src: "/projects/folder/Gym.jpg", alt: "Gym", caption: "Gym" },
      { src: "/projects/folder/Khu đón trả khách dành cho cư dân.jpg", alt: "Khu đón trả khách dành cho cư dân", caption: "Khu đón trả khách dành cho cư dân" },
      { src: "/projects/folder/Phối cảnh đón ks 5 sao.jpg", alt: "Phối cảnh đón ks 5 sao", caption: "Phối cảnh đón ks 5 sao" },
      { src: "/projects/folder/Vườn sóng.jpg", alt: "Vườn sóng", caption: "Vườn sóng" },
      { src: "/projects/folder/Giới tinh hoa.jpg", alt: "Giới tinh hoa", caption: "Giới tinh hoa" },
      { src: "/projects/folder/Tiện ích 2.jpg", alt: "Tiện ích 2", caption: "Tiện ích 2" },
      { src: "/projects/folder/Sảnh.jpg", alt: "Sảnh", caption: "Sảnh" },
      { src: "/projects/folder/Phối cảnh Lounge ngắm hoàng hôn.jpg", alt: "Phối cảnh Lounge ngắm hoàng hôn", caption: "Phối cảnh Lounge ngắm hoàng hôn" },
    ],
  },

  // ── pricing ───────────────────────────────────────
  pricing: {
    title: "Bảng giá & Chính sách",
    description:
      "Giá bán thực tế sẽ được cập nhật khi mở bán chính thức. Dưới đây là mức giá tham khảo dựa trên phân khúc thị trường khu vực Tây Hồ.",
    units: [
      { type: "1 Phòng ngủ", area: "45 – 55 m²", price: "Từ 4,8 tỷ", pricePerSqm: "~92 tr/m²", available: 45, total: 60, badge: "Đang mở bán" },
      { type: "2 Phòng ngủ", area: "68 – 85 m²", price: "Từ 7,2 tỷ", pricePerSqm: "~91 tr/m²", available: 120, total: 150, badge: "Đang mở bán" },
      { type: "3 Phòng ngủ", area: "96 – 120 m²", price: "Từ 10,5 tỷ", pricePerSqm: "~94 tr/m²", available: 28, total: 80, badge: "Sắp hết" },
      { type: "Duplex", area: "150 – 180 m²", price: "Từ 18 tỷ", pricePerSqm: "~108 tr/m²", available: 8, total: 20, badge: "Giới hạn" },
      { type: "Penthouse", area: "220 – 300 m²", price: "Liên hệ", pricePerSqm: "Liên hệ", available: 3, total: 6, badge: "Độc quyền" },
    ],
    note: "(*) Giá trên chưa bao gồm VAT và phí bảo trì 2%. Chính sách ưu đãi đặc biệt cho 50 khách hàng đầu tiên. Liên hệ hotline để nhận báo giá chính xác và cập nhật nhất.",
  },

  // ── contact ───────────────────────────────────────
  contact: {
    title: "Đăng ký nhận thông tin",
    description:
      "Để lại thông tin, chuyên viên tư vấn của chúng tôi sẽ liên hệ với bạn trong vòng 30 phút.",
    developerName: "Địa Ốc Kiến Hưng",
    developerAddress: "3RJ8+924, Phú Thượng, Tây Hồ, Hà Nội",
    formFields: {
      fullNameLabel: "Họ và tên",
      phoneLabel: "Số điện thoại",
      needLabel: "Nhu cầu",
      needOptions: [
        "Mua để ở",
        "Mua để đầu tư",
        "Thuê căn hộ",
        "Tìm hiểu thông tin",
      ],
      submitLabel: "Đăng ký tư vấn miễn phí",
      successMessage:
        "Cảm ơn bạn đã đăng ký! Chuyên viên tư vấn sẽ liên hệ với bạn trong vòng 30 phút.",
    },
  },

  // ── seo ───────────────────────────────────────────
  seo: {
    title: "The Reflection Westlake – Căn hộ cao cấp Hồ Tây Hà Nội | Địa Ốc Kiến Hưng",
    description:
      "The Reflection Westlake – Tổ hợp căn hộ hạng sang tọa lạc tại Tây Hồ, Hà Nội. 1PN, 2PN, 3PN, Duplex, Penthouse. Giá từ 4,8 tỷ. Hotline: 0857161157.",
    keywords: [
      "The Reflection Westlake",
      "căn hộ Tây Hồ",
      "căn hộ Hà Nội cao cấp",
      "Địa Ốc Kiến Hưng",
      "căn hộ Hồ Tây",
      "mua căn hộ Hà Nội",
      "dự án BĐS Hà Nội 2025",
    ],
    ogImage: "/projects/the-reflection-westlake/og-image.jpg",
  },

  // ── location / connectivity ────────────────────────
  location: {
    panoramaImage: "/projects/the-reflection-westlake/location-panorama.jpg",
    heading: "VỊ TRÍ & KẾT NỐI GIAO THÔNG",
    intro:
      "Dự án The Reflection West Lake tọa lạc tại Lô D1, phường Phú Thượng, quận Tây Hồ, Hà Nội. Sở hữu vị trí đắc địa tại vị trí cửa ngõ của Thủ đô Hà Nội, từ dự án có thể dễ dàng di chuyển vào trung tâm thành phố cũng như các quận huyện vùng ven rất nhanh chóng và thuận tiện.",
    description:
      "Reflection West Lake là nơi sự hiện đại gặp gỡ di sản, nơi chủ nghĩa quốc tế hòa quyện với văn hóa của vùng đất. Dự án mang đến không gian sang trọng kiểu Boutique và phong cách sống tràn đầy năng lượng hòa quyện với các yếu tố tự nhiên của sông, hồ và bầu trời Hà Nội.",
    connectivity: [
      { name: "Khu đô thị Ciputra", km: "1km" },
      { name: "Cầu Nhật Tân", km: "500m" },
      { name: "Sân bay Nội Bài", km: "18km" },
      { name: "Công viên nước Hồ Tây", km: "1km" },
      { name: "Thung lũng hoa Hồ Tây", km: "1.5km" },
      { name: "Chợ Bưởi", km: "4km" },
      { name: "Đại học Quốc Gia", km: "1km" },
      { name: "Bến xe Mỹ Đình", km: "9km" },
      { name: "Khu liên hợp thể thao quốc gia Mỹ Đình", km: "10km" },
      { name: "Bệnh viện E", km: "7km" },
      { name: "Công viên Hòa Bình", km: "4km" },
      { name: "Trường quốc tế LHQ Hà Nội (UNIS)", km: "1km" },
    ],
    travelTime: [
      { label: "Sân bay Nội Bài", value: "~35 phút" },
      { label: "Trung tâm Hoàn Kiếm", value: "~20 phút" },
      { label: "Bến xe Mỹ Đình", value: "~25 phút" },
    ],
  },
}

