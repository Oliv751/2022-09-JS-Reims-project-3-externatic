import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import CandidateArea from "./CandidateArea";
import ConsultantArea from "./ConsultantArea";

function Profil() {
  const { type } = useParams();
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  /**
   * type : consultant || candidate
   */
  if (!auth.isAuthenticated) {
    navigate("/");
  }
  return (
    <>
      {type === "consultant" && <ConsultantArea />}
      {type === "candidate" && <CandidateArea />}
    </>
  );
}

export default Profil;
