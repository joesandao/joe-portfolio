"use client"

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer';
import AsciiArt from '@/components/top/AsciiArt';
import CommandAnimation from '@/components/top/CommandAnimation';
import Profile from '@/components/top/Profile';
import BioTable from '@/components/top/BioTable';

import {useState} from 'react'

export default function Top() {
  const commands = ["whoami", "CREATE TABLE `Bio`"];
  const [currentStep, setCurrentStep] = useState(0);

  const handleCommandComplete = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
    <Navbar />
    <main className="min-h-screen">
      <div className="px-[10vw] text-center">
        <AsciiArt />
        {currentStep >= 0 && (
          <CommandAnimation command={commands[0]} onComplete={handleCommandComplete} />
        )}
        <div className='min-h-[200px]'>
          {currentStep >= 1 && <Profile />}
        </div>
        {currentStep >= 2 && (
          <>
            <CommandAnimation command={commands[1]} onComplete={handleCommandComplete} />
          </>
        )}
        <div className='min-h-[200px]'>
        {currentStep >= 3 && (
          <>
            <BioTable />
          </>
        )}
        </div>
        <div className='min-h-[0px]'>
        {currentStep >= 4 && (
          <>
          </>
        )}
        </div>
      </div>
    </main>
    <Footer />
  </div>
  );
}