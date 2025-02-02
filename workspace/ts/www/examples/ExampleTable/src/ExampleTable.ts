import { Table } from "@jaisocx/table";

export class ExampleTable {
  holderId: any;

  url: any;

  constructor(
    id: any,
    url: any
  ) {
    this.holderId = id;
    this.url = url;

    this.render(
      id,
      url
    );
  }

  render(
    id: any,
    url: any
  ): void {
    const table = new Table();



    
  }
}
