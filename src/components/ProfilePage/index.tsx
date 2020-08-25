import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  FollowAge,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Leonardo Felipe</h1>
        <h2>@leonardofps1</h2>

        <p>A beginner developer</p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de fevereiro de 1996
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
