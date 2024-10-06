"use client"
import Link from 'next/link';
import { CiPower } from 'react-icons/ci';

const Navbar = () => {
    const handleReload = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.location.href = '/'; // 現在のページをリロード
    };
  return (
    <nav className='flex justify-between items-center h-20 px-10'>
        <Link className='flex items-center text-2xl p-2 rounded gap-2 bg-lime-600' href='/'　onClick={handleReload}>
            <CiPower />
            <label>Reboot</label>
        </Link>
        <div className='flex gap-10'>
            <Link href='/top'>
                <p className='mr-5 text-lg'>Top</p>
            </Link>
            <Link href='/skill'>
                <p className='mr-5 text-lg'>Skill</p>
            </Link>
            <Link href='/contact'>
                <p className='mr-5 text-lg'>Contact</p>
            </Link>
        </div>
    </nav>
  );
}

export default Navbar;