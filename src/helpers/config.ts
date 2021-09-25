import config from '@/config.json';

let id = 'master';
const domainName = window.location.hostname;
if (domainName.includes('localhost:')) id = 'local';
if (domainName === 'makiswap-dev.thinkincoin.com') id = 'develop';

export default config[id];
