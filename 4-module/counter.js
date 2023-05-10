let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;

module.exports.getCount = getCount;
exports = {};
exports.increase = increase;