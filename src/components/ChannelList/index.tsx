import React from 'react';

import { Container, Category, AddCatagoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () =>  {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCatagoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="R6 da depressao" />
      <ChannelButton channelName="COD Warzone" />
      <ChannelButton channelName="GTA V" />
      <ChannelButton channelName="PUBG" />
    </Container>
  )
};

export default ChannelList