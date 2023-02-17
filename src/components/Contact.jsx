import {Button, FormControl, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Title from './Title';

function submitForm(e) {
  e.preventDefault();
}

export default function Contact() {
  return (
    <section id='contact'>
        <Title title='Contato' subtitle='Sinta-se à vontade para esclarecer qualquer dúvida a respeito da carreira!' />
        <div className='container'>
          <form onSubmit={submitForm}>
            <FormControl sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
              <TextField sx={{width: '45%'}} label="Seu Nome" variant="filled" />
              <TextField sx={{width: '45%'}} label="Seu Email" variant="filled" />
            </FormControl>
            <TextField sx={{width: '100%'}}  label="Assunto" variant="filled" />
            <TextField sx={{width: '100%'}} maxRows={Infinity} multiline rows={4} label="Mensagem" variant="filled" />
            <div className='button-area'>
              <Button type='submit' className='main-button' variant="contained" endIcon={<SendIcon />}>Enviar Mensagem</Button>
            </div>
          </form>
        </div>
    </section>
  )
}