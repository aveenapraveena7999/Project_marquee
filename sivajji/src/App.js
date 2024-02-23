import { useState } from 'react';
import black from './components/images/black.png'
import hacker from './components/images/One.png'
import jiva from './components/images/lenovo.png'
import manju from './components/images/set.png'
import tool from './components/images/tool.png'
import lenovo from './components/images/lenovo.png'
import win from './components/images/win.png'
import set from './components/images/set.png'
import One from './components/images/One.png'
import Reg from './components/layout/Reg'
import { Stack } from '@mui/material';
import Marquee from 'react-fast-marquee';
import Blog from './components/Nav/Blog'


export default function Counter() {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(a => a + 1);
  }
  

  return (
    <>
    <Blog/>
    <div className='layout'>
      <Marquee direction='left' padding={20}  speed={100}>
        <img src={black} alt='jiva_icon' height={'120'} width={'120'} />
        <img src={hacker} alt='jiva_icon' height={'120'} width={'120'} />
        <img src={jiva} alt='jiva_icon' height={'120'} width={'120'} />
        <img src={lenovo} alt='jiva_icon' height={'120'} width={'120'} />
        <img src={manju} alt='jiva_icon' height={'120'} width={'120'} />
         <img src={One} alt='jiva_icon' height={'120'} width={'120'} />
         <img src={set} alt='jiva_icon' height={'120'} width={'120'} />
         <img src={tool} alt='jiva_icon' height={'120'} width={'120'} />
         <img src={win} alt='jiva_icon' height={'120'} width={'120'} />
       
      </Marquee>
    </div>
    

    <Stack direction={'column-reverserow'}>
    <Reg ava={'a'} img='https://picsum.photos/id/237/200/300' Typography='Nature' />
    <Reg ava={'b'} img='https://picsum.photos/seed/picsum/200/300' Typography='Social' /> 
    <Reg ava={'c'} img='https://picsum.photos/200/300?grayscale' Typography='Animal' />
    <Reg ava={'d'}img='https://picsum.photos/200/300/?blur' Typography='Coffee' />
    <Reg ava={'e'}img='https://picsum.photos/id/870/200/300?grayscale&blur=2' Typography='Light house' />
    </Stack>
    
      <h1>Your age: {age}</h1> 
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
         increment();
      }}click me>+1</button>
    </>
  );
}