'use client';
import React from 'react';
import Etiquetador from '../components/etiquetador';
type Props = {}
  
const TabNav = () => {
  return (   
    <>
    <label>Sintomas:</label>
    <Etiquetador />
    <br></br>

    <label>Factor de riesgo:</label>
    <Etiquetador />
   
    </>
  )}

export default TabNav