"use client"

import Top from '@/components/top/top';
import Loading from '@/app/loading';

import {useState, useEffect} from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Top />
      
    </div>
  );
}