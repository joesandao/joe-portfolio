"use client"

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer';

import {useState, useEffect} from 'react'

export default function Top() {
  const [showUTL, setShowUTL] = useState(false);
  const [showER, setShowER] = useState(false);

  useEffect(() => {
    // 0と1を表示した後、1秒後にUTLとERを同時に表示
    const timer = setTimeout(() => {
      setShowUTL(true);
      setShowER(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
    <Navbar />
    <main className="h-screen">
      <h1 className='flex items-center text-9xl justify-center items-center font-bold mt-20'>
        <span className='text-blue-500'>0</span>
        <span className={`transition-opacity duration-500 ${showUTL ? 'opacity-100' : 'opacity-0'}`}>
          UTL
        </span>
        <span className='text-red-500'>1</span>
        <span className={`transition-opacity duration-500 ${showER ? 'opacity-100' : 'opacity-0'}`}>
          ER
        </span>
        </h1>

        <div className="mt-20 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <table className="text-lg">
              <tbody>
                <tr>
                  <td className="w-32 font-semibold text-gray-300 pr-4 pb-4">会社名</td>
                  <td className="text-white pb-4">0UTL1ER株式会社</td>
                </tr>
                <tr>
                  <td className="w-32 font-semibold text-gray-300 pr-4 pb-4">住所</td>
                  <td className="text-white pb-4">東京都千代田区神田松永町13番地 VORT秋葉原II</td>
                </tr>
                <tr>
                  <td className="w-32 font-semibold text-gray-300 pr-4 pb-4">代表取締役</td>
                  <td className="text-white pb-4">黒羽 晟</td>
                </tr>
                <tr>
                  <td className="w-32 font-semibold text-gray-300 pr-4 pb-4">資本金</td>
                  <td className="text-white pb-4">114,514円</td>
                </tr>
                <tr>
                  <td className="w-32 font-semibold text-gray-300 pr-4 pb-4">メール</td>
                  <td className="text-white pb-4">info@0utl1er.tech</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </main>
    <Footer />
  </div>
  );
}