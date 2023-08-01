declare namespace daum {
  export type PostcodeResult = {
    address: string;
    zonecode: string;
  }

  export type ThemeObj = {
    searchBgColor: string;
    queryTextColor: string;
  }

  export class Postcode {
    constructor({ oncomplete, width, height }: {
      theme: ThemeObj;
      oncomplete: (data: PostcodeResult) => void;
      width: string;
      height: string;
    });

    embed(element: HTMLElement | null);
  }
}