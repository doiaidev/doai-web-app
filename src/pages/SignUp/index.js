import React from 'react';

import { FormControl, Input, InputLabel, FormHelperText, Button, FormGroup } from '@material-ui/core';

import { Container, Aside, Section } from './styles';

// import fourKids from '../../assets/images/fourkids.png';
import logo from '../../assets/images/logo-doai.png';

export default function SignUp() {
  return (
    <Container>
      <Aside>
        <div>
          <strong>Ajude quem muito</strong>
          <br />
          <strong>precisa perto de você!</strong>
          <br />
          <p>Faça doações para organizações</p>
          <p>próximas de você.</p>
        </div>
      </Aside>

      <Section>
        <picture>
          <img src={logo} alt="alogotipo doai" />
        </picture>
        <form onSubmit={() => {}}>
          <FormControl>
            <InputLabel htmlFor="name">Nome completo</InputLabel>
            <Input id="name" aria-describedby="helper-name" />
            <FormHelperText id="helper-name">seu nome</FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <Input id="password" aria-describedby="helper-password" />
            <FormHelperText id="helper-password">sua senha</FormHelperText>
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="confirm-password">Confirmar senha</InputLabel>
            <Input id="confirm-password" aria-describedby="helper-confirm-password" />
            <FormHelperText id="helper-confirm-password">confirme sua senha</FormHelperText>
          </FormControl>

          <FormControl>
            <FormGroup>
              <Button type="submit" variant="contained" color="primary">
                CADASTRAR
              </Button>
            </FormGroup>
          </FormControl>
        </form>
        <div>
          já tem uma conta laPlay? Faça seu login aqui.
        </div>
      </Section>
    </Container>
  );
}
