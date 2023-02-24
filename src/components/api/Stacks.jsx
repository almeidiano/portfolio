import React, { useState, useEffect, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css';

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
      const req = await axios.get("https://samuelalmeidadev.com.br/allStacks.json");
      let res = await req.data;
      stackContainer.current.style.opacity = 0;
      const displayStacks = new DisplayStacks(res);
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
        <div className='show-all'><div className='show-el'>Ver tudo <KeyboardArrowDownIcon /></div></div>
    </div>
  )
}