import { ID } from "@datorama/akita"

export interface Hearx {
  id: ID;
  images: string;
  name: string;
  price: number
}

export interface StoreItem {
  id: ID;
  product_id: number;
  quantity: number;
  price: number;
}

export function createHearx(params: Partial<Hearx>) {
  return {

  } as Hearx;
}
export function createStoreItem(params: Partial<StoreItem>) {
  return {

  } as StoreItem;
}
