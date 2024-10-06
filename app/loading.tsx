"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const bootMessages = [
  "[ OK ] Starting system log daemon...",
  "[ OK ] Starting network manager...",
  "[ OK ] Mounting local filesystems...",
  "[ OK ] Starting Nginx web server...",
  "[ OK ] Starting firewall...",
  "[ OK ] Starting cron daemon...",
  "[ OK ] Starting system message bus...",
  "[ OK ] Starting hardware abstraction layer...",
  "[ OK ] Starting ACPI daemon...",
  "[ OK ] Starting Avahi mDNS/DNS-SD daemon...",
  "[ OK ] Starting CUPS printing system...",
  "[ OK ] Starting system logging service...",
  "[ OK ] Starting kernel log daemon...",
  "[ OK ] Starting system monitoring daemon...",
  "[ OK ] Starting disk management services...",
  "[ OK ] Starting user login services...",
  "[ OK ] Starting graphical interface...",
  "[ OK ] Starting desktop environment...",
  "[ OK ] Loading user information...",
  "[ OK ] Initializing sound system...",
  "[ OK ] Starting network time synchronization...",
  "[ OK ] Starting package management services...",
  "[ OK ] Starting system update services...",
  "[ OK ] Starting backup services...",
  "[ OK ] System boot complete.",
  "[ OK ] Welcome to My Portfolio!"
];

export default function Loading() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex < bootMessages.length - 1) {
      const randomDelay = Math.random() * (200 - 50) + 50; // 0.05秒から0.20秒の間でランダムな遅延
      const timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, randomDelay);
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  return (
    <div className="flex flex-col items-start justify-center h-screen bg-black text-white p-4">
      {bootMessages.map((message, index) => {
        const match = message.match(/^\[(.*?)\]\s(.*)/);
        const status = match ? match[1] : '';
        const rest = match ? match[2] : message;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index <= currentMessageIndex ? 1 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-lg font-mono"
          >
            <span>[</span>
            <span className="text-green-500">{status}</span>
            <span>] {rest}</span>
          </motion.div>
        );
      })}
    </div>
  );
}