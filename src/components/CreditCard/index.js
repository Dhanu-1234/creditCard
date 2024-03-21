import {useState} from 'react'

import {
  AppContainer,
  CreditCardContainer,
  CreditCardHeading,
  CardContainer,
  CardNumber,
  CardParagraph,
  CardHolderName,
  InputContainer,
  InputForm,
  FormHeading,
  FormInput,
} from './styledComponents'

const CrediCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')

  const onCardNumberChange = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardholderName = event => {
    setCardholderName(event.target.value)
  }

  return (
    <AppContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CardContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardParagraph>CARDHOLDER NAME</CardParagraph>
          <CardHolderName>{cardholderName.toUpperCase()}</CardHolderName>
        </CardContainer>
      </CreditCardContainer>
      <InputContainer>
        <InputForm>
          <FormHeading>Payment Method</FormHeading>
          <FormInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onCardNumberChange}
          />
          <FormInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardholderName}
          />
        </InputForm>
      </InputContainer>
    </AppContainer>
  )
}

export default CrediCard
