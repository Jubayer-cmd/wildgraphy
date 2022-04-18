import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const navigateBooking = () => {
    navigate("/booking");
  };
  return (
    <div className="register-form fan">
      <h2 className="text-center m-3 text-primary">CheckOut</h2>
      <form>
        <input type="text" name="Name" id="" placeholder="Name" required />
        <input type="email" name="email" id="" placeholder="E-mail" required />
        <input type="text" name="Address" id="" placeholder="Adress" required />
        <input type="number" name="Phone" id="" placeholder="Number" required />
        <p>
          <Button onClick={navigateBooking} className="btn btn-success">
            Submit
          </Button>
        </p>
      </form>
    </div>
  );
};

export default CheckOut;
