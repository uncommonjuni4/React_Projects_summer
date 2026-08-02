import { IoIosClose } from "react-icons/io";
import { CgCheck } from "react-icons/cg";

// 1. Props mein handlesubmit aur handlOneTodoitem (ya delete function) receive karein
export default function DigitalList({ value, idex, onDeleteItem, onToggleComplete }) {


  return (
    <>
      <li>
        <div className="list">
          {/* Index 0 se shuru hota hai, display ke liye + 1 kar diya taake 1, 2, 3 dikhe */}
          <p> {idex + 1}. {value.name} </p>
          <p> ${value.price} </p>
          
          {/* 2. Check Button: Jab is par click ho */}
          <button 
            className="btn-add" 
            onClick={() => onToggleComplete(idex)}
          >
            <CgCheck className="add" />
          </button>
          
          {/* 3. Remove Button: Jab is par click ho toh index pass karein */}
          <button 
            className="btn-cancel" 
            onClick={() => onDeleteItem(idex)}
          >
            <IoIosClose className="cancel" />
          </button>
        </div>
      </li>
    </>
  );
}