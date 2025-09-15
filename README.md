# Next.js cơ bản — Starter project

Hướng dẫn nhanh để chạy dự án và giải thích các phần chính.

Yêu cầu: Node.js 18+ và npm/yarn

Chạy dự án:

1. Cài dependencies:

   npm install

2. Chạy chế độ dev:

   npm run dev

Xem: http://localhost:3000

Các phần chính trong dự án:

- `package.json`: scripts và dependencies.
- `tsconfig.json`: cấu hình TypeScript.
- `next.config.js`: cấu hình Next.js.
- `tailwind.config.js` / `postcss.config.js`: cấu hình Tailwind CSS.
- `src/app/layout.tsx`: layout gốc (app router) chứa global styles.
- `src/app/page.tsx`: trang index (trang chủ).
- `src/app/about/page.tsx`: trang About.
- `src/pages/api/hello.ts`: API route (ví dụ trả JSON).
- `src/app/globals.css`: CSS toàn cục, dùng Tailwind directives.

Ghi chú: Sau khi cài xong, Next.js sẽ build và phục vụ trang. Nếu bạn muốn tôi chạy một kiểm tra nhanh (cài dependencies và start dev server) thì cho tôi biết và tôi sẽ chạy các lệnh trong terminal cho bạn.
