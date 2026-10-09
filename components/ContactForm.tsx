"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-line/70 p-8 text-center">
        <p className="text-sm text-amber">Đã gửi</p>
        <p className="mt-2 text-muted">
          Cảm ơn bạn đã liên hệ. Đây là bản demo nên tin nhắn chưa được gửi
          đi thật — kết nối API hoặc email service khi triển khai thật.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="max-w-md space-y-5"
    >
      <div>
        <label htmlFor="name" className="block text-sm text-muted">
          Họ tên
        </label>
        <input
          id="name"
          required
          className="mt-2 w-full border border-line/70 bg-panel px-3 py-2 text-cream outline-none focus:border-amber"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-2 w-full border border-line/70 bg-panel px-3 py-2 text-cream outline-none focus:border-amber"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-muted">
          Nội dung
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-2 w-full border border-line/70 bg-panel px-3 py-2 text-cream outline-none focus:border-amber"
        />
      </div>
      <Button type="submit">Gửi liên hệ</Button>
    </form>
  );
}
