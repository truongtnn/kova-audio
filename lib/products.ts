export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  oldPrice?: number;
  category: "Tai nghe nhét tai" | "Tai nghe trùm đầu" | "Loa" | "Phụ kiện";
  glyph: "ring" | "cup" | "wave" | "dock" | "shield" | "case";
  description: string;
  specs: [string, string][];
};

export const products: Product[] = [
  {
    slug: "dial-one",
    name: "The Dial One",
    tagline: "Tai nghe không dây có núm vặn analog thật",
    price: 4290000,
    oldPrice: 5050000,
    category: "Tai nghe nhét tai",
    glyph: "ring",
    description:
      "Sản phẩm mở đầu dòng Dial: một chiết áp cơ thật thay cho cảm ứng, cho phép chỉnh âm lượng chính xác đến từng nấc mà không cần nhìn màn hình.",
    specs: [
      ["Driver", "40mm, màng titan phủ PU"],
      ["Đáp tuyến tần số", "18Hz – 22kHz"],
      ["Chống nước", "IPX5"],
      ["Kết nối", "Bluetooth 5.3, độ trễ 60ms"],
      ["Pin tai nghe", "8 giờ / lần sạc"],
      ["Pin kèm hộp sạc", "32 giờ tổng cộng"],
      ["Trọng lượng", "5.8g mỗi bên"],
    ],
  },
  {
    slug: "dial-mini",
    name: "The Dial Mini",
    tagline: "Bản nhỏ gọn, cùng núm vặn thu nhỏ 220 độ",
    price: 2590000,
    category: "Tai nghe nhét tai",
    glyph: "case",
    description:
      "Giữ nguyên núm vặn cơ nhưng thu gọn kích thước 30%, hướng đến người cần tai nghe nhẹ để đeo cả ngày.",
    specs: [
      ["Driver", "28mm"],
      ["Đáp tuyến tần số", "20Hz – 20kHz"],
      ["Chống nước", "IPX4"],
      ["Kết nối", "Bluetooth 5.3"],
      ["Pin tai nghe", "6 giờ / lần sạc"],
      ["Pin kèm hộp sạc", "24 giờ tổng cộng"],
      ["Trọng lượng", "4.1g mỗi bên"],
    ],
  },
  {
    slug: "dial-over",
    name: "The Dial Over",
    tagline: "Tai nghe trùm đầu, núm vặn đặt trên vành tai phải",
    price: 5890000,
    category: "Tai nghe trùm đầu",
    glyph: "cup",
    description:
      "Driver lớn hơn cho âm trầm sâu, đệm tai bằng da lộn, núm vặn được đặt ở vị trí ngón trỏ tự nhiên chạm tới khi đưa tay lên tai.",
    specs: [
      ["Driver", "50mm, màng titan phủ PU"],
      ["Đáp tuyến tần số", "15Hz – 24kHz"],
      ["Chống ồn chủ động", "Có, 2 mức"],
      ["Kết nối", "Bluetooth 5.3, jack 3.5mm có dây"],
      ["Pin", "40 giờ (ANC bật)"],
      ["Trọng lượng", "268g"],
    ],
  },
  {
    slug: "dial-speaker",
    name: "Dial Speaker",
    tagline: "Loa để bàn, núm vặn cỡ lớn thay cho remote",
    price: 3190000,
    category: "Loa",
    glyph: "wave",
    description:
      "Một chiếc loa để bàn với núm vặn nhôm nguyên khối đường kính 4cm — vặn để chỉnh âm lượng, nhấn để tạm dừng.",
    specs: [
      ["Công suất", "30W RMS"],
      ["Driver", "1 woofer 3 inch + 1 tweeter"],
      ["Kết nối", "Bluetooth 5.3, AUX, USB-C"],
      ["Pin", "18 giờ ở mức 50% âm lượng"],
      ["Chống nước", "IPX6"],
      ["Trọng lượng", "890g"],
    ],
  },
  {
    slug: "dial-dock",
    name: "Dial Dock",
    tagline: "Đế sạc kiêm núm chỉnh âm lượng cho laptop",
    price: 1890000,
    category: "Phụ kiện",
    glyph: "dock",
    description:
      "Cắm USB-C vào laptop, đặt Dial Dock trên bàn để có một núm vặn âm lượng vật lý cho hệ thống — không cần phần mềm.",
    specs: [
      ["Kết nối", "USB-C (plug and play)"],
      ["Tương thích", "Windows, macOS"],
      ["Chất liệu", "Nhôm phay CNC"],
      ["Kích thước", "Ø52mm x 20mm"],
      ["Trọng lượng", "96g"],
    ],
  },
  {
    slug: "dial-case",
    name: "Dial Case",
    tagline: "Hộp sạc dự phòng cho The Dial One",
    price: 690000,
    category: "Phụ kiện",
    glyph: "shield",
    description:
      "Hộp thay thế hoặc dự phòng cho The Dial One, giữ nguyên núm vặn để chỉnh âm lượng ngay cả khi đang sạc trong hộp.",
    specs: [
      ["Dung lượng pin", "600mAh"],
      ["Sạc", "USB-C, hỗ trợ sạc không dây Qi"],
      ["Tương thích", "The Dial One, The Dial Mini"],
      ["Trọng lượng", "42g"],
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatVND(amount: number): string {
  return amount.toLocaleString("vi-VN") + "đ";
}
