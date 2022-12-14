import { useParams } from "react-router-dom";
import Compagny from "../components/Compagny";
import Candidate from "../components/Candidate";
import "../styles/createAccount.scss";

export default function CreateAccount() {
  const { type } = useParams();
  return (
    <div className="createAccount">
      {type === "candidate" && <Candidate />}
      {type === "company" && <Compagny />}
    </div>
  );
}
