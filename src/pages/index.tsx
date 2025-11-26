import { Nunito } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Removed Geist_Mono

export default function LovePage() {
  return (
    <div
      className={`${nunito.variable} min-h-screen flex flex-col items-center p-6 pt-20`}
      style={{ backgroundColor: "#AAB7F2", fontFamily: "Momo Signature, cursive" }}
    >
      <div className="text-center mb-10">
        <h1
          className="text-4xl font-bold mb-4 animate-bounce"
          style={{ color: "#6B75C7" }}
        >
          💖 Những Điều Chúng Ta Đã Hứa 💖
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: "#5A63AF" }}>
          Một trang nhỏ xinh để nhắc lại những điều dễ thương mà hai đứa mình đã
          dành cho nhau. Cảm ơn em vì đã bước vào cuộc đời anh. 💞
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Anh đã hứa */}
        <div
          className="shadow-xl rounded-2xl p-6"
          style={{ backgroundColor: "#ffffffaa", border: "1px solid #8E9CF2" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#6B75C7" }}>
            Anh đã hứa 💙
          </h2>
          <ul className="space-y-3" style={{ color: "#4E5697" }}>
            <li>1. Xây dựng sự tin tưởng chắc chắn với em</li>
            <li>2. Không làm em thất vọng</li>
            <li>3. Yêu em hết lòng hết dạ</li>
            <li>4. Luôn giải quyết khúc mắc theo hướng mục tiêu chung</li>
            <li>5. Luôn có mặt bất cứ lúc nào em cần</li>
            <li>6. Lúc nào cũng tôn trọng em</li>
            <li>7. Xây dựng sự tin tưởng chắc chắn với em (vì nó quan trọng lắm 💗)</li>
          </ul>
        </div>

        {/* Em đã hứa */}
        <div
          className="shadow-xl rounded-2xl p-6"
          style={{ backgroundColor: "#ffffffaa", border: "1px solid #8E9CF2" }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: "#6B75C7" }}>
            Em đã hứa 💗
          </h2>
          <ul className="space-y-3" style={{ color: "#4E5697" }}>
            <li>1. Em yêu anh như anh yêu em</li>
            <li>2. Không làm anh thất vọng</li>
            <li>3. Anh sẽ không hối hận vì ngày hôm nay đã tỏ tình với em</li>
            <li>4. Có khúc mắc thì gặp trực tiếp hoặc gọi điện để giải quyết, không được im lặng</li>
            <li>5. Em mong anh không phải gượng ép thay đổi để trở thành người em muốn</li>
            <li>6. Nếu em có sai thì anh luôn bao dung và xuống nước</li>
            <li>7. Trust 💞</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl" style={{ color: "#6B75C7" }}>
          Cảm ơn vì chúng ta đã tìm thấy nhau 💐
        </p>
        <p className="mt-2 italic" style={{ color: "#4E5697" }}>
          Anh yêu em rất nhiều 💘
        </p>
      </div>
    </div>
  );
}
