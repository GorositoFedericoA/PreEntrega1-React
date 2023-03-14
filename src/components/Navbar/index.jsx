import React from 'react'
import CartWidget from '../CartWidget'
import styles from './Navbar.module.scss'
const Navbar = () => {
  return (

    <div className={styles.container}>
      <a className={styles.a} href="">Inicio</a>
      <a className={styles.a} href="">Contacto</a>
      <a className={styles.a} href="">Carrito<CartWidget icono="https://cdn-icons-png.flaticon.com/512/107/107831.png" /><p className={styles.numItem}>3</p></a>
      
    </div>


  )
}

export default Navbar