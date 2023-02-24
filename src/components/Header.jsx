import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GenerateBros from './GenerateBros';

export default function Header() {
  return (
    <header>
      <section id='header'>
        <>
          <div className="header-content">
            <div className="header-info">
              <h1>Samuel Almeida</h1>
              <h3>Desenvolvedor Full-Stack</h3>
              <p>Desenvolvedor especializado em Front-End, com conhecimentos de Back-End e apaixonado por tecnologias.</p>
              <Button href='#contact' className='main-button' variant="contained" endIcon={<SendIcon />}>Fale Comigo</Button>
            </div>
            <div className="bro-pic">
              <GenerateBros />
            </div>
          </div>
          <div className='know-me'>
            <span>Conheça-me!</span> <ArrowDownwardIcon />
          </div>
        </>
      </section>
    </header>
  );
}
