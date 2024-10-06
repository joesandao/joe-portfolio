import React from 'react';

export default function Help() {
  return (
    <div id="help" className=''>
      <h1 className='text-2xl text-lime-500'>$ npm run dev</h1>
      <pre className='pt-6'>
        {'> joe-portfolio@0.1.0 dev'}<br />
        {'> next dev'}<br />
        {'> ▲ Next.js 14.0.4'}<br />
        {'> next dev'}<br />
        {'- Local:        http://localhost:3000'}
      </pre>
    </div>
  );
}