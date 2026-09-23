# KOVA AUDIO — Landing Page

Landing page cho sản phẩm "The Dial One" (tai nghe không dây có núm vặn analog),
xây bằng Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Cách chạy trên máy

1. Giải nén / clone thư mục này, mở bằng VS Code.
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Chạy dev server:
   ```bash
   npm run dev
   ```
4. Mở http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Cấu trúc project

```
app/
  layout.tsx      # font, metadata gốc
  page.tsx         # ghép các section
  globals.css      # Tailwind + animation núm vặn
components/
  Header.tsx
  Hero.tsx
  DialGraphic.tsx  # SVG núm vặn analog
  ProductShowcase.tsx
  SpecSheet.tsx
  Voices.tsx       # đánh giá người dùng
  Preorder.tsx     # CTA đặt trước
  Footer.tsx
```

## Tuỳ chỉnh nhanh

- Đổi tên thương hiệu / sản phẩm: sửa trong `components/Header.tsx`, `Hero.tsx`, `Footer.tsx`.
- Đổi giá, ngày giao hàng: `components/Preorder.tsx`.
- Đổi thông số kỹ thuật: mảng `specs` trong `components/SpecSheet.tsx`.
- Đổi bảng màu: `tailwind.config.ts` (các màu `amber`, `base`, `panel`, `cream`...).
