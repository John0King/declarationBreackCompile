/// <reference  no-default-lib="true" />
/// <reference lib="ES2015" />
/// <reference path="my.dom.d.ts" />

declare var  console: MyConsole;
declare class MyWebSocket{
    constructor(url:string);
    open():Promise<void>
}