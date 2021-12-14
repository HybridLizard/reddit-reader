export interface DataEntry {
    [key: string]: any;
};

export interface ResponsePayload {
    data: {
        children: DataEntry[];
        [key: string]: string | number | DataEntry[];
    };
    kind: string;
};
