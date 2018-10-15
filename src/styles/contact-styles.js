import styled from 'styled-components';
import { Wrapper, Title, Card} from '../components/Helpers';

const ContactWrapper = Wrapper.extend`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: center;
  padding: 3% 2% 6% 2%;
  height: 100vh;

   @media (max-width: 900px) {
    grid-template-columns: 1fr 400px 1fr;
    height: 750px;
  }
`

const ContactTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  grid-column: 2 / 3;
  padding: 20px;
`;

const ContactSummaryTitleWrapper = ContactTitleWrapper.extend`
  grid-template-rows: 1fr;
  padding: 10px 0px 40px 0px;
`;

const ContactTitle = Title.extend`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  justify-self: center;
  font-weight: 500;
  align-self: end;
  padding-bottom: 6px;

  @media (max-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    justify-self: center;
    text-align: center;
  }
`;

const ContactSvg = styled.svg`
  display: grid;
  height: 8px;
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  justify-self: center;
  align-self: end;


  @media (max-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    width: 237px;
    transform: scale(.7);
    justify-self: center;
  }
`;

const ContactLine = styled.line`
  stroke-linecap: round;
  opacity: 0.9;
`;

const ContactCard = Card.extend`
  padding: 35px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;

   @media (max-width: 900px) {
    width: 80%;
  }
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-gap: 30px;
  width:600px;
  text-align: center;
  height: 300px;

   @media (max-width: 900px) {
    width: unset;
    height: 400px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  grid-column: 1 / -1;
  height: 55px;
  font-size: 20px;
  justify-content: space-evenly;
  align-items: center; 
  align-self: flex-start;
  height: 55px;
  color: white;
  background: linear-gradient(to left, hsla(348, 86%, 59%, .9), hsla(39, 100%, 63%, 0.9));
  border: none;
  border-radius: 7px;
  border-bottom: 3px solid hsla(348, 2%, 10%, .5);
  box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
  transition: .3s ease;
  letter-spacing: 1.8px;

    &:hover {
      background: linear-gradient(to left, hsla(348, 96%, 69%, .9), hsla(39, 100%, 63%, 0.9));
      box-shadow: 0 4px 4px rgba(0,0,0,.25);
    }
    &:active {
      background: linear-gradient(to left, hsla(348, 86%, 49%, .9), hsla(39, 90%, 43%, 0.9));
      -webkit-transform: translate(0px, 2px);
      transform: translate(0px, 2px);
      border-bottom: none;
      box-shadow: none;
    }

  @media(max-width: 900px) {
    margin: 0;
    font-size: 16px;
    &:hover {
      background: linear-gradient(to left, hsla(348, 86%, 59%, .9), hsla(39, 100%, 63%, 0.9));
      box-shadow: 0px 2px 3px -1px rgba(0, 0, 0, 0.3);
    }
  }
`;

const LeftHalfInputs = styled.div`
  display: grid;
  grid-column: 1 / 2;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 10px;
  
  @media (max-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 1 / -1;
  }
`;

const RightHalfInputs = styled.div`
  grid-column: 2 / 3;

  @media (max-width: 900px) {
    grid-row: 2 / 3;
    grid-column: 1 / -1;
  }
`;

const LeftInput = styled.input`
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07)!important;
  font-size: 16px;
  border-radius: 8px;
  padding: 10px;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, .8);
  }

  @media (max-width: 900px) {
    width: 80%;
    justify-self: center;
  }
`;

const RightTextArea = styled.textarea`
  border: none;
  box-shadow: 0px 2px 4px rgba(50, 50, 93, 0.1), 0 3px 8px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  font-size: 16px;
  padding: 10px;
  width: 100%;
  height: 100%;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0px 0px 2px hsla(276, 70%, 59%, .8);
  }

  @media (max-width: 900px) {
    width: 80%;
    justify-self: center;
    height: 150px;
  }
`;

export default { ContactWrapper, ContactForm, SubmitButton, ContactCard, ContactTitle, ContactSvg, ContactLine, ContactTitleWrapper, LeftHalfInputs, RightHalfInputs, RightTextArea, LeftInput, ContactSummaryTitleWrapper };