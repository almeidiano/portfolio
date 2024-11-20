import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import GenerateBros from './GenerateBros';
import {GitHub, LinkedIn} from '@mui/icons-material';

export default function Header() {
  return (
    // <header>
    //   <section id='header'>
        
    //       {/* <div className="header-content">
    //         <div className="header-info">
              // <h1>Samuel Almeida</h1>
              // <h3>Software Developer</h3>
              // <p>Profissional de TI especializado em Análise e Desenvolvimento de Software.</p>
              // <Button href='#contact' className='main-button' variant="contained" endIcon={<SendIcon />}>Contate-me</Button>
    //         </div>
    //         <div className="bro-pic">
    //           <GenerateBros />
    //         </div>
    //       </div> */}
        
    //   </section>
    // </header>
    <section className='h-[90vh] flex justify-center items-center'>
      
      {/* information */}
      {/* <div>
        <h1 className='text-5xl font-semibold'>Samuel Almeida</h1>
        <div className='mt-2'>Software Developer</div>
        <p className='pt-2'>Profissional de TI especializado em Análise e Desenvolvimento de Software.</p>
        
        <div className='my-2'>
          <Button href='#contact' className='main-button' variant="contained" endIcon={<SendIcon />}>Contate-me</Button>
        </div>

        <div>
          <span>Conheça-me!</span> <ArrowDownwardIcon />
        </div>
      </div> */}

      {/* bros */}
      {/* <div className=''>
        <GenerateBros />
      </div> */}

      {/* header */}

        {/* header content */}
        <section class="items-center justify-center">
        <div class="text-center md:flex md:text-left md:items-center justify-center">

            {/* info */}
            <div class="md:w-1/2">
                <h1 class="text-5xl font-semibold text-nowrap">Samuel Almeida</h1>
                <div class="pt-2 font-bold">Software Developer</div>
                <p class="my-4">Estagiário de TI especializado em Análise <br/> e Desenvolvimento de Software.</p>
                <div className='mt-2'>
                  <Button href='#contact' className='main-button' variant="contained" endIcon={<SendIcon />}>Contate-me</Button>
                </div>
                
            </div>

            {/* bro */}
            <div className="hidden">
              <GenerateBros />
              {/* <img className="h-[400px] w-[400px]" src='/bro-pic/dev-activity-bro.svg' /> */}
            </div>

        </div>

        <div class='mt-2'>
          <a target='_blank' href='https://github.com/almeidiano'><GitHub /></a>
          <a target='_blank' href='https://www.linkedin.com/in/samuel-de-almeida'><LinkedIn /></a>
        </div>
    </section>


    </section>
  );
}
