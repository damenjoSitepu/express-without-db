export interface ChartOfAccountsResponse {
    error: boolean;
    code: number;
    message: string;
    data?: {
        chartOfAccounts: ChartOfAccount[]
    }
}

export interface ChartOfAccount {
    id: number;
    name: string;
    isActive: boolean;
}
