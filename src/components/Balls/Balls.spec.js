import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Balls from './Balls'

//import MOCKS
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';
import esferas from '../../mocks/esferas.json';
import esferasSuccess from '../../mocks/esferasSuccess.json';

//testa quantas bolas que o usuário NÃO TEM
it('Should filter the balls the user DO NOT have', async () => {
    const { getByTestId, getByText, getAllByText, container } = render(<Balls balls={esferas.balls} profile={profile} />)   //pega os elementos das bolas e profile da página
    const filter = getByTestId('filter')        //pega o elemento do filtro

    fireEvent.click(filter)                     //seleciona o filtro
  
    const myDragonBalls = getByText('Não tenho').closest('option')  //pega a opção 'Não tenho'
    fireEvent.click(myDragonBalls)                                  //seleciona a opção
  
    await waitFor(() => {                                           // "espera" carregar a página
      expect(getAllByText('Não encontrada').length).toBe(3)         //testa se a quantidade de 'balls' que aparecem é a mesma do 'profile'
    })
  })

  //testa quantas bolas que o usuário TEM
  it('Should filter the balls the user DO have', async () => {
    const { getByTestId, getByText, getAllByText, container } = render(<Balls balls={esferas.balls} profile={profile} />)   //pega os elementos das bolas e profile da página
    const filter = getByTestId('filter')        //pega o elemento do filtro

    fireEvent.click(filter)                     //seleciona o filtro
  
    const myDragonBalls = getByText('Minhas esferas').closest('option')  //pega a opção 'Minhas esferas'
    fireEvent.click(myDragonBalls)                                  //seleciona a opção
  
    await waitFor(() => {                                           // "espera" carregar a página
      expect(getAllByText('Não encontrada').length).toBe(3)         //testa se a quantidade de 'balls' que aparecem é a mesma do 'profile'
    })
  })