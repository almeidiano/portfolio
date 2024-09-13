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

          Meu objetivo é me tornar em um profissional especializado em microserviços e desenvolvimento de APIs com Java, utilizando frameworks como Spring e suas derivações. Além disso, buscar aprofundar conhecimentos em ambientes cloud, utilizando Docker e serviços AWS (S3, SQS, SNS, Lambda, EC2, RDS, entre outros). Também pretendo me especializar em bancos de dados, incluindo Oracle, PostgreSQL, MySQL e NoSQL. 
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