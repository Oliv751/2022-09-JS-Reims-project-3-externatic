import { useParams } from "react-router-dom";
import CandidateArea from "./CandidateArea";
import ConsultantArea from "./ConsultantArea";

function Profil() {
  const { type } = useParams();
  /**
   * type : consultant || candidate
   */
  return (
    <>
      {type === "consultant" && <ConsultantArea />}
      {type === "candidate" && <CandidateArea />}
    </>
  );
}

export default Profil;
