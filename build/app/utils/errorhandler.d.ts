export declare class ErrorHandler extends Error {
    status: number | string;
    constructor(message: string, status: number | string);
}
