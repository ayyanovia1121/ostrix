import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button';

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='p-4 flex items-center justify-between'>
      <div className='flex items-center space-x-1'>
        <Image src={"/assets/logo.svg"} alt="logo" width={40} height={40} />
        <span className='font-bold text-2xl'>Ostrix</span>
      </div>
      <div className='flex items-center space-x-2'>
        <Button variant={"outline"}>Sign in</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header