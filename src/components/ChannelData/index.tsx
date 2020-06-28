import React from 'react';

import { Container, Message, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () =>  {
  return (
    <Container>
      <Message>
        <ChannelMessage 
          author='Maicon'
          date='28/06/2020'
          content='Fala comigo!'
        />

        <ChannelMessage 
          author='Jimmy'
          date='28/06/2020'
          content={
            <>
              <Mention>@kenob</Mention> vai jogar jovem?
            </>
          }
          hasMention
          isBot
        /> 
      </Message>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #geral" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData