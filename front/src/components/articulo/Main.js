import React, { useEffect, useState } from "react";
import { APICall } from "../../API";

export default function Main({}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      APICall.getnoticias().then((res) => {
        setArticles(res.data);
      });
    };
    getNews();
  }, []);

  //map articlesw by id
  const articlesMap = articles.map((articles) => articles.id);


  return (
    <div className="news-list">
      <div className="intro-y news  p-5 box-noticia">
        <h2 className="intro-y font-medium text-xl sm:text-2xl">
          Esto seria el titulo
        </h2>
        <div className="intro-y mt-3 text-xs">
          22/22/2021
        </div>
        <div className="intro-y mt-6">
          <div className="image-fit">
            <img
              alt="img"
              className="rounded-md"
              src="https://resizer.glanacion.com/resizer/7z-HW9yYESQ7E7l3lknhdfRt0t8=/375x250/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/X6E5JB3REVFKDGLTCFM4EHKX4M.JPG"
            />
          </div>
        </div>
        <div className="intro-y text-justify leading-relaxed">
          <p className="mb-5">
            Una vez terminado el desayuno convocado por el expresidente Mauricio Macri este martes en el Hotel NH Buenos Aires City, en Bolívar 160, en el casco histórico porteño y a metros del Cabildo, los presidentes de bloque de las Cámaras de Diputados y Senadores de Pro leyeron un comunicado en el que ratificaron el “compromiso por la unidad de Pro y de Juntos por el Cambio”. Y precisaron que se estableció “un mecanismo” dentro del partido fundado por Macri “para coordinar entre los precandidatos para que se eviten tensiones innecesarias”. En ese sentido, el titular de la bancada en Diputados, Cristian Ritondo, excluyó de esa carrera al expresidente al asegurar que los pretendientes a la presidencia dentro del espacio son Patricia Bullrich, María Eugenia Vidal y Horacio Rodríguez Larreta. Y expresó su “honda preocupación por la situación económica”. “Creemos que Massa no se está haciendo cargo de los cambios necesarios y ya hemos advertido y reiteramos que se está construyendo una bomba económica hacia el futuro”, apuntó al leer el comunicado. Ads by La dirigencia de Pro buscó limar asperezas en medio de una feroz interna que se intensificó en las últimas semanas. El encuentro se llevó a cabo antes de la reunión de la mesa nacional de Juntos por el Cambio (JxC) pautada para esta tarde. Además de los mencionados referentes, participaron de la cumbre el jefe de Gobierno porteño, Horacio Rodríguez Larreta, los diputados nacionales María Eugenia Vidal y Diego Santilli, y el senador Humberto Schiavoni. Uno de los primeros en arribar fue Macri, quien llegó alrededor de las 8 y evitó hacer declaraciones políticas a los periodistas que se agolpaban en la entrada del hotel. “Falta poco para el Mundial”, expresó en medio de numerosas consultas acerca del desayuno que se realiza esta mañana y luego fue él quien les preguntó a los cronistas: “¿Quién gana el mundial?”. Acto seguido, ingresó a la reunión. Minutos más tarde, Ritondo llegó al lugar y ofreció algunas breves definiciones con relación al encuentro, al que describió como “una reunión más”. Después, agregó: “Nos juntamos los miembros de conducción del partido para charlar”. Asimismo, el legislador negó que el objetivo de la cumbre sea definir liderazgos. “El líder de Pro es Mauricio Macri”, aseguró y cuando le preguntaron si le pedirán a Bullrich que baje el nivel de tensión tras los dichos al jefe de Gabinete de Larreta, Felipe Miguel, contestó: “A todos, ¿por qué a Patricia sola?”. Por último, destacó que hoy la verdadera discusión política tiene que ver con “lo que pasa en el país, donde la inflación es del 100%”, y confirmó que será candidato a gobernador de la provincia de Buenos Aires por JxC, espacio al que describió como “la mejor opción” con miras a los comicios de 2023. Los restantes integrantes de Pro ingresaron poco después y evitaron hacer declaraciones a los medios. Feroz interna dentro de Pro El encuentro de esta mañana se acordó tras un nuevo y feroz round entre Bullrich y Larreta, que se desató por la difusión de un video en donde la líder de Pro increpa al jefe de Gabinete porteño, Felipe Miguel, en la presentación del libro de Mauricio Macri. “No me cruces más por la tele porque la próxima te rompo la cara, conmigo no se jode, te lo aviso”, le disparó Bullrich, quien señaló que la razón de su enojo era que el funcionario del larretismo la había acusado de ser “funcional al kirchnerismo” con sus críticas a Larreta. “Tenemos diferencias producto de una fuerza que aspira a gobernar, y un espacio que es heterogéneo. La diversidad bien manejada enriquece”, sostuvo ayer el jefe de Gobierno porteño en LN+. Sus allegados señalan que esa será su postura en el desayuno Pro: intentará “apaciguar las aguas” y “limar asperezas”. En el entorno de Bullrich, mientras tanto, coinciden en que “la unidad está garantizada”, pero advierten: “Hay que discutir con honestidad y transparencia”. Reconocen, sin embargo, que es cada vez más complejo continuar con la lógica de “tensionar sin romper” y recuerdan que Macri tampoco ayudó a bajar la tensión, sino que muchas veces fomentó la competencia interna. “Está todo roto, no hay canales de diálogo”, se sinceró una fuente partidaria sobre los vínculos entre la tropa de Larreta y Bullrich. Por su parte, Vidal buscó tomar distancia del conflicto la semana pasada. “Las discusiones que están teniendo las distintas fuerzas de Juntos por el Cambio tienen que ver con una discusión anticipada de candidaturas que para mi está mal. La discusión antes de tiempo, la construcción de personalismos y las descalificaciones le hacen daño a la unidad de Juntos por el Cambio y además nos alejan de la gente”, afirmó durante una recorrida por Mendoza a la radio Nihuil. De esta forma, aludió al debate por el sucesor de Rodríguez Larreta en la Ciudad, distrito que para Bullrich debe continuar bajo la conducción de Pro. En este contexto, JxC realizará a las 18 y de manera virtual una reunión de la que participarán sus principales líderes. Aunque suponen que probablemente hablarán de las elecciones en las provincias y el trabajo programático de las fundaciones que integran la coalición, el temario del encuentro no estaba definido hasta esta mañana. Como en el desayuno del Pro, más allá de las discusiones programáticas de la fuerza, lo cierto es que las internas sin cuartel asoman como la prioridad a resolver.
          </p>
        </div>
        
      </div>
    </div>
  );
}
