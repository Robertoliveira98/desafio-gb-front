import React, { useState } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Table } from "flowbite-react";

const Destaques = (props) => {
  let [destaques, setDestaques] = useState(
    props.destaques ? props.destaques : []
  );

  return (
    <>
      <Head>
        <title>Lista de destaques</title>
        <meta name="description" content="Lista de destaques" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="w-full">
          <Table striped={true}>
            <Table.Head>
              <Table.HeadCell>Nome</Table.HeadCell>
              <Table.HeadCell>Criador</Table.HeadCell>
              <Table.HeadCell>Linguagem</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {destaques.map((destaque) => {
                return (
                  <Table.Row key={destaque.nome} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {destaque.nome}
                    </Table.Cell>
                    <Table.Cell>{destaque.criador}</Table.Cell>
                    <Table.Cell>{destaque.linguagem}</Table.Cell>
                    <Table.Cell>
                      <a
                        href={`/detalhes/${destaque._id}`}
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Detalhar
                      </a>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>
      </main>
    </>
  );
};

export default Destaques;
