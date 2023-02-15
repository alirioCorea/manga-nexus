import Layout from "@/components/layout";
import Image from "next/image";
import styles from "@/styles/nosotros.module.css";
export default function Foooter() {
  return (
    <>
      <Layout
        title="Manga - Nexus - Nosotros"
        description="This is the about page"
      >
        <main className="contenedor">
          <h2 className="heading">Nosotros</h2>  
          <div className={styles.contenido}>
            <Image src="/img/nosotros-img.jpg" width={1000} height={959} alt="Estanteria de mangas que representan el ambiente de este sitio"/>
            <div>
              <p>Somos un equipo apasionado de fanáticos del manga y el anime que han unido fuerzas para crear una comunidad en línea donde los fanáticos de todo el mundo puedan conectarse y disfrutar de su amor por el manga. En Manga Nexus, no solo encontrarás una amplia selección de mangas en nuestra tienda en línea, sino también artículos sobre los mangas más populares y recomendaciones de nuevos títulos que creemos que te encantarán.</p>
              <p>Nuestro objetivo es brindarte una experiencia única al visitar nuestra página, por lo que hemos trabajado arduamente para garantizar que nuestro sitio web sea fácil de navegar y esté lleno de contenido interesante para mantenerte entretenido. Desde nuestros blogs sobre los mangas más populares hasta nuestra comunidad en línea de fanáticos del manga, Manga Nexus es el lugar perfecto para cualquier amante del manga que busque una experiencia única en línea. ¡Únete a nosotros y descubre todo lo que tenemos para ofrecer!</p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}