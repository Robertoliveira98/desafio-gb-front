import Head from "next/head";
import { Label, TextInput, Card } from "flowbite-react";
import styles from "@/styles/Home.module.css";
import React, { useState } from "react";
import apiClient from "../../../services/api";

const Detalhes = (props) => {
  let [detalhes, setDetalhes] = useState(props.detalhes ? props.detalhes : {});

  return (
    <>
      <Head>
        <title>Detalhes do repositorio</title>
        <meta name="description" content="Lista de destaques" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card className="container mx-auto">
          <div className="flex flex-col gap-4">
            <Label htmlFor="nome">Nome do Repositorio</Label>
            <TextInput
              type="text"
              id="nome"
              defaultValue={detalhes.nome}
              readOnly={true}
            />
            <Label htmlFor="criador">Criador</Label>
            <TextInput
              type="text"
              id="criador"
              defaultValue={detalhes.criador}
              readOnly={true}
            />
            <Label htmlFor="linguagem">Linguagem</Label>
            <TextInput
              type="text"
              id="criador"
              defaultValue={detalhes.linguagem}
              readOnly={true}
            />
            <Label htmlFor="link">Lisk para Repositório</Label>
            <TextInput
              type="text"
              id="link"
              defaultValue={detalhes.url}
              readOnly={true}
            />
            <Label htmlFor="descricao">Descrição</Label>
            <TextInput
              type="text"
              id="link"
              defaultValue={detalhes.descricao}
              readOnly={true}
            />
            <Label htmlFor="estrelas">Estrelas</Label>
            <TextInput
              type="text"
              id="link"
              defaultValue={detalhes.estrelas}
              readOnly={true}
            />
            <Label htmlFor="topicos">Topicos</Label>
            <TextInput
              type="text"
              id="link"
              defaultValue={detalhes.topicos.join(", ")}
              readOnly={true}
            />
          </div>
        </Card>
      </main>
    </>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const { idRepositorio } = context.query;
  const response = await apiClient.get(`/detalhes/${idRepositorio}`);
  return { props: { detalhes: response.data } };
}
