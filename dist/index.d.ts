declare type styleTypes = "info" | "warn" | "error" | "log" | "group";
interface ILog {
    info: (message: string, objects?: null | {} | {}[], title?: string) => void;
    error: (message: string, objects?: null | {} | {}[], title?: string) => void;
    log: (message: string, objects?: null | {} | {}[], title?: string) => void;
    warn: (message: string, objects?: null | {} | {}[], title?: string) => void;
    setStyle: (styleType: styleTypes, styles: string) => void;
}
declare const _default: (group?: string) => ILog;
export default _default;
