import Image from 'next/image';

export default function Profile() {
  return (
    <div className='p-6 pb-[80px]'>
      <div className='flex items-center justify-center gap-10 pb-10'>
        <div className=''>
          <Image
            className='rounded-lg'
            src="/selfie.jpg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </div>
        <div className='p-6'>
          <h1 className='text-3xl '>Joe Kuroha</h1>
          <h1 className='text-4xl pt-3'>黒羽　晟</h1>
          <h2 className='text-xl pt-3'>University Student / Full-stack engineer</h2>
          <h2 className='text-xl pt-3'>Agent of IPUT-Kernel</h2>
        </div>

      </div>
      <div className='flex flex-col justify-center'>
        <h2 className='text-xl text-left'>describe: </h2>
        <p className='text-lg text-left flex justify-center'>
          最近は珍しくもなんともない大学生のフリーランスエンジニアです。<br />
          ウェブアプリケーションの開発からインフラ構築まで、一人で完結できるフルスタック人材です。<br />
          正直なところ人材不足の企業にしか需要のない人間なので、技術スタックが広ければいいってもんでもありません。
        </p>
      </div>
   </div>
  );
}