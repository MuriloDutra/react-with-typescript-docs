import { useState, useContext } from "react";
import Form from "./components/Form";
import { InputValueContext } from "./context/InputValueContext";
import { User } from "./interfaces/User";

interface AppProps {
  headerText: string;
  extraText?: string;
  subText?: string;
}

type CheckoutStep = "Details" | "Shipping" | "Payment";

function App({ headerText, extraText, subText = "How are you?" }: AppProps) {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details");
  const [user, setUser] = useState<User | null>(null);
  const { state, dispatch } = useContext(InputValueContext);

  function fetchUser(): void {
    setUser({
      name: "Murilo",
      age: 21,
      country: "Brazil",
      address: {
        street: "Main street",
        number: 88,
        zip: "13044502",
      },
      admin: false,
    });
  }

  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      {subText && <p>{subText}</p>}

      <button onClick={fetchUser}>Fetch user on click</button>
      {user && <p>Hello, {user.name}!</p>}

      <Form />

      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: "SET_INPUT_VALUE_TO_100" })}>
        SET VALUE TO 100
      </button>

      {checkoutStep === "Details" && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep("Shipping")}>
            Next
          </button>
        </>
      )}
      {checkoutStep === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep("Payment")}>
            Next
          </button>
        </>
      )}
      {checkoutStep === "Payment" && <h1>Payment</h1>}
    </>
  );
}

export default App;
