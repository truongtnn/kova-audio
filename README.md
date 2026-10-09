# KOVA AUDIO — Website nhiều trang

Website bán đồ công nghệ (dòng tai nghe/loa "Dial") xây bằng Next.js 14
(App Router) + TypeScript + Tailwind CSS. Giỏ hàng lưu ở localStorage,
không cần backend.

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

## Các trang

| Route | Nội dung |
|---|---|
| `/` | Trang chủ — hero có khung ảnh chạy tự động qua 4 sản phẩm |
| `/products` | Danh sách sản phẩm, có bộ lọc theo danh mục + sắp xếp theo giá/tên |
| `/products/[slug]` | Chi tiết sản phẩm + nút thêm vào giỏ |
| `/cart` | Giỏ hàng, chỉnh số lượng, "Đặt hàng" sẽ chuyển sang `/thank-you` |
| `/thank-you` | Trang cảm ơn riêng sau khi đặt hàng, hiện tóm tắt đơn hàng |
| `/about` | Giới thiệu thương hiệu, timeline |
| `/contact` | Form liên hệ (demo, chưa nối API thật) |

## Cấu trúc project

```
app/
  layout.tsx                # bọc CartProvider, font, metadata gốc
  page.tsx                  # trang chủ
  not-found.tsx             # trang 404 tuỳ chỉnh
  globals.css
  products/page.tsx         # danh sách sản phẩm (lọc/sắp xếp qua ProductsExplorer)
  products/[slug]/page.tsx  # chi tiết sản phẩm
  cart/page.tsx
  thank-you/page.tsx        # trang cảm ơn, đọc query ?total=&items=
  about/page.tsx
  contact/page.tsx
components/
  ui/Button.tsx              # Button + LinkButton dùng chung (variant: primary/outline/ghost/link)
  ui/Section.tsx              # wrapper max-width + padding dùng chung cho mọi trang
  PageHeader.tsx               # pattern "eyebrow + tiêu đề + mô tả" dùng chung
  Header.tsx, MobileMenu.tsx, Footer.tsx
  Hero.tsx, HeroCarousel.tsx   # khung ảnh chạy tự động qua 4 sản phẩm ở hero
  DialGraphic.tsx, ProductGlyph.tsx  # minh hoạ SVG cho sản phẩm (xem lưu ý bên dưới)
  ProductShowcase.tsx, SpecSheet.tsx, Voices.tsx, Preorder.tsx
  ProductCard.tsx, ProductsExplorer.tsx  # lưới sản phẩm + bộ lọc/sắp xếp
  AddToCartButton.tsx, CartIndicator.tsx, CartView.tsx
  ContactForm.tsx
context/
  CartContext.tsx            # state giỏ hàng, đồng bộ localStorage
lib/
  products.ts                 # dữ liệu 6 sản phẩm + helper format giá
```

## Tuỳ chỉnh nhanh

- Thêm/sửa sản phẩm: sửa mảng `products` trong `lib/products.ts` — danh mục và bộ lọc trên `/products` tự cập nhật theo dữ liệu này.
- Đổi màu thương hiệu: `tailwind.config.ts`.
- Đổi style nút bấm ở toàn site: sửa `components/ui/Button.tsx` (một chỗ, áp dụng mọi nơi).
- Nối form liên hệ với email thật: sửa `handleSubmit` trong `components/ContactForm.tsx` để gọi API/route handler thay vì chỉ set state.
- Nối thanh toán thật: thay `handleCheckout` trong `components/CartView.tsx` bằng tích hợp cổng thanh toán (VNPay, Momo, Stripe...) trước khi chuyển sang `/thank-you`.

## Về hình ảnh sản phẩm

Hiện tại sản phẩm dùng minh hoạ SVG (`ProductGlyph.tsx`, `DialGraphic.tsx`) thay vì ảnh
chụp thật, vì đây là thương hiệu và sản phẩm hư cấu — không có ảnh thật để dùng, và
dùng ảnh chụp có sẵn trên mạng cho sản phẩm không tồn tại sẽ gây hiểu nhầm/dính bản
quyền. Khi bạn có ảnh sản phẩm thật (chụp hoặc từ nhà cung cấp), thay thế bằng cách:

1. Đặt file ảnh vào `public/products/<slug>.jpg`.
2. Thêm field `image: "/products/<slug>.jpg"` vào từng sản phẩm trong `lib/products.ts`.
3. Dùng component `next/image` thay cho `<ProductGlyph />` ở `ProductCard.tsx`,
   `app/products/[slug]/page.tsx`, và `HeroCarousel.tsx`.

## Lưu ý

Vì môi trường tạo project này không có mạng nên chưa chạy được `npm install`
để kiểm tra build thực tế — code đã được rà soát thủ công, nhưng bạn nên
chạy `npm run build` sau khi cài đặt để chắc chắn không có lỗi kiểu dữ liệu.
