import "@/styles/globals.css";
import { Sidebar } from "flowbite-react";
import React, { useEffect, useState, useRef } from "react";
import apiClient from "../../services/api";

export default function App({ Component, pageProps }) {
  let [linguagens, setLinguagens] = useState(
    pageProps.linguagens ? pageProps.linguagens : []
  );

  return (
    <div className="flex">
      <div className="w-60">
        <Sidebar
          className="min-h-screen bg-white dark:bg-black fixed w-60"
          aria-label="Sidebar with multi-level dropdown example"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item className="text-xl font-semibold" href="/">
                Destaques
              </Sidebar.Item>
              {linguagens.map((linguagem) => {
                return (
                  <Sidebar.Item href={`/linguagem/${linguagem.nome}`}>
                    {linguagem.nome}
                  </Sidebar.Item>
                );
              })}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="w-full bg-zinc-300">
        <Component {...pageProps} />
      </div>
    </div>
  );
}


App.getInitialProps = async (ctx) => {
  const response = await apiClient.get(`/linguagens`);

  return {
    pageProps: { linguagens: response.data },
  };
};