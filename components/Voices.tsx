const voices = [
  {
    quote:
      "Chạy bộ buổi sáng, tay đẫm mồ hôi, cảm ứng thường bấm nhầm. Núm vặn này thì không bao giờ trượt.",
    name: "Minh Anh",
    role: "Runner, TP.HCM",
  },
  {
    quote:
      "Điều chỉnh âm lượng khi đang họp online mà không cần nhìn điện thoại — chi tiết nhỏ nhưng dùng quen rồi khó bỏ.",
    name: "Quốc Bảo",
    role: "Product Designer",
  },
  {
    quote: "Âm bass đủ dày cho nhạc điện tử mà vẫn nghe rõ giọng khi nghe podcast.",
    name: "Thu Hà",
    role: "Sản xuất âm nhạc",
  },
];

export default function Voices() {
  return (
    <section id="voices" className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">
          Người đang dùng nói gì
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {voices.map((v) => (
            <figure key={v.name} className="border-l-2 border-amberDim pl-5">
              <blockquote className="text-muted">&ldquo;{v.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-cream">
                {v.name} <span className="text-muted">— {v.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
