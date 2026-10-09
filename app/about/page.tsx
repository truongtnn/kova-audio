import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Giới thiệu — KOVA AUDIO",
};

const timeline: [string, string][] = [
  ["2022", "Bắt đầu từ một câu hỏi: tại sao thiết bị âm thanh lại bỏ hết các nút vặn vật lý?"],
  ["2023", "Nguyên mẫu đầu tiên của núm vặn analog tích hợp trong tai nghe không dây."],
  ["2025", "The Dial One hoàn thiện sau 14 vòng thử nghiệm chiết áp."],
  ["2026", "Ra mắt trọn bộ dòng Dial: tai nghe, loa và phụ kiện."],
];

export default function AboutPage() {
  return (
    <main>
      <Header />
      <Section py="md">
        <PageHeader
          eyebrow="Giới thiệu"
          title="Chúng tôi tin cảm giác của một nút vặn thật không thể thay thế bằng cảm ứng."
        />
        <p className="mt-6 max-w-prose2 text-muted">
          KOVA AUDIO bắt đầu như một xưởng nhỏ chuyên sửa loa và ampli cũ.
          Càng làm việc với các thiết bị analog đời trước, chúng tôi càng
          nhận ra: núm vặn không chỉ là một cách điều khiển, mà là một cách
          để người dùng cảm nhận chính xác họ đang làm gì — không cần nhìn,
          không cần đoán. Dòng sản phẩm Dial ra đời để mang cảm giác đó vào
          thiết bị không dây hiện đại.
        </p>

        <div className="mt-14 divide-y divide-line/70 border-y border-line/70">
          {timeline.map(([year, text]) => (
            <div key={year} className="grid gap-4 py-6 md:grid-cols-[100px_1fr]">
              <span className="font-mono text-sm text-amber">{year}</span>
              <p className="text-muted">{text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Footer />
    </main>
  );
}
