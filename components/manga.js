import Link from "next/link";
import Image from "next/image";
import styles from "../styles/mangas.module.css";

export default function Manga({manga}) {
  const {nombre, descripcion, precio, imagen,url} = manga;
  return (
    <div className={styles.manga}>
      <div className={styles.imagen}>
        <Image src={imagen.data.attributes.formats.medium.url} width={400} height={200} alt={`Portada del manga ${nombre}`}/>
      </div>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}.00</p>
        <Link href={`/mangas/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  )
}
