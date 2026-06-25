'use client'

import { useState } from "react";

export default function Home() {
  const [wage, setWage] = useState("");
  const [hours, setHours] = useState("");
  const [overtimeRate, setOvertimeRate] = useState<number | null>(null);
  const [overtimePay, setOvertimePay] = useState<number | null>(null);

  const calculate = () => {
    const w = Number(wage);
    const h = Number(hours);

    const rate = w * 1.25;
    const pay = rate * h;

    setOvertimeRate(rate);
    setOvertimePay(pay);
  };

  const reset = () => {
    setWage("");
    setHours("");
    setOvertimeRate(null);
    setOvertimePay(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
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
            <div className="mt-6 space-y-2 text-lg font-bold">
              <p>残業時給：¥{overtimeRate.toLocaleString()}</p>
              <p>残業代合計：¥{overtimePay.toLocaleString()}</p>
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
    25%割増の残業時給と残業代合計を自動計算できます。
  </p>
</section>

<section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>

  <div className="grid gap-2 text-sm text-blue-600 underline">
    <a href="https://wage-calc-tawny.vercel.app/">
      時給計算ツール
    </a>

    <a href="#">
      手取り計算ツール（準備中）
    </a>

    <a href="#">
      年収計算ツール（準備中）
    </a>
  </div>
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