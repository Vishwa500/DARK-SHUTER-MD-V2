const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'PINKVENOM-MD;KYUzCTZJ#9Cc_hUqH3_lFrba7ycbyDONh0gqUbTOzY7qeGK8x5q8',
GITHUB_TOKEN: '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',
REPO_NAME: 'DARK-SHUTER-MD-V2',
GITHUB_USER_NAME: 'Vishwa500',

};

//In this case, you should use a Repo name that was not previously created in your Github account for the Repo name. Should Github username be used as the username of that github account and the token should also be obtained from the same github account.
//මෙහීදි ඔබ විසින් Repo name සදහා බාවිතා කළ යුත්තෙ මින් පෙර ඔබගේ Github account එක තුල නොසෑදූ Repo name එකකි. Github user name එක සදහා යොදා ගත යුත්තේද එම github account එකෙ User name එක වන අතරම token එකද ලබා ගත යුත්තෙ එම github account එකෙන්මය
