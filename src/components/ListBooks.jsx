import React,{useState}  from 'react';
import BookComponent from './BookComponent';
import libros from '../../books.json';
import Filter from './Filter';
import list from './ListBooks.module.css';

import ListLectuce from './ListLectuce';

const ListBooks = () => {
  const [listaLectura, setListaLectura] = useState([]);

  const agregarAListaLectura = (libro) => {
    setListaLectura((prevLista) => [...prevLista, libro]);
  };

  const handleDelete = (index) => {
    setListaLectura((prevLista) => prevLista.filter((libro, i) => i !== index));
  };

  return (
    <>
      {}
      <div className={list.contprincipal}>
        <main className={list.container}>
          {libros.library.map((libro, index) => (
            <BookComponent
              key={index}
              libro={libro}
              onAgregarListaLectura={() => agregarAListaLectura(libro)}
              onDelete={() => handleDelete(index)} 
            />
          ))}
        </main>
        <ListLectuce listaLectura={listaLectura} onDelete={handleDelete} /> {}
      </div>
    </>
  );
};

export default ListBooks;