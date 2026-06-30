
type Mods = Record<string, boolean>;


export function classNames(cls:string, mode:Mods = {}, additional:string[] = []):string {
    return [
        cls ,
        ...additional.filter(Boolean),
        ...Object.entries(mode)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) =>classNames)
    ].join(" ")
}
