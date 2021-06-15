import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";

function App(props: any) {
  console.log("App rendering")
  return (
    <div>
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false}/>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle (props: PageTitlePropsType) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}

export default App;
