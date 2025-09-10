import Image from 'next/image';

export default function Profile() {
  return (
    <div className='p-6'>
      <div className='flex items-center justify-center gap-20'>
        <div className=''>
          <Image
            className='rounded-lg'
            src="/selfie.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className='p-3'>
          <h1 className='text-3xl '>Joe Kuroha</h1>
          <h1 className='text-4xl pt-3'>黒羽　晟</h1>
          <h2 className='text-xl pt-3'>Software Designer</h2>
          <h2 className='text-xl pt-3'>CEO of 0UTL1ER</h2>
        </div>
      </div>
   </div>
  );
}