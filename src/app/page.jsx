"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <img
          src="./img/logo.png"
          alt="Company Logo"
          className="w-[100px] h-auto"
        />
        <nav>
          <ul className="flex space-x-4 text-blue-600">
            <li>
              <a href="#about" className="hover:underline">
                会社概要
              </a>
            </li>
            <li>
              <a href="#products" className="hover:underline">
                商品
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                ブログ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="bg-gray-100 text-center py-20" id="hero">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            美味しいお米をあなたへ
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            高品質なお米のサブスクサービス
          </p>
          <img
            src="./img/hero-image.jpg"
            alt="A bowl of steamed rice"
            className="mx-auto w-full max-w-[600px] h-auto rounded-md shadow-lg"
          />
        </section>

        <section className="py-20 px-4" id="features">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            お米サブスクリプションのメリット
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-2xl mx-auto">
            <li>毎月新鮮なお米が届く</li>
            <li>自分好みのお米を選べる</li>
            <li>お米のストックを気にする必要がない</li>
            <li>特別なイベントでの限定商品も購入可能</li>
          </ul>
        </section>

        <section className="bg-gray-100 py-20 px-4" id="search">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            製品を検索
          </h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-4">
              <input
                type="text"
                name="search"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="お米の種類、産地、価格帯で検索"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              検索
            </button>
          </form>
        </section>

        <section className="py-20 px-4" id="testimonials">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            喜びの声
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="flex items-center space-x-4">
              <img
                src="./img/testimonial-image.jpg"
                alt="Happy customer testimonial"
                className="w-[75px] h-[75px] rounded-full"
              />
              <p className="text-gray-700">
                「毎月美味しいお米が届くのが楽しみです！」
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="./img/testimonial-image.jpg"
                alt="Happy customer testimonial"
                className="w-[75px] h-[75px] rounded-full"
              />
              <p className="text-gray-700">
                「お米の質がとても高く、家族全員が喜んでいます。」
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-20 px-4" id="logos">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            提携企業
          </h2>
          <div className="flex justify-center items-center space-x-8">
            <img
              src="./img/logo.png"
              alt="Partner company logo"
              className="w-[100px] h-auto"
            />
            <img
              src="./img/logo.png"
              alt="Partner company logo"
              className="w-[100px] h-auto"
            />
            <img
              src="./img/logo.png"
              alt="Partner company logo"
              className="w-[100px] h-auto"
            />
          </div>
        </section>

        <section className="py-20 px-4 text-center" id="cta">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">今すぐ注文</h2>
          <button className="px-8 py-4 bg-green-600 text-white rounded-md hover:bg-green-700">
            注文する
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p className="mb-4">会社名</p>
        <p className="mb-4">&copy; 2023 会社名. All Rights Reserved.</p>
        <div className="space-x-4">
          <a href="#privacy" className="hover:underline">
            プライバシーポリシー
          </a>
          <a href="#terms" className="hover:underline">
            利用規約
          </a>
          <a href="#contact" className="hover:underline">
            お問い合わせ
          </a>
        </div>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-pink-600">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;