/*
    ======================
    used nix.conf:

    server=1
    par=1
    rpcbind=127.0.0.1
    rpcallowip=127.0.0.1
    rpcport=3335
    rpcuser=username1
    rpcpassword=password1
    rpcclienttimeout=30
    rpcthreads=2
    rpcworkqueue=1000
    staking=0
    enableaccounts=1
    ======================
 */

const Client = require('./dist/src/index.js');
const client = new Client({
    username: 'username1',
    password: 'password1',
    port: 3335,
    network: 'mainnet' });

client.command('ghostamountv2', '0.1').then(value => console.log(value)); //ghost 0.1 NIX and log response
client.command('unghostamountv2', '0.1').then(value => console.log(value)); //un-ghost 0.1 NIX and log response

