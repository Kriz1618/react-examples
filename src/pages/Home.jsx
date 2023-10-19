import React from 'react'
import { Title } from '../components/Title';
import img1 from '../assets/img/bart.png'

export const Home = () => {
  return (
    <>
      <Title title='Home Page'/>
      <img src={img1} alt="Test image" />
    </>
  )
};
