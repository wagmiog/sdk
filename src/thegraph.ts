export interface theGraph {
    chainId: string;
    tokens_whitelist: string[];
    native_price_pre_stable: string;
    mining_pools: string[];
    stables_pair_AEB?: string[];
    stables_pair_AEB_block?: number[];
    stables_pair_AB?: string[];
    stables_pair_AB_block?: number;
  }

export const GRAPH_AVALANCHE_MAINNET: theGraph = {
    chainId: "avalanche_mainnet",
    tokens_whitelist: ['0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // WAVAX
      '0x60781c2586d68229fde47564546784ab3faca982', // PNG
      '0xde3a24028580884448a5397872046a019649b084', // USDT
      '0xc7198437980c041c805a1edcba50c1ce5db95118', // USDT.e
      '0xba7deebbfc5fa1100fb055a87773e1e99cd3507a', // DAI
      '0xd586e7f844cea2f87f50152665bcbc2c279d8d70', // DAI.e
      '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', // USDC.e
      '0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15', // ETH
      '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab', // WETH.e
      '0x408d4cd0adb7cebd1f1a1c33a0ba2098e1295bab', // WBTC
      '0x50b7545627a5162f82a992c33b87adc75187b218', // WBTC.e
      '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC (native)
      '0x260bbf5698121eb85e7a74f2e45e16ce762ebe11'  // UST (axelar)
    ],
    native_price_pre_stable: '30',
    mining_pools: ['0x1f806f7c8ded893fd3cae279191ad7aa3798e928',"0xa16381eae6285123c323a665d4d99a6bcfaac307","0x4f019452f51bba0250ec8b69d64282b79fc8bd9f","0x01897e996eefff65ae9999c02d1d8d7e9e0c0352","0x8fd2755c6ae7252753361991bdcd6ff55bdc01ce","0x7d7ecd4d370384b17dfc1b4155a8410e97841b65","0xb5b9ded9c193731f816ae1f8ffb7f8b0fae40c88","0xe4d9ae03859dac6d65432d557f75b9b588a38ee1","0x88f26b81c9cae4ea168e31bc6353f493fda29661","0xee0023108918884181e48902f7c797573f413ece","0x797cbcf107519f4b279fc5db372e292cdf7e6956","0x4e550fefbf888cb43ead73d821f646f43b1f2309","0x7accc6f16bf8c0dce22371fbd914c6b5b402bf9f","0x99b06b9673fea30ba55179b1433ce909fdc28723","0x4ad6e309805cb477010bea9ffc650cb27c1a9504","0x8866077f08b076360c25f4fd7fbc959ef135474c","0x41188b4332fe68135d1524e43db98e81519d263b","0x6955cb85edea63f861c0be39c3d7f8921606c4dc","0xb921a3ae9ceda66fa8a74dbb0946367fb14fae34","0x2061298c76cd76219b9b44439e96a75f19c61f7f"'0x417c02150b9a31bcacb201d1d60967653384e1c6','0x830a966b9b447c9b15ab24c0369c4018e75f31c9','0x94c021845efe237163831dac39448cfd371279d6','0x006cc053bdb84c2d6380b3c4a573d84636378a47','0xe968e9753fd2c323c2fe94caff954a48afc18546','0x30cbf11f6fcc9fc1bf6e55a6941b1a47a56eaec5','0x574d3245e36cf8c9dc86430eadb0fdb2f385f829','0xbda623cdd04d822616a263bf4edbbce0b7dc4ae7','0x2e10d9d08f76807efdb6903025de8e006b1185f5','0x701e03fad691799a8905043c0d18d2213bbcf2c7','0x63a84f66b8c90841cb930f2dc3d28799f0c6657b','0x1f6acc5f5fe6af91c1bb3bebd27f4807a243d935','0x6e36a71c1a211f01ff848c1319d4e34bb5483224','0xda354352b03f87f84315eef20cdd83c49f7e812e','0x2d55341f2abbb5472020e2d556a4f6b951c8fa22','0x4df32f1f8469648e89e62789f4246f73fe768b8e','0xa04fcce7955312709c838982ad0e297375002c32','0x2c31822f35506c6444f458ed7470c79f9924ee86','0x642c5b7ac22f56a0ef87930a89f0980fca904b03','0x640d754113a3cbdd80bccc1b5c0387148eebf2fe','0xf2b788085592380bfcac40ac5e0d10d9d0b54eee','0xd3e5538a049fcfcb8df559b85b352302fefb8d7c','0x4e258f7ec60234bb6f3ea7ecff5931901182bd6e','0x21cca1672e95996413046077b8cf1e52f080a165','0x4219330af5368378d5ffd869a55f5f2a26ab898c','0xd7edbb1005ec65721a3976dba996adc6e02dc9ba','0x079a479e270e72a1899239570912358c6bc22d94','0x99918c92655d6f8537588210cd3ddd52312cb36d','0xb600429ccd364f1727f91fc0e75d67d65d0ee4c5','0x29a7f3d1f27637eda531dc69d989c86ab95225d8','0xed472431e02ea9ef8cc99b9812c335ac0873bba2','0xa296f9474e77ae21f90afb50713f44cc6916fbb2','0x2e60ab79bbcdfea164874700d5d98969a386eb2a','0x84b536da1a2d9b0609f9da73139674cc2d75af2d','0xe6de666a80a357497a2cab3a91f1c28dcaa1eca4','0xf2dd964acf53ad8959540cceefd9fea13d4d0eb1','0xd31ffd05a41645631a22a64c1f870a6248a4ddcf','0xa6f2408e3cd34084c37a0d88fed8c6b6490f7529','0xd64370aedbebbae04cfcae27e8e0c5ecbd343336','0x0029381eff48e9ea963f8095ea204098ac8e44b5','0x94183dd08ffaa595e43b104804d55ee95492c8cb','0x10e5d5f598abb970f85456ea59f0611d77e00168','0xfd0824df1e598d34c3495e1c2a339e2fa23af40d','0x76ad5c64fe6b26b6ad9aaaa19eba00e9eca31fe1','0x5105d9de003fb7d22979cd0ce167ab919e60900a','0x255e7a0eb5aa1616781702203b042821c35394ef','0x6f571ba11447136fc11ba9ac98f0f0233dac1bff','0xed617a06c6c727827ca3b6fb3e565c68342c4c2b','0xbd56b964fcdd208a7a83c291864eeb8271bab773','0x5d479aebfc49b9e08860bbfcfb3bb4d768aa1fc3','0xc0b2d45b8617997bcdad0f33aee03e4df4c4f81e','0x184949e5a7e8740da20231b90fd38e7725fa657a','0x2dae4d6cccd824917ca783774c1e8854ff86951f','0x62da43b98a9338221cc36dda40605b0f5ea0ac2d','0xda959f3464fe2375f0b1f8a872404181931978b2','0x05930052a9a1e2f14b0e6ccc726b60e06792fb67','0x01bc14c7063212c8cac269960ba875e58568e4fd','0xac102f66a1670508dfa5753fcbbba80e0648a0c7','0x6cfdb5ce2a26a5b07041618fdad81273815c8bb4','0xd43035f5ef932e1335a664c707d85c54c924667e','0x45cd033361e9fef750aaea96dbc360b342f4b4a2','0x12b493a6e4f185ef1feef45565654f71156c25ba','0x716c19807f46f97ddac0745878675ff5b3a75004','0x437352a8e2394379521bc84f0874c66c94f32fbb','0x676247d8729b728beea83d1c1314acdd937327b6','0x30914dbb452bef7ad226af0aeb130658a4ac1cb0','0xfc04c452035a1e4d4fd4d5bf6b083cb563a20ca4','0xa69057977211c7bae847c72df6338d1b71e838af','0xaa01f80375528f36291677c683905b4a113a6470','0x41d731926e5b8d3ba70bb62b9f067a163be706ab','0xe4fed988974c0b7dfeb162287ded67c6b197af63','0x0875e51e54fbb7e63b1819acb069dc8d684563eb','0x6528dcc443b2e014185946d1dc1efd6e9abe4cd8','0x55152e05202ae58fdab26b20c6fd762f5bca797c','0x23855f21d158efae410e3568fb623c35bc1952e0','0xd6887808cfcd5cbff867379e41fac912f167b084','0xfe6338bebef1989afa225494a63f235d8e8f46fd','0xc2ecb35624ad941474371e696ac8dad0dda5e4d5''0x7ac007afb5d61f48d1e3c8cc130d4cf6b765000e','0x03a9091620cacee4968c915232b175c16a584733','0xe2510a1fcccde8d2d1c40b41e8f71fb1f47e5bba','0x7216d1e173c1f1ed990239d5c77d74714a837cd5','0x681047473b6145ba5db90b074e32861549e85cc7','0xeeea1e815f12d344b5035a33da4bc383365f5fee','0x6356b24b36074abe2903f44fe4019bc5864fde36','0x4b283e4211b3faa525846d21869925e78f93f189','0xe3103e565cf96a5709ae8e603b1efb7fed04613b','0xf344611dd94099708e508c2deb16628578940d77','0x4f74bbf6859a994e7c309ea0f11e3cc112955110','0xd4e49a8ec23dab51aca459d233e9447de03afd29','0x633f4b4db7dd4fa066bd9949ab627a551e0ecd32','0x923e69322bea5e22799a29dcfc9c616f3b5cf95b','0xfd9acec0f413ca05d5ad5b962f3b4de40018ad87','0x3f91756d773a1455a7a1a70f5d9239f1b1d1f095','0xc7d0e29b616b29ac6ff4fd5f37c8da826d16db0d','0x269ed6b2040f965d9600d0859f36951cb9f01460','0x08b9a023e34bad6db868b699fa642bf5f12ebe76','0x759ee0072901f409e4959e00b00a16fd729397ec','0x12a33f6b0dd0d35279d402ab61587fe7eb23f7b0','0x518b07e2d9e08a8c2e3cb7704336520827a4d399','0x68a90c38bf4f90ac2a870d6fca5b0a5a218763ad','0x5b3ed7f47d1d4fa22b559d043a09d78bc55a94e9','0x76e404ab7357fd97d4f1e8dd52f298a035fd408c','0x0a9773aebc1429d860a492d70c8ea335faa9f19f','0x80e919784e7c5ad3dd59cafcdc0e9c079b65f262','0x42ff9473a5aea00de39355e0288c7a151eb00b6e','0x3a0ef6a586d9c15de30edf5d34ae00e26b0125ce','0x2bd42c357a3e13f18849c67e8dc108cc8462ae33','0x393fe4bc29afbb3786d99f043933c49097449fa1','0x07b34daabcb75c9cbd0c8aefbc0ed5e30845ef12','0x73d1cc4b8da555005e949b3ecee490a7206c14df','0xe1314e6d436877850bb955ac074226fcb0b8a86d','0x6fa49bd916e392dc9264636b0b5cf2beee652da3','0x95bd8fdb58692d343c89bc7bc435773779cc0e47','0xb008e7ad32c710b07fb8d4453abc79214cd34891','0x4c0650668a63ef468c7bdcd910a62287e9fc4d52','0xecf9b9ae88150f11cbf2263c69823e2ecb84f07b','0x7c960e55c8119457528490c3a34c1438faf6b039','0xfcb0c53fc5c71005d11c6838922e254323b7ca06',];
    stables_pair_AEB: ['0x9ee0a4e21bd333a6bb2ab298194320b8daa26516', // AEB_USDT_WAVAX_PAIR
      '0x17a2e8275792b4616befb02eb9ae699aa0dcb94b'], // AEB_DAI_WAVAX_PAIR
    stables_pair_AEB_block: [60337, // AEB_USDT_WAVAX_PAIR_BLOCK
      60355], // AEB_DAI_WAVAX_PAIR_BLOCK 
    stables_pair_AB: ['0xba09679ab223c6bdaf44d45ba2d7279959289ab0', // AB_USDT_WAVAX_PAIR
      '0xe28984e1ee8d431346d32bec9ec800efb643eef4'], // AB_DAI_WAVAX_PAIR
    stables_pair_AB_block: 3117207, // AB_MIGRATION_CUTOVER_BLOCK
  },

  export const THEGRAPHS: theGraph[] = [
    GRAPH_AVALANCHE_MAINNET
  ]