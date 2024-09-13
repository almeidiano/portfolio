import {GitHub, LinkedIn} from '@mui/icons-material';
import React from 'react';
import Stacks from './api/Stacks';
import Title from './Title';

export default function About() {
  return (
    <section id='about'>
      <div className='flex flex-col items-center'> 
        <Title title='Sobre mim' subtitle='Minha Introdução' />
        <p className='text-left container w-1/2'>
          Desenvolvedor especializado em análise e desenvolvimento de software. Entusiasta por tecnologia e inovação, sigo estudando na área e trabalhando em projetos. Meu foco é garantir um mapeamento e análise precisos, resultando no desenvolvimento eficiente de soluções.<br/><br/>
          
          <br/>

          Meu objetivo é me tornar em um profissional especializado, almejo aprender com profissionais experientes e competentes para alcançar conhecimentos de senioridade.
          </p> 
        <div class='my-2'>
          <a target='_blank' href='https://github.com/almeidiano'><GitHub /></a>
          <a target='_blank' href='https://www.linkedin.com/in/samuel-de-almeida'><LinkedIn /></a>
        </div>
      </div>
      <Stacks />
    </section>
  )
}