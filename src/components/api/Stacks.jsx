import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function Stacks() {
  const [stacks, setStacks] = useState(null); 
  const stackContainer = useRef();

  class DisplayStacks { 
    loop = false;
    stackResponse = {};
    stackIndex = 0;

    constructor(stackResponse) {
      this.stackResponse = stackResponse;

      try {
        setStacks(this.stackResponse[this.stackIndex].stacks);
        stackContainer.current.style.opacity = 1;
        this.stackIndex++;
        this.loop = true;
      } catch (error) {
        throw new Error(`Undefined Stacks: ${error}`)
      }

      if(this.loop) {
        const interval = setInterval(() => {
          stackContainer.current.style.opacity = 0;

          if(this.stackResponse[this.stackIndex]) {
            setTimeout(() => {
              setStacks(this.stackResponse[this.stackIndex].stacks);
              stackContainer.current.style.opacity = 1;
              this.stackIndex++;
            }, 500);
          }else {
            setTimeout(() => {
              this.stackIndex = 0;
              setStacks(this.stackResponse[this.stackIndex].stacks);
              stackContainer.current.style.opacity = 1;
              this.stackIndex++;
            }, 500);
          }
        }, 4500);
        
        return () => clearInterval(interval);
      }
  }
}

  useEffect(() => {
    async function showStacks () {
      const req = await axios.get("https://almeidiano.dev/allStacks.json");
      let json = await req.data;
      // stackContainer.current.style.opacity = 0;
      // const displayStacks = new DisplayStacks(res);
      setStacks(json)
      console.log(json)
    }
    
    showStacks();
  }, [])

  const StacksLoading = () => {
    return (
      <div className='flex justify-evenly'>      
        <div className='flex flex-col items-center'>
          <Skeleton width={50} height={50} />
          <Skeleton width={50} height={15} />
        </div>

        <div className='flex flex-col items-center'>
          <Skeleton width={50} height={50} />
          <Skeleton width={50} height={15} />
        </div>

        <div className='flex flex-col items-center'>
          <Skeleton width={50} height={50} />
          <Skeleton width={50} height={15} />
        </div>

        <div className='flex flex-col items-center'>
          <Skeleton width={50} height={50} />
          <Skeleton width={50} height={15} />
        </div>

      </div>
    )
  }

  return (
    <div className='bg-[#f4f4f7] p-[50px]'>
        <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">

            {stacks === null ? <StacksLoading />
              :
              stacks.map((itemList, listIndex) => (
                <SwiperSlide key={listIndex}>
                  <div className='flex justify-evenly'> 
                  {itemList.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                      <img src={item.icon} className='h-[50px] w-[50px] grayscale' />
                      <div className='text-xs'>{item.stack}</div>
                    </div>
                  ))}
                  </div>
                </SwiperSlide>
              ))
            }

        </Swiper>
    </div>
  )
}