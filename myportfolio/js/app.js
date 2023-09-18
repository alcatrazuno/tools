const { createApp } = Vue

createApp({
    
    template:`<div class="row">

    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Saldo Ethereum</span>

                <p>Meta: {{ balance1 }} ETH</p>
                <p>Lns: {{ balance2 }} ETH</p>
                <p>Lnx: {{ balance3 }} ETH</p>
                <p>Duran777: {{ balance4 }} ETH</p>
                <p>Alcatrazuno: {{ balance5 }} ETH</p>
                <p>Match: {{ balance6 }} ETH</p>
                <p>Total balance: {{ totalBalance }} ETH</p>

            </div>
            <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
            </div>
        </div>
    </div>

</div>`,

    data() {
        return {
            ms: "Tools Crypto",

            balance1: null,
            balance2: null,
            balance3: null,
            balance4: null,
            balance5: null,
            balance6: null,
        }
    },

    async created() {
        const web3 = new Web3("https://mainnet.infura.io/v3/2aeb83f4097646f78b875e16596bc803");

        const address1 = "0x3ec5B42376BFbE988cC619a0aCFE68049d4fb9bC";
        const address2 = "0xef6EbD32d53285710345DF899B3A6758F037c313";
        const address3 = "0x4dfB4e25Ede5a1d5052a530e0Cf4378Cb1168AF2";
        const address4 = "0x19c0Ff8fCdEE0519A59b9A6cB82e6805a2B747bA";
        const address5 = "0x860f54fFF9cDD80A62E9CeE7E3B94392D0f90c74";
        const address6 = "0xaC1d7b8A727Eab1D4bc2A4db3D97f249F7c9bC94";

        try {
            const [balance1, balance2, balance3, balance4, balance5, balance6 ] = await Promise.all([
                web3.eth.getBalance(address1),
                web3.eth.getBalance(address2),
                web3.eth.getBalance(address3),
                web3.eth.getBalance(address4),
                web3.eth.getBalance(address5),
                web3.eth.getBalance(address6),
            ]);

            this.balance1 = web3.utils.fromWei(balance1, "ether");
            this.balance2 = web3.utils.fromWei(balance2, "ether");
            this.balance3 = web3.utils.fromWei(balance3, "ether");
            this.balance4 = web3.utils.fromWei(balance4, "ether");
            this.balance5 = web3.utils.fromWei(balance5, "ether");
            this.balance6 = web3.utils.fromWei(balance6, "ether");
        } catch (error) {
            console.log(error);
        }
    },
    computed: {
        totalBalance() {
            const balance1 = parseFloat(this.balance1 || 0);
            const balance2 = parseFloat(this.balance2 || 0);
            const balance3 = parseFloat(this.balance3 || 0);
            const balance4 = parseFloat(this.balance4 || 0);
            const balance5 = parseFloat(this.balance5 || 0);
            const balance6 = parseFloat(this.balance6 || 0);
            return balance1 + balance2 + balance3  + balance4  + balance5  + balance6;
        },
    },

}).mount("#app")