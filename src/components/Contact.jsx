import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopIcon from '@mui/icons-material/Laptop';
import Title from './Title';

export default function Contact() {  
  return (
    <section id='contact'>
        <Title title='Contato' subtitle='Sinta-se à vontade para esclarecer qualquer dúvida a respeito da carreira!' />
        <div className='container'>
          <div className='contact-items'>
            <div className='contact-item'>
              <LocationOnIcon /> <span>Recife - PE</span>
            </div>
            <div className='contact-item'>
              <EmailIcon /> <span>contato@samuelalmeidadev.com.br</span>
            </div>
            <div className='contact-item'>
              <LaptopIcon /> <span>Dev Full-Stack</span>
            </div>
          </div>
        </div>
    </section>
  )
} 