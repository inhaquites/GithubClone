import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';



export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

  margin: 25px 32px;
`;

export const Line = styled.div`
  max-width:1280px;
  width:100%;
  border-top: 1px solid var(--border);
`;

// const iconCSS = css`
//   width: 16px;
//   height: 16px;  
//   fill: var(--icon);
//   flex-shrink:0;  
// `;

export const GithubLogo = styled(FaGithub)`
  margin-top: 25px;
  fill: var(--border);
  width: 24px;
  height:24px;
  flex-shrink:0;
  
`;
