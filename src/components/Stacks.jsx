import React, { useState, useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css'

export default function Stacks() {
  const [stacks, setStacks] = useState(null); 
  const stackContainer = useRef();
  var stackIndex = 0;

  useEffect(() => {
    async function showStacks () {
      const req = await axios.get("https://samuelalmeidadev.com.br/allStacks.json");
      let res = await req.data;
      stackContainer.current.style.opacity = 0;

      if(res[stackIndex]) {
        setTimeout(() => {
          setStacks(res[stackIndex].stacks);
          stackContainer.current.style.opacity = 1;
          stackIndex++;
        }, 500);
      }

      const interval = setInterval(() => {
        stackContainer.current.style.opacity = 0;

        if (res[stackIndex]) {
          setTimeout(() => {
            setStacks(res[stackIndex].stacks);
            stackContainer.current.style.opacity = 1;
            stackIndex++;
          }, 500);
          } else {
            setTimeout(() => {
              stackIndex = 0;
              setStacks(res[stackIndex].stacks);
              stackContainer.current.style.opacity = 1;
              stackIndex++;
            }, 500);
          }
        }, 4500);

      return () => clearInterval(interval);
    }
    
    showStacks();
  }, [])

  const StacksLoading = () => {
    return (
      <>
        <div className='stack'><div className='stack-thumb'><Skeleton width={50} height={50} /></div><Skeleton width={50} height={15} /></div>
        <div className='stack'><div className='stack-thumb'><Skeleton width={50} height={50} /></div><Skeleton width={50} height={15} /></div>
        <div className='stack'><div className='stack-thumb'><Skeleton width={50} height={50} /></div><Skeleton width={50} height={15} /></div>
        <div className='stack'><div className='stack-thumb'><Skeleton width={50} height={50} /></div><Skeleton width={50} height={15} /></div>
      </>
    )
  }

  return (
    <div className='stacks'>
        <div ref={stackContainer} className='stacks-container'>
            {stacks === null ? <StacksLoading /> 
            :
            stacks.map((item) => (
              <div className='stack' key={item.id}><div className='stack-thumb'><img src={item.icon} /></div>{item.stack}</div>
            ))
            } 
        </div>
        <div className='show-all'>Ver tudo <KeyboardArrowDownIcon /></div>
    </div>
  )
}