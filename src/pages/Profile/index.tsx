import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';


import ProfileData from '../../components/ProfileData';
import RepoCard from "../../components/RepoCard";
import RandomCalentar from '../../components/RandomCalendar';

import { APIUser, APIRepo } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {

  const { username = 'inhaquites' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {
      // console.log([await responses[0].json(), await responses[1].json()]);
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'Usuário não encontrato!' })
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6); //pega os 6 primeiros

      setData({
        user: user,
        repos: slicedRepos
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>
  }
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositórios</span>
      <span className="number">{data.user?.public_repos}</span>

    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>
        <span className="line"></span>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Randon Repos</h2>

            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Calendario Randômico(Fictício)
          </CalendarHeading>

          <RandomCalentar />


        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
