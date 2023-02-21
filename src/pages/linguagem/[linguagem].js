import React from "react";
import apiClient from "../../../services/api";
import ListaDestaques from "../../components/ListaDestaques";

const Destaques = (props) => {
  return <ListaDestaques {...props} />;
};

export default Destaques;

export async function getServerSideProps(context) {
  const { linguagem } = context.query;
  let response = await apiClient.get(`/listarDestaques/${linguagem}`);
  return { props: { destaques: response.data } };
}
