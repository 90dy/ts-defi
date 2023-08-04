import * as bip39 from "bip39";
import { ethers } from "ethers";

for (let _90d7 = "90d7"; _90d7.length < 40; _90d7 += "90d7") {
	while (true) {
		const mnemonic = bip39.generateMnemonic(256);
		const wallet = ethers.Wallet.fromPhrase(mnemonic);

		if (wallet.address.startsWith(`0x${_90d7}`)) {
			console.log(`Address: ${wallet.address}`);
			console.log(`Private Key: ${wallet.privateKey}`);
			console.log(`Mnemonic: ${mnemonic}`);
			console.log(`Mnemonic Phrase: ${wallet.mnemonic?.phrase}`);
			console.log(`Mnemonic wordlist: ${wallet.mnemonic?.wordlist}`);
			console.log("");
			break;
		}
	}
}
