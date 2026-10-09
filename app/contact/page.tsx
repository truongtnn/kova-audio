import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Liên hệ — KOVA AUDIO",
};

const contactInfo: [string, string][] = [
  ["Email", "hello@kovaaudio.vn"],
  ["Hotline", "1900 6868"],
  ["Giờ làm việc", "9:00 – 18:00, T2–T7"],
];

export default function ContactPage() {
  return (
    <main>
      <Header />
      <Section py="md">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="text-sm text-amber">Liên hệ</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-cream">
              Có câu hỏi về sản phẩm?
            </h1>
            <p className="mt-4 max-w-sm text-muted">
              Gửi tin nhắn cho đội ngũ KOVA AUDIO, hoặc liên hệ trực tiếp qua
              các kênh dưới đây.
            </p>
            <dl className="mt-8 space-y-3 font-mono text-sm">
              {contactInfo.map(([label, value]) => (
                <div key={label} className="flex gap-3">
                  <dt className="text-muted">{label}</dt>
                  <dd className="text-amber">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ContactForm />
        </div>
      </Section>
      <Footer />
    </main>
  );
}
