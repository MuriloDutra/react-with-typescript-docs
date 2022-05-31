import { useState } from "react";
import { User } from "./interfaces/User";

interface AppProps {
  headerText: string;
  extraText?: string;
  subText?: string;
}

function App({ headerText, extraText, subText = "How are you?" }: AppProps) {
  const [user, setUser] = useState<User | null>(null);

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
    </>
  );
}

export default App;
