import fs from 'fs'
import db from '../lib/database.js'
if (fs.existsSync('./bot/lang/' + db.data.users[m.sender].language.toUpperCase() + '.json')) {
    var json = JSON.parse(fs.readFileSync('./src/language/' + userr.language.toUpperCase() + '.json'));
} else {
    var json = JSON.parse(fs.readFileSync('./src/language/EN.json'));
}
function getString(file) {
    return json['STRINGS'][file];
}
export default {
    language: json,
    getString: getString
}