"use client"
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

interface CommandAnimationProps {
  command: string;
  onComplete: () => void;
}

export default function CommandAnimation({ command, onComplete }: CommandAnimationProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, command.length * 150); // アニメーション完了後にonCompleteを呼び出す
    return () => clearTimeout(timer);
  }, [command, onComplete]);

  return (
    <h1 className='flex text-2xl text-left'>
      <p className='text-lime-500'>joe@kuroha</p> <p className='pr-1'>:~$</p> {command.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}