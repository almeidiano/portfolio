import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Title from './Title';

export default function Contact() {  
  return (
    <section id='contact'>
        <Title title='Contato' subtitle='Sinta-se à vontade para esclarecer qualquer dúvida a respeito da carreira!' />
        <div className='container'>
            <div className='flex flex-col justify-center items-center py-2'>
              <LocationOnIcon color='primary' /> <span>Recife - PE</span>
            </div>
            <div className='flex flex-col justify-center items-center py-2'>
              <EmailIcon color='primary' /> <span>contato@almeidiano.dev</span>
            </div>
        </div>
    </section>
  )
} 