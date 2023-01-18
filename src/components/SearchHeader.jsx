import React from 'react';
import { Link } from 'react-router-dom';
import { FaArchive, FaPencilAlt } from "react-icons/fa";


export default function SearchHeader() {
  return (
    <header>
      <Link to='/'>
        <FaArchive/>
        <h1>Shoppy</h1>
      </Link>
      <nav>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>Carts</Link>
        <Link to='/products/new'>
          <FaPencilAlt/>
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

