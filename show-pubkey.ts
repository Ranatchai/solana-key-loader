import { getKeypairFromFile } from "@solana-developers/node-helpers";
import bs58 from "bs58";

const keypair = await getKeypairFromFile();
const publicKey = keypair.publicKey.toString();
const privateKey = bs58.encode(keypair.secretKey);

console.log("publicKey", publicKey);
console.log("secretKey", privateKey);
