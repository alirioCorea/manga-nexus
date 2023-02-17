import Layout from "@/components/layout";
import Manga from "@/components/manga";
import styles from "../styles/grid.module.css";
export default function Tienda({mangas}) {
  return (
    <>
      <Layout
        title="Manga - Nexus - Tienda"
        description="This is the store page"
      >
        <main className="contenedor">
          <h2 className="heading">Nuestra colección</h2>
          <div className={styles.grid}>
            {mangas?.map((manga) => (
              <Manga key={manga.id} manga={manga.attributes} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  );
}

/* export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/mangas`);
  const mangas = await respuesta.json();
  return {
    props: {
      mangas,
    },
  };
} */

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/mangas?populate=imagen`);
  const {data : mangas} = await respuesta.json();
  return {
    props: {
      mangas,
    },
  };
}