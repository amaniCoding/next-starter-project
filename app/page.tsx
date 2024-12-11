import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { ShareIcon, HeartIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <main>
      <div className='flex flex-col p-6'>
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-700 p-4 md:h-52">
        <AcmeLogo/>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-4/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-pink-800">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-pink-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-pink-600 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center md:w-4/6">
          <Image
            src="/hero-desktop.png"
            width={560}
            height={620}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      </div>
      {/* <div className='p-8'>
        <div className='grid md:grid-cols-4 gap-4'>
          <div className='rounded-lg shadow-lg p-1 text-center'>
            <p className='my-2 p-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus porro provident! </p>
            <div className='relative overflow-hidden group'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-20 group-hover:bg-black opacity-50 transition ease-in-out duration-200'></div>
              <Image
                id='hot'
                src="/1.jpg"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                className='group-hover:scale-125 transition ease-in-out duration-500'
                alt="Screenshot of the dashboard project showing mobile version"
              />
            </div>
            <div className='my-1'>
              <div className='flex flex-row items-center justify-between my-4'>
                <Link href="#" className='text-center ml-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><ShareIcon className='w-6 md:w-7'></ShareIcon></Link>
                <Link href="#" className='text-center mr-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><HeartIcon className="w-6 md:w-7" color='#3399ff'></HeartIcon></Link>
              </div>
            </div>
          </div>
          <div className='rounded-lg shadow-lg p-1 text-center'>
            <p className='my-2 p-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus porro provident! </p>
            <div className='relative overflow-hidden group'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-20 group-hover:bg-black opacity-50 transition ease-in-out duration-200'></div>
              <Image
                id='hot'
                src="/2.jpg"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                className='group-hover:scale-125 transition ease-in-out duration-500'
                alt="Screenshot of the dashboard project showing mobile version"
              />
            </div>
            <div className='my-1'>
              <div className='flex flex-row items-center justify-between my-4'>
                <Link href="#" className='text-center ml-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><ShareIcon className='w-6 md:w-7'></ShareIcon></Link>
                <Link href="#" className='text-center mr-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><HeartIcon className="w-6 md:w-7" color='#3399ff'></HeartIcon></Link>
              </div>
            </div>
          </div>
          <div className='rounded-lg shadow-lg p-1 text-center'>
            <p className='my-2 p-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus porro provident! </p>
            <div className='relative overflow-hidden group'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-20 group-hover:bg-black opacity-50 transition ease-in-out duration-200'></div>
              <Image
                id='hot'
                src="/3.jpg"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                className='group-hover:scale-125 transition ease-in-out duration-500'
                alt="Screenshot of the dashboard project showing mobile version"
              />
            </div>
            <div className='my-1'>
              <div className='flex flex-row items-center justify-between my-4'>
                <Link href="#" className='text-center ml-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><ShareIcon className='w-6 md:w-7'></ShareIcon></Link>
                <Link href="#" className='text-center mr-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><HeartIcon className="w-6 md:w-7" color='#3399ff'></HeartIcon></Link>
              </div>
            </div>
          </div>
          <div className='rounded-lg shadow-lg p-1 text-center'>
            <p className='my-2 p-2 text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ducimus porro provident! </p>
            <div className='relative overflow-hidden group'>
              <div className='absolute bottom-0 left-0 right-0 top-0 z-20 group-hover:bg-black opacity-50 transition ease-in-out duration-200'></div>
              <Image
                id='hot'
                src="/4.jpg"
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto' }}
                className='group-hover:scale-125 transition ease-in-out duration-500'
                alt="Screenshot of the dashboard project showing mobile version"
              />
            </div>
            <div className='my-1'>
              <div className='flex flex-row items-center justify-between my-4'>
                <Link href="#" className='text-center ml-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><ShareIcon className='w-6 md:w-7'></ShareIcon></Link>
                <Link href="#" className='text-center mr-3 text-red flex items-center justify-center p-1 rounded-full outline-none hover:outline-blue-500 ease-in-out duration-500'><HeartIcon className="w-6 md:w-7" color='#3399ff'></HeartIcon></Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </main>

  );
}
