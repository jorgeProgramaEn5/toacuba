'use client';
import {banner_1, banner_2, banner_3, banner_4, banner_5, banner_6} from '../assets/indice'
import Image from 'next/image';

import { Carousel } from 'flowbite-react';

export default function Caruselsimple() {
  return (
    // <Carousel slideInterval={8000}>
    //   <Image
    //     alt="..."
    //     src={banner_1}
    //   />
    //   <Image
    //     alt="..."
    //     src={banner_2}
    //   />
    //   <Image
    //     alt="..."
    //     src={banner_3}
    //   />
    //   <Image
    //     alt="..."
    //     src={banner_4}
    //   />
    //   <Image
    //     alt="..."
    //     src={banner_5}
    //   />
    //   <Image
    //     alt="..."
    //     src={banner_6}
    //   />
    // </Carousel>

<Carousel slideInterval={8000}>
  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_1}
      fill
      objectFit='cover'
    />
  </div>

  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_2}
      fill
      objectFit='cover'
    />
  </div>

  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_3}
      fill
      objectFit='cover'
    />
  </div>

  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_4}
      fill
      objectFit='cover'
    />
  </div>

  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_5}
      fill
      objectFit='cover'
    />
  </div>

  <div className=' w-full h-full bg-slate-500'>
    <Image
      alt="..."
      src={banner_6}
      fill
      objectFit='cover'
    />
  </div>
</Carousel>
  )
}


