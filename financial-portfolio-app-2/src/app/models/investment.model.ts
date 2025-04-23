export interface Investment {
    id?: string;
    assetType: string;
    name: string;
    symbol?: string;
    quantity: number;
    purchasePrice: number;
    purchaseDate: string;
    currentPrice?: number;
    notes?: string;
  }