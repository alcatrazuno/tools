Vue.component('saludo', {
    template: //html
        `

    <div class="row">
        <div class="col s12 m6" v-for="card in cards">
            <div class="card blue-grey darken-1">
            <!--<span>{{saludo}}</span>-->
                <div class="card-content white-text">
                    <span class="card-title">Saldos {{card.nombre}}</span>
                        <p>Meta: {{ card.balance1 }} ETH</p>
                        <p>Lns: {{ card.balance2 }} ETH</p>
                        <p>Lnx: {{ card.balance3 }} ETH</p>
                        <p>Duran777: {{ card.balance4 }} ETH</p>
                        <p>Alcatrazuno: {{ card.balance5 }} ETH</p>
                        <p>Match: {{ card.balance6 }} ETH</p>
                        <p>Total balance: {{ totalBalance }} ETH</p>
                        
                </div>
            </div>
        </div>
    </div>
    
    `,
    data() {
        return {
            //saludo: 'Wallets list',

            address1: "0x3ec5B42376BFbE988cC619a0aCFE68049d4fb9bC",
            address2: "0xef6EbD32d53285710345DF899B3A6758F037c313",
            address3: "0x4dfB4e25Ede5a1d5052a530e0Cf4378Cb1168AF2",
            address4: "0x19c0Ff8fCdEE0519A59b9A6cB82e6805a2B747bA",
            address5: "0x860f54fFF9cDD80A62E9CeE7E3B94392D0f90c74",
            address6: "0xaC1d7b8A727Eab1D4bc2A4db3D97f249F7c9bC94",

            cards: [
                {   
                    id: 0,
                    nombre: 'Ethereum mainnet', 
                    
                    balance1: null,
                    balance2: null,
                    balance3: null,
                    balance4: null,
                    balance5: null,
                    balance6: null
                },
                { 
                    id: 1,
                    nombre: 'Arbitrum', 

                    balance1: null,
                    balance2: null,
                    balance3: null,
                    balance4: null,
                    balance5: null,
                    balance6: null
            
                },
             /* { nombre: 'Optimism', },
                { nombre: 'ZKsync era', },
                { nombre: 'ZKsync lite' } */
            ]
        }
    },

    async created() {
        const web3 = new Web3("https://mainnet.infura.io/v3/2aeb83f4097646f78b875e16596bc803");
        const web3arb = new Web3("https://arb1.arbitrum.io/rpc");

        /*const address1 = "0x3ec5B42376BFbE988cC619a0aCFE68049d4fb9bC";
        const address2 = "0xef6EbD32d53285710345DF899B3A6758F037c313";
        const address3 = "0x4dfB4e25Ede5a1d5052a530e0Cf4378Cb1168AF2";
        const address4 = "0x19c0Ff8fCdEE0519A59b9A6cB82e6805a2B747bA";
        const address5 = "0x860f54fFF9cDD80A62E9CeE7E3B94392D0f90c74";
        const address6 = "0xaC1d7b8A727Eab1D4bc2A4db3D97f249F7c9bC94"; */

        try {
            const [balance1, balance2, balance3, balance4, balance5, balance6 ] = await Promise.all([
                web3.eth.getBalance(this.address1),
                web3.eth.getBalance(this.address2),
                web3.eth.getBalance(this.address3),
                web3.eth.getBalance(this.address4),
                web3.eth.getBalance(this.address5),
                web3.eth.getBalance(this.address6),

                web3arb.eth.getBalance(this.address1),
                web3arb.eth.getBalance(this.address2),
                web3arb.eth.getBalance(this.address3),
                web3arb.eth.getBalance(this.address4),
                web3arb.eth.getBalance(this.address5),
                web3arb.eth.getBalance(this.address6),
            ]);

            this.cards[0].balance1 = web3.utils.fromWei(balance1, "ether");
            this.cards[0].balance2 = web3.utils.fromWei(balance2, "ether");
            this.cards[0].balance3 = web3.utils.fromWei(balance3, "ether");
            this.cards[0].balance4 = web3.utils.fromWei(balance4, "ether");
            this.cards[0].balance5 = web3.utils.fromWei(balance5, "ether");
            this.cards[0].balance6 = web3.utils.fromWei(balance6, "ether");

            this.cards[1].balance1 = web3arb.utils.fromWei(balance1, "ether");
            this.cards[1].balance2 = web3arb.utils.fromWei(balance2, "ether");
            this.cards[1].balance3 = web3arb.utils.fromWei(balance3, "ether");
            this.cards[1].balance4 = web3arb.utils.fromWei(balance4, "ether");
            this.cards[1].balance5 = web3arb.utils.fromWei(balance5, "ether");
            this.cards[1].balance6 = web3arb.utils.fromWei(balance6, "ether");
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        totalBalance() {
            const balance1 = parseFloat(this.cards[0].balance1 || 0);
            const balance2 = parseFloat(this.cards[0].balance2 || 0);
            const balance3 = parseFloat(this.cards[0].balance3 || 0);
            const balance4 = parseFloat(this.cards[0].balance4 || 0);
            const balance5 = parseFloat(this.cards[0].balance5 || 0);
            const balance6 = parseFloat(this.cards[0].balance6 || 0);
            return balance1 + balance2 + balance3  + balance4  + balance5  + balance6;
        },
    },

})