const { exec } = require('child_process');
const crypto = require('crypto');

// 1. Config
const HT_FILE = 'E:/dev/configs/apache/.htpasswd';
const USER = 'dev'; // The username you want
const HT_PASSWD_EXE = 'E:/dev/tools/apache/2.4.66/bin/htpasswd.exe'; // The username y ou want

// 2. Generate a random 6-character password
const PASSWORD = crypto.randomBytes(3).toString('hex');

// 3. Construct the shell command
// -c = create/overwrite filegggg
// -b = batch mode (read password from command line)
const command = `${HT_PASSWD_EXE} -c -b ${HT_FILE} ${USER} ${PASSWORD}`;

// 4. Execute
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`❌ Error updating auth: ${error.message}`);
        return;
    }

    // 5. This output will appear in your PM2 logs
    console.log('===========================');
    console.log('🛡️  APACHE AUTH REFRESHED');
    console.log('===========================');
    console.log(`👤 User: ${USER}`);
    console.log(`🔑 Pass: ${PASSWORD}`);
    console.log('=======================================');
});