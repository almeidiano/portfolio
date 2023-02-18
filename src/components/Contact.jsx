import {Button, FormControl, TextField, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopIcon from '@mui/icons-material/Laptop';
import Title from './Title';
import { useState } from 'react';

function submitForm(e) {
  e.preventDefault();
}

export default function Contact() {
  const [snackOpen, setSnackOpen] = useState(false);

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
          <form onSubmit={submitForm}>
            <FormControl sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
              <TextField sx={{width: '45%'}} label="Seu Nome" variant="filled" />
              <TextField sx={{width: '45%'}} label="Seu Email" variant="filled" />
            </FormControl>
            <TextField sx={{width: '100%'}}  label="Assunto" variant="filled" />
            <TextField sx={{width: '100%'}} maxRows={Infinity} multiline rows={4} label="Mensagem" variant="filled" />
            <div className='button-area'>
              <Button onClick={() => setSnackOpen(true)} type='submit' className='main-button' variant="contained" endIcon={<SendIcon />}>Enviar Mensagem</Button>
              <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
                <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
                  Mensagem enviada com sucesso!
                </Alert>
              </Snackbar>
            </div>
          </form>
        </div>
    </section>
  )
}