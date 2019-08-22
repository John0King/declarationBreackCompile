declare interface MyConsole{
    log(...args:any[]):void;
    warn(...args:any[]):void;
    error(...args:any[]):void;
    ban():void;
}