import React from 'react'
import s from './ListBooks.module.css'

const BookComponent = ({libro, onAgregarListaLectura}) => {
    const { title, pages, genre, cover, author } = libro.book;

    return (
      <div>
        <h2>{title}</h2>
        <img className={s.img} src={cover} alt={`Portada de ${title}`} style={{ maxWidth: '200px' }} onClick={onAgregarListaLectura} />
        <p>Páginas: {pages}</p>
        <p>Género: {genre}</p>
        <p>Autor: {author.name}</p>
        {/* Otras propiedades del libro */}
      </div>
    );
}

export default BookComponent