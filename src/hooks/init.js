import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initialize=()=>{
    initializeApp(firebaseConfig);
}

export default initialize;