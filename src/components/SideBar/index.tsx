import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Fulano Souza" nickname="@fulanosouza" />,
              <FollowSuggestion
                name="Ciclano Souza"
                nickname="@ciclanosouza"
              />,
              <FollowSuggestion
                name="Herculano Souza"
                nickname="@herculanosouza"
              />,
            ]}
          />

          <List
            title="Trend Topics"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Trend Topics"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Trend Topics"
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Trend Topics"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
