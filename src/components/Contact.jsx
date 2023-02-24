import {Button, FormControl, TextField, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LaptopIcon from '@mui/icons-material/Laptop';
import Title from './Title';
import { useState } from 'react';

const formValues = {
  userName: '',
  userEmail: '',
  subject: '',
  mainMessage: ''
};

const allSnackStates = {
  successState: {
    severity: 'success',
    message: 'Mensagem enviada com sucesso!'
  },
  errorState: {
    severity: 'error',
    message: 'Ocorreu um erro.'
  }
}

export default function Contact() {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackState, setSnackState] = useState({});
  const [inputValues, setInputValues] = useState({});

  function handleInputChange(e) {
    const {name, value} = e.target;

    setInputValues({
      ...formValues,
      [name]: value
    })
  }
  
  function submitForm(e) {
    e.preventDefault();

    Object.values(inputValues).forEach((v) => {
      v !== '' && setSnackState(allSnackStates.successState);
      setSnackOpen(true);

      setTimeout(() => {
        setSnackOpen(false)
      }, 4500);
    })
  }
  
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
              <TextField required name='userName' onChange={handleInputChange} sx={{width: '45%'}} label="Seu Nome" variant="filled" />
              <TextField type='email' required name='userEmail' onChange={handleInputChange} sx={{width: '45%'}} label="Seu Email" variant="filled" />
            </FormControl>
            <TextField name='subject' onChange={handleInputChange} sx={{width: '100%'}}  label="Assunto" variant="filled" />
            <TextField required name='mainMessage' onChange={handleInputChange} sx={{width: '100%'}} maxRows={Infinity} multiline rows={4} label="Mensagem" variant="filled" />
            <div className='button-area'>
              <Button type='submit' className='main-button' variant="contained" endIcon={<SendIcon />}>Enviar Mensagem</Button>
              <Snackbar open={snackOpen} autoHideDuration={4500} onClose={() => setSnackOpen(false)}>
                <Alert onClose={() => setSnackOpen(false)} severity={snackState.state} sx={{ width: '100%' }}>
                  {snackState.message}
                </Alert>
              </Snackbar>
            </div>
          </form>
        </div>
    </section>
  )
}