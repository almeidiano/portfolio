import {GitHub, LinkedIn, YouTube, PictureAsPdf} from '@mui/icons-material';
import React from 'react';
import Stacks from './api/Stacks';
import Title from './Title';

export default function About() {
  return (
    <section id='about'>
        <Title title='Sobre mim' subtitle='Minha introdução' />
        <div className='about container'>
          <div className='about-img'> <img src='/me.jpg' /> </div>
          <div className='about-info'> 
            <p>Opa! <img src='/wave.gif' /><br/><br/>Meu nome é Samuel Almeida e sou entusiasta por tecnologia e inovação. Desde criança, aprendi muitas coisas sozinho como: design, programação, e inglês. Sempre amei essa área e sigo me aprimorando a cada dia. <br/><br/>Tenho anos de experiência em desenvolvimento web com freelances, ferramentas pessoais e UI/UX. Sempre entregando o melhor trabalho possível.</p> 
            <div className='social-media'>
              <a target='_blank' href='https://github.com/almeidiano'><GitHub /></a>
              <a target='_blank' href='https://www.linkedin.com/in/samuel-de-almeida'><LinkedIn /></a>
              <a target='_blank' href='https://www.youtube.com/@EllSamuellTM'><YouTube /></a>
              <a target='_blank' href='./curriculum.pdf'><PictureAsPdf /></a>
            </div>
          </div>
        </div>
        <Stacks />
    </section>
  )
}