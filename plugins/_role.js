let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? 'Perunggu V'
        : ((user.level >= 3) && (user.level <= 6)) ? 'Perunggu IV'
            : ((user.level >= 6) && (user.level <= 9)) ? 'Perunggu III'
                : ((user.level >= 9) && (user.level <= 12)) ? 'Perunggu II'
                    : ((user.level >= 12) && (user.level <= 15)) ? 'Perunggu I'
                        : ((user.level >= 15) && (user.level <= 18)) ? 'Silver V'
                            : ((user.level >= 18) && (user.level <= 21)) ? 'Silver IV'
                                : ((user.level >= 21) && (user.level <= 24)) ? 'Silver III'
                                    : ((user.level >= 24) && (user.level <= 27)) ? 'Silver II'
                                        : ((user.level >= 27) && (user.level <= 30)) ? 'Silver I'
                                            : ((user.level >= 30) && (user.level <= 33)) ? 'Gold V'
                                                : ((user.level >= 33) && (user.level <= 36)) ? 'Gold IV'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? 'Gold III'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? 'Gold II'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? 'Gold I'
                                                                : ((user.level >= 45) && (user.level <= 48)) ?  'Crystal V'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? 'Crystal IV'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? 'Crystal III'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? 'Crystal II'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? 'Crystal I'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? 'Master V'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? 'Master IV'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? 'Master III'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? 'Master II'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? 'Master I'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? 'Champion V'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? 'Champion IV'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? 'Champion III'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? 'Champion II'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? 'Champion I'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? 'Legend V'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? 'Legend IV'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? 'Legend III'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? 'Legend II'
                                                                                                                                            : 'Legend I'
    user.role = role
    return true
}

module.exports = handler