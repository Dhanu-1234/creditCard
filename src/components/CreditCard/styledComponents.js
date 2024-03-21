import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const CreditCardHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 42px;
  margin-top: 30px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: #ffd773;
`

export const CardContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  height: 300px;
  width: 80%;
  padding-left: 50px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
  box-shadow: #344e7a 0px 1px 5px 0px;
  @media screen and (max-width: 768px) {
    margin-top: 50px;
    align-self: center;
  }
`

export const CardNumber = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  margin-bottom: 10px;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`

export const CardParagraph = styled.p`
  color: #d3d9e0;
  font-family: 'Roboto';
  margin-top: 30px;
`

export const CardHolderName = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 1px;
`

export const InputContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column:
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`

export const InputForm = styled.form`
  height: 250px;
  width: 65%;
  margin-left: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: #c3cad9 0px 1px 11px 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 350px;
    justify-content: center;
    margin-top: 50px;
    align-self: center;
  }
`

export const FormHeading = styled.h1`
  color: #344e7a;
  font-family: 'Roboto';
  margin: 30px 0px 20px;
`

export const FormInput = styled.input`
  background-color: transparent;
  color: #475569;
  font-family: 'Roboto';
  padding: 10px;
  width: 80%;
  border-style: solid;
  border-width: 1px;
  border-color: #d3d9e0;
  border-radius: 3px;
  margin-top: 20px;
  outline: none;
`
