import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";
import NftMinter from "../components/nftMinter";
import contract from "../AlchemyNFTs.json";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <InstructionsComponent></InstructionsComponent> */}
        <NftMinter
          contractAddress="0x3791df3ee79d5d4f1c875f40646f96bb90c27ba5"
          tokenUri="https://bafkreietkp2sbfwf6octktwgu72v4jmb3nf7uvk6nv2ayi6biqjq2bb5d4.ipfs.nftstorage.link/"
          abi={contract.abi}
          contentSrc="https://bafkreictqcil4z22wwnqtcfbv2fovefqovkz3uw7khm7a7p335wriqckci.ipfs.nftstorage.link/"
        />
      </main>
    </div>
  );
}
