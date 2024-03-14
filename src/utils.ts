import { Item, UserBalance } from "../generated/schema";
import { Address, BigInt } from "@graphprotocol/graph-ts/index"

export function fetchOrCreateUniceranOwnerBalance(tokenId: string, owner: string, timestamp: BigInt): UserBalance {
    let id = generateCombineKey([tokenId, owner]);
  
    let uniceranOwnerBalance = UserBalance.load(id);
    if (uniceranOwnerBalance == null) {
      uniceranOwnerBalance = new UserBalance(tokenId);
      uniceranOwnerBalance.id = id;
      uniceranOwnerBalance.owner = owner;
      uniceranOwnerBalance.balance = BigInt.fromI32(0);
      uniceranOwnerBalance.burnQuantity = BigInt.fromI32(0);
      uniceranOwnerBalance.token = tokenId;
      uniceranOwnerBalance.lastUpdated = timestamp;
    }
    return uniceranOwnerBalance;
  }

  export function generateCombineKey(keys: string[]): string {
    return keys.join('-');
  }

  export function fetchOrCreateUniceran(tokenId: string, timestamp: BigInt): Item {
    let uniceran = Item.load(tokenId);
    if (uniceran == null) {
      uniceran = new Item(tokenId);
      uniceran.id = tokenId;
      uniceran.tokenID = BigInt.fromString(tokenId)
      uniceran.tokenURI = '';
    }
    return uniceran;
  }