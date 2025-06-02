import { AnyClass } from './AnyClass';

import "@styles/main.scss";



const anyClass = new AnyClass();
anyClass.setProp("Hello World!");

// Vite build supported way to work with ts and html.
const root: HTMLElement = document.getElementById("app") as HTMLElement;

// use Your any own logic. this is here just a simple example.
// the example anyClass was used just to test the import line "import { AnyClass } ..." the right way.
root.insertAdjacentHTML("beforeend", anyClass.getPropHTML() );


