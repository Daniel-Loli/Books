import React, { useState } from 'react';
import s from './ListBooks.module.css'
import image from '../assets/cover.png';

const ListLectuce = ({ listaLectura, onDelete }) => {
  
  const handleDelete = (index) => {
    onDelete(index);
  };
  
  return (
    <aside className={s.ListLectuce}>
      <h2>Lista de Lectura</h2>
      <ul className={s.listaLectura}>
        {listaLectura.map((libro, index) => (
          <section key={index}>
            <img onClick={() => handleDelete(index)} src={image} alt="Eliminar" />
            <img className={s.img} src={libro.book.cover} alt={`Portada de ${libro.book.title}`} />
          </section>
        ))}
      </ul>
    </aside>
  );
};

export default ListLectuce;
