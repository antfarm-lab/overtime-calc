'use client'

import { useState } from "react";

export default function Home() {
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [overtimeRate, setOvertimeRate] = useState<number | null>(null);
  const [overtimePay, setOvertimePay] = useState<number | null>(null);
  const score =
  overtimePay === null
    ? 0
    : overtimePay >= 50000
    ? 100
    : overtimePay >= 30000
    ? 90
    : overtimePay >= 20000
    ? 80
    : overtimePay >= 10000
    ? 70
    : overtimePay >= 5000
    ? 60
    : 50;

const stars =
  score >= 90 ? 5 :
  score >= 80 ? 4 :
  score >= 70 ? 3 :
  score >= 60 ? 2 : 1;

const rank =
  score >= 90 ? "S" :
  score >= 80 ? "A" :
  score >= 70 ? "B" :
  score >= 60 ? "C" : "D";
  const [premiumPercent, setPremiumPercent] = useState("25");

  const calculate = () => {
    const w = Number(wage);
const h = Number(hours);
const premium = Number(premiumPercent) || 0;

const rate = w * (1 + premium / 100);
const pay = rate * h;

    setOvertimeRate(rate);
    setOvertimePay(pay);
  };

  const reset = () => {
    setWage("");
    setHours("");
    setOvertimeRate(null);
    setOvertimePay(null);
    setPremiumPercent("25");
  };
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "割増率は変更できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。このツールでは25%・50%・60%の割増率を選択して計算できます。",
      },
    },
    {
      "@type": "Question",
      name: "給与明細の確認にも使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい。実際の給与明細と照らし合わせる目安として利用できます。",
      },
    },
    {
      "@type": "Question",
      name: "残業時間は1分単位で計算されますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "原則として労働時間は1分単位で計算します。1日ごとに15分・30分未満を一律に切り捨てる処理は認められていません。ただし、1か月の時間外労働などの合計時間については、30分未満を切り捨て、30分以上を1時間に切り上げる端数処理が認められています。",
      },
    },
  ],
};
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqStructuredData),
  }}
/>
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6 w-full">

        <h1 className="text-3xl font-bold text-center mb-6">
          残業代計算ツール
        </h1>

        <div className="space-y-4">

          <input
            type="number"
            placeholder="時給（円）"
            value={wage}
            onChange={(e) => setWage(e.target.value)}
            className="w-full border p-3 rounded"
          />

          <input
            type="number"
            placeholder="残業時間"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full border p-3 rounded"
          />
<div>
  <label className="mb-1 block text-sm text-gray-600">
    割増率（%）
  </label>

  <input
    type="number"
    value={premiumPercent}
    onChange={(e) => setPremiumPercent(e.target.value)}
    className="w-full border p-3 rounded"
    placeholder="例：25"
  />

  <div className="mt-2 grid grid-cols-3 gap-2">
    {["25", "35", "50"].map((value) => (
      <button
        key={value}
        type="button"
        onClick={() => setPremiumPercent(value)}
        className={`rounded-lg border px-3 py-2 text-sm font-bold ${
          premiumPercent === value
            ? "border-black bg-black text-white"
            : "border-gray-300 bg-white text-gray-700"
        }`}
      >
        {value}%
      </button>
    ))}
  </div>
</div>
          <button
            onClick={calculate}
            className="w-full bg-blue-600 text-white p-3 rounded"
          >
            計算する
          </button>

          <button
            onClick={reset}
            className="w-full bg-gray-400 text-white p-3 rounded"
          >
            リセット
          </button>

          {overtimeRate !== null && overtimePay !== null && (
  <div className="mt-6 rounded-xl bg-gray-50 p-5">
    <p className="text-sm text-gray-600">
  時給{Number(wage).toLocaleString()}円 × {premiumPercent}%割増 × 残業{hours}時間
</p>

    <p className="mt-4 text-sm text-gray-600">残業時給</p>
    <p className="text-2xl font-bold">
      {overtimeRate.toLocaleString()}円
    </p>

    <p className="mt-4 text-sm text-gray-600">残業代合計</p>
    <p className="text-3xl font-bold">
      {overtimePay.toLocaleString()}円
    </p>
    <div className="mt-4 rounded-xl border bg-white p-5">
  <p className="text-xs font-bold text-gray-500">
    ANT FARM SCORE
  </p>

  <div className="mt-2 flex items-end justify-between">
    <div>
      <span className="text-3xl font-bold">{score}</span>
      <span className="text-sm text-gray-500"> /100</span>
    </div>

    <div className="text-yellow-500">
      {"★".repeat(stars)}
      <span className="text-gray-300">
        {"★".repeat(5 - stars)}
      </span>
    </div>
  </div>

  <p className="mt-1 text-sm font-bold">
    ランク：{rank}
  </p>

  <div className="mt-4 border-t pt-4">
    <p className="text-xs font-bold text-gray-500">
      SCORE基準
    </p>

    <ul className="mt-2 space-y-1 text-xs text-gray-600">
      <li>★★★★★：50,000円以上</li>
      <li>★★★★★：30,000円以上</li>
      <li>★★★★☆：20,000円以上</li>
      <li>★★★☆☆：10,000円以上</li>
      <li>★★☆☆☆：5,000円以上</li>
      <li>★☆☆☆☆：5,000円未満</li>
    </ul>
  </div>
</div>
  </div>
)}
        </div>
<section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    残業代を事前に確認することが重要な理由
  </h2>

  <p className="mb-3">
    残業をした場合、通常の時給より割増された金額で残業代が計算されます。
  </p>

  <p className="mb-3">
    事前に残業代を確認することで、月の収入見込みや働き方を把握しやすくなります。
  </p>

  <p>
   この残業代計算ツールでは、時給と残業時間を入力するだけで、
25%・50%・60%の割増率に応じた残業時給と残業代合計を自動計算できます。
  </p>
 
</section>
<section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      残業代計算ツールの使い方
    </h2>
    <p>
  この残業代計算ツールは、時給と残業時間を入力するだけで、
  25%割増で計算した残業時給と残業代の目安を自動計算できる無料ツールです。
  アルバイト、パート、会社員の残業代確認に使えます。
</p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      こんな人におすすめ
    </h2>
    <p>
      残業代がいくらになるか確認したい方、給与明細の金額をチェックしたい方、
      副業やアルバイトで追加収入を計算したい方におすすめです。
      事前に残業代を把握することで、収入の見通しを立てやすくなります。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      計算例
    </h2>
    <p>
      例えば時給1200円で残業時間が10時間、割増率が25%の場合、
      残業代は15,000円になります。
      通常時給だけでなく、割増率を含めた金額を確認できます。
    </p>
  </div>
<div>
  <h2 className="text-2xl font-bold mb-3">
    残業代の計算方法
  </h2>

  <p className="mb-3">
    このツールでは、通常の時給に25%の割増を加えて残業時給を計算し、
    残業時間を掛けて残業代の目安を算出しています。
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>残業時給 ＝ 通常時給 × 1.25</li>
    <li>残業代 ＝ 残業時給 × 残業時間</li>
  </ul>

  <p className="mt-3 text-sm text-gray-600">
    実際の割増率や残業代の計算方法は、勤務条件や時間帯などによって異なる場合があります。
    このツールの結果は目安としてご利用ください。
  </p>
</div>
  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
     Q. 割増率は変更できますか？<br />
A. いいえ。このツールでは25%割増で固定して計算しています。<br /><br />

      Q. 給与明細の確認にも使えますか？<br />
      A. はい。実際の給与明細と照らし合わせる目安として使えます。
    </p>
    <br /><br />

Q. 残業時間は1分単位で計算されますか？<br />
A. 原則として労働時間は1分単位で計算します。
1日ごとに15分・30分未満を一律に切り捨てる処理は認められていません。
ただし、1か月の時間外労働などの合計時間については、
30分未満を切り捨て、30分以上を1時間に切り上げる端数処理が認められています。
  </div>

</section>
<section className="mt-10 rounded-xl border bg-white p-5">
 <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>
  </li>
  <li>
    <a href="https://take-home-pay-calc.vercel.app/">
      手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://annual-income-calc.vercel.app/">
      年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://bonus-calc-six.vercel.app/">
      ボーナス手取り計算ツール
    </a>
  </li>
  <li>
    <a href="https://monthly-salary-calc.vercel.app/">
      月給計算ツール
    </a>
  </li>
  <li>
    <a href="https://daily-wage-calc.vercel.app/">
      日給計算ツール
    </a>
  </li>
  <li>
    <a href="https://tax-calc-murex.vercel.app/">
      所得税計算ツール
    </a>
  </li>
  <li>
    <a href="https://hourly-to-annual-calc.vercel.app/">
      時給から年収計算ツール
    </a>
  </li>
  <li>
    <a href="https://working-days-calc.vercel.app/">
      労働日数計算ツール
    </a>
  </li>
</ul>
</section>

<section className="mt-10 bg-white rounded-xl p-6">
  <p className="text-sm text-gray-700 leading-7">
    このサイトでは、仕事・給与・副業に役立つ無料計算ツールを公開しています。
    時給計算・残業代計算・手取り計算・年収計算など、
    日々の収入確認に便利なツールを今後追加していきます。
  </p>
</section>

<div className="mt-6 text-center">
  <a
    href="/privacy-policy"
    className="text-sm text-blue-600 underline"
  >
    プライバシーポリシー
  </a>
</div>

<footer className="mt-6 text-center text-sm text-gray-500">
  ANT FARM Project | Colony B
</footer>
      </div>
    </div>
  );
}