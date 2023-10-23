import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import FormControl from "./FormControl";
import Submitted from "./Submitted";

function RightContainer({ changing, validate }) {
  const [validated, setValidated] = useState({
    cardNumber: false,
    m: false,
    y: false,
    cvc: false,
    user: false,
  });

  const [formValidation, setFormvalidation] = useState(true);
  const [submited, setSubmited] = useState(false);

  useEffect(() => {
    if (
      !validated.m &&
      !validated.y &&
      !validated.cvc &&
      !validated.user &&
      !validated.cardNumber
    ) {
      setFormvalidation(false);
    } else{
      setFormvalidation(true)
    }
  }, [
    validated.m,
    validated.y,
    validated.cvc,
    validated.user,
    validated.cardNumber,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValidation) {
      setSubmited(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setSubmited(false);
    setValidated({
      cardNumber: false,
      m: false,
      y: false,
      cvc: false,
      user: false,
    });
  };

  return (
    <div className="right_container">
      {submited ? (
        <Submitted clicked={handleClick} />
      ) : (
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>CARD HOLDER NAME</Form.Label>
            <FormControl
              name="userName"
              changingValue={changing}
              placeHolder="e.g Jane Appleseed"
              validated={validated.user}
              focus={true}
              blur={(e) => {
                if (
                  e.target.value === "e.g Jane Appleseed" ||
                  e.target.value === ""
                ) {
                  setValidated((prev) => {
                    return { ...prev, user: true };
                  });
                } else {
                  setValidated((prev) => {
                    return { ...prev, user: false };
                  });
                }
              }}
            />
            <p className={validated.user ? "warning" : "hidden"}>
              Can't be blank
            </p>
          </Form.Group>

          <Form.Group>
            <Form.Label>CARD NUMBER</Form.Label>
            <FormControl
              name="cardNumber"
              changingValue={changing}
              placeHolder="e.g 1234 5678 9123 0000"
              validated={validated.cardNumber}
              blur={(e) => {
                if (
                  e.target.value === "0000 0000 0000 0000" ||
                  e.target.value === "" ||
                  isNaN(e.target.value)
                ) {
                  setValidated((prev) => {
                    return { ...prev, cardNumber: true };
                  });
                } else {
                  setValidated((prev) => {
                    return { ...prev, cardNumber: false };
                  });
                }
              }}
            />
            <p className={validated.cardNumber ? "warning" : "hidden"}>
              Wrong format, numbers only
            </p>
          </Form.Group>
          <div className="display_flex gap">
            <Form.Group className="date-inputs">
              <Form.Label>EXP. DATE (MM/YY)</Form.Label>
              <div className="display_flex gap">
                <FormControl
                  name="M"
                  changingValue={changing}
                  placeHolder="MM"
                  validated={validated.m}
                  blur={(e) => {
                    if (
                      e.target.value === "MM" ||
                      e.target.value === "" ||
                      isNaN(e.target.value)
                    ) {
                      setValidated((prev) => {
                        return { ...prev, m: true };
                      });
                    } else {
                      setValidated((prev) => {
                        return { ...prev, m: false };
                      });
                    }
                  }}
                />
                <FormControl
                  name="Y"
                  changingValue={changing}
                  placeHolder="YY"
                  validated={validated.y}
                  blur={(e) => {
                    if (
                      e.target.value === "00" ||
                      e.target.value === "" ||
                      isNaN(e.target.value)
                    ) {
                      setValidated((prev) => {
                        return { ...prev, y: true };
                      });
                    } else {
                      setValidated((prev) => {
                        return { ...prev, y: false };
                      });
                    }
                  }}
                />
              </div>
              <p className={validated.y || validated.m ? "warning" : "hidden"}>
                Can't be blank
              </p>
            </Form.Group>
            <Form.Group className="cvc-input">
              <Form.Label>CVC</Form.Label>
              <FormControl
                name="cvc"
                changingValue={changing}
                placeHolder="cvc"
                validated={validated.cvc}
                blur={(e) => {
                  if (e.target.value === "000" || e.target.value === "") {
                    setValidated((prev) => {
                      return { ...prev, cvc: true };
                    });
                  } else {
                    setValidated((prev) => {
                      return { ...prev, cvc: false };
                    });
                  }
                }}
              />
              <p className={validated.cvc ? "warning" : "hidden"}>
                Can't be blank
              </p>
            </Form.Group>
          </div>

          <button
            type="submit"
            className="confirm-button"
            disabled={formValidation}
          >
            Confirm
          </button>
        </Form>
      )}
    </div>
  );
}

export default RightContainer;
