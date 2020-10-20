interface Storage {
    setItem: () => {};
    getItem: () => {};
}
export declare const local: {
    set(key: string, value: Storage): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
export declare const session: {
    set(key: string, value: Storage): void;
    get(key: string): any;
    remove(key: string): void;
    clear(): void;
};
export {};
