const assert = require('assert');

function countAnagrams(arr) {
	let totalAnagrams = 0;
    const anagramMap = {};

    arr.forEach(word => {
        const sorted = word.toLowerCase().split('').sort().join('');
        if (anagramMap[sorted]) {
            anagramMap[sorted]++;
        } else {
            anagramMap[sorted] = 1;
        }
    });

    for (let word in anagramMap) {
        if (anagramMap[word] > 1) {
            totalAnagrams += anagramMap[word];
        }
    }

    console.log(`${totalAnagrams} anagrams`);
    return totalAnagrams;
}

console.time('test');
assert.equal(countAnagrams(['cat', 'act']), 2);
assert.equal(countAnagrams(['Cat', 'act']), 2);
assert.equal(countAnagrams(['cat', 'act', 'xyz']), 2);
assert.equal(countAnagrams(['cat', 'act', 'dog', 'god', 'xyz']), 4);
assert.equal(countAnagrams(['cat', 'act', 'anagram', 'nagaram', 'ganamar', 'xyz', 'abc']), 5);
assert.equal(countAnagrams([
    'cat',
    'act',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'antidisestablishmentarianism',
    'xyz',
    'abc']), 58);
console.timeEnd('test');

console.log('\nTests pass!');
