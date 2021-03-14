import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Action from './Action'

//TESTA falha ao invocar o shenlong
it('Should render action', () => {
  const { container, getByText } = render(<Action />)

  const button = getByText('Invocar').closest('button')
  fireEvent.click(button)

  expect(getByText('Você não tem todas as esferas para invocar o shenlong')).toBeTruthy()

  const backButton = getByText('Voltar').closest('button')
  fireEvent.click(backButton)

  expect(getByText('Invocar shenlong')).toBeInTheDocument()
}) 

// TESTA invocar o shenlong
it('Should show shenlong', () => {
  const { container, getByText, getByTestId } = render(<Action balls={profileSuccess.profile.balls} />)//pega os elementos das bolas e profile da página
  const button = getByText('Invocar').closest('button')     //pega o botão para invocar o shenlong
  fireEvent.click(button)                                   // clica no botão
  expect(getByTestId('shenlong')).toBeInTheDocument()       //testa se a imagem com ID 'shenlong' aparece na página
})