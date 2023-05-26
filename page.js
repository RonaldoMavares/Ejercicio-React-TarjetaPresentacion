"use client";
import { useState, useEffect } from "react";

export default function Principal() {
  const [datos, ponerDatos] = useState(null);

  useEffect(() => {
      async function llamarApi() {
      const peticion = await fetch("https://reqres.in/api/users?page=2");
      const respuesta = await peticion.json();
      ponerDatos(respuesta.data);
    }
  llamarApi();
  }, []);

  return(
    <u>
    {datos ? (
      datos.map((datos) => {
        return <Tarjeta datos={datos} />;
      })
    ) : (
      <p>Cargando...</p>
    )}
  </u>
  )
  
};

function Tarjeta(props) {

  return (
    <>
    { props.datos ? (
      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={props.datos.avatar} alt=""/>
          <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.datos.first_name}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.datos.email}</p>
          </div>
      </a>
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
}