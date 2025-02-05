import { keypairToSecretKeyJSON } from "@solana-developers/node-helpers";
import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { writeFileSync } from "fs";

const privateKey = process.argv[2];
const writeFilePath = process.argv[3] || "./id.json";

const secretKey = bs58.decode(privateKey);

const keypair = Keypair.fromSecretKey(secretKey);

writeFileSync(writeFilePath, keypairToSecretKeyJSON(keypair));
