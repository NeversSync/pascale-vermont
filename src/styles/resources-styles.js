import styled from 'styled-components';
import Link from 'gatsby-link';
import {
  Wrapper,
  Title,
  Copy,
  Card
} from '../components/Helpers';

const ResourcesWrapper = styled(Wrapper)`
  background:rgba(215, 212, 217, 0.3);
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding: ${p => p.isHome ? '3% 2%' : '3% 2% 0px 2%'};
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: ${p => p.isHome ? '3% 2% 6% 2%' : '3% 0px 0px 0px'};
    grid-template-rows: auto;
  }
`;

const ResourcesTitleWrapper = styled.div`
  grid-column: 1 / -1;
  width: 400px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  /* align-content: ${p => p.isHome ? 'center' : 'flex-start'}; */
  align-content: center;
  padding: 40px 80px;
  justify-items: center;
  align-items: center;

  @media (max-width: 900px) {
    padding: 40px 0px;
    justify-self: center;
    justify-items: center;
    width: 100%;
  }
`;

const ResourcesTitle = styled(Title)`
  justify-self: end;
  font-weight: 500;
  padding-bottom: 10px;
  text-align: right;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    margin: 0 auto;
  }
`;

const ResourcesLine = styled.div`
  height: 6px;
  background-color: rgb(229, 69, 117);
  width: 70%;
  border-radius: 10px;
  margin: 0 auto;
  height: 6px;

  @media (max-width: 900px) {
    width: 40%;
    margin: 0px auto;
    margin-bottom: 0.5em;
  }
`;

const ResourcesButton = styled(Link)`

  @media (max-width: 900px) {
    width: 60%;
    display: grid;
    margin: 0px auto;
    justify-content: center;
  }
`;

const ResourcesCopyTitle = styled.h2`
  text-align: center;
`

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr;
  width: 100vw;
  background-color: white;
  margin-left: -2%;
  margin-top: 40px;
  padding: 80px 150px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    /* width: 100%; */
    margin-left: 0px;
    padding: 40px 0px;
  }
`;

const ResourcesCopyWrapper = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
  width: 100%;
  justify-items: center;
  justify-content: center;
  /* max-width: 800px; */
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    padding: 0px 40px;
  }
`;

const ResourcesCopy = styled(Copy)`
  width: 100%;
  justify-self: center;
  text-align: center;

  @media (max-width: 900px) {
    margin: 0;
    margin-top: 4%;
  }
`;

const BlogWrapper = styled.div`
  width: 100%;
  justify-self: center;
  text-align: center;

  @media (max-width: 900px) {
    margin: 0;
    margin-top: 4%;
  }
`

const BlogCopy = styled(Copy)`
`

const BlogLink = styled(Link)`
  font-size: 1.15em;
  font-weight: 400;
`

const BlogCard = styled(Card)`
  padding: 32px;
  background-color: rgba(166, 76, 224, .9);
  transition: all 200ms ease-in-out;

  &:hover {
    transform: scale(1.025);
    background-color: rgba(255, 255, 255, 1);
    color: #221c26;
  }
`

export {
  ResourcesWrapper,
  ResourcesTitleWrapper,
  ResourcesTitle,
  ResourcesLine,
  ContentWrapper,
  ResourcesCopyWrapper,
  ResourcesCopy,
  ResourcesButton,
  ResourcesCopyTitle, BlogWrapper, BlogCopy, BlogLink, BlogCard
};
