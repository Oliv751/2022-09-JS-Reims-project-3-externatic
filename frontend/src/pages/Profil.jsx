import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import CandidateArea from "./CandidateArea";
import ConsultantArea from "./ConsultantArea";

function Profil() {
  const { type } = useParams();
  const { auth } = useContext(AuthContext);

  /**
   * type : consultant || candidate
   */

  return (
    <>
      {type === "consultant" && auth.isAuthenticated && <ConsultantArea />}
      {type === "candidate" && auth.isAuthenticated && <CandidateArea />}
    </>
  );
}

export default Profil;
