import { useParams } from "react-router-dom";
import { useEffect } from "react";
const Detail = () => {
  const params = useParams(); //HOOKS

  //useEffect es un hook que maneja el ciclo de vida del componente
  //Lo hace de distintas maneras...

  //Variante del componentDidMount
  useEffect(() => {
    console.log("fetch de los datos del usuario del id ", params.id);
  }, []);
  return (
    <div>
      <h2>Esta sería la ficha del ID {params.id}</h2>
    </div>
  );
};
export default Detail;
