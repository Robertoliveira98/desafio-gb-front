import React, { useState } from "react";
import apiClient from '../../services/api';
import ListaDestaques from '../components/ListaDestaques';

const Destaques = (props) => {
  return (<ListaDestaques  {...props} />)
}

export default Destaques;

export async function getServerSideProps(context) {
  let response = await apiClient.get(`/listarDestaques`);
  if (response.data.length == 0) {
    await apiClient.get(`/salvarDestaques`);
    response = await apiClient.get(`/listarDestaques`);
  }
  return { props: { destaques: response.data } };
}
