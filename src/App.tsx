interface AppProps {
  headerText: string;
  extraText?: string;
  subText?: string;
}

function App({ headerText, extraText, subText = "subtext here" }: AppProps) {
  return (
    <>
      <h1>{headerText}</h1>
      {extraText && <p>{extraText}</p>}
      {subText && <p>{subText}</p>}
    </>
  );
}

export default App;
