import styled from 'styled-components';
import { CTAButton } from '../components/Helpers';

const NewsletterWrapper = styled.div`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-items: center;
  justify-content: center;
  align-content: flex-start;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
    width: 100%;
  }
`;

const NewsletterTitle = styled.h2`
  grid-column: 2 / 3;
  width: 100%;
  font-size: 1em;
  line-height: 1.25;
  font-weight: 500;
  justify-self: center;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 1.2em;
  }
`;

const NewsletterForm = styled.form`
  display: grid;
  margin-top: 1em;
  justify-self: center;
  grid-column: 2 / 3;
  grid-gap: 0.5em;
  width: 80%;
  text-align: center;

  @media (min-width: 1200px) {
    grid-gap: 0.75em;
    width: 400px;
  }
`;

const FormInput = styled.input`
  display: grid;
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07);
  font-size: 16px;
  border-radius: 8px;
  padding: 20px;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, 0.8);
  }
`;

const SubmitButton = styled(CTAButton)`
  display: grid;
  grid-column: 1 / -1;
  color: white;
  justify-self: center;
  margin: 0px;
`;

const List = styled.ul`
  list-style: none;
  text-align: left;
  margin-top: 8px;
  li {
    margin-bottom: 16px;
  }
  label {
    margin-left: 8px;
  }
`

export {
  NewsletterWrapper,
  NewsletterForm,
  SubmitButton,
  NewsletterTitle,
  FormInput,
  List
};
