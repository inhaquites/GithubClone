import React from 'react';
import { Link } from "react-router-dom";

import { Container, Breadcrumb, RepoIcon, Stats, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={'username'} to={'/inhaquites'}>
          Rodrigo Inhaquites
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={'/inhaquites/inhaquites'}>
          inhaquites
        </Link>
      </Breadcrumb>

      <p>Descrição do repositório selecionado</p>

      <Stats>
        <li>
          <StarIcon />
          <p>9</p>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <p>9</p>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/inhaquites/inhaquites'}>
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;
