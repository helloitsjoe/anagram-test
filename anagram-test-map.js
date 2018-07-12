const assert = require('assert');

function countAnagrams(arr) {
	let totalAnagrams = 0;
    const anagramMap = new Map();

    arr.forEach(word => {
        const letterMap = {};

        for (let i = 0; i < word.length; i++) {
            const letter = word[i].toLowerCase();
            if (letterMap[letter]) {
                letterMap[letter]++;      	
            } else {
                letterMap[letter] = 1;
            }
        };

        updateAnagramCount(letterMap, anagramMap);
    });

    anagramMap.forEach(value => {
        if (value > 1) {
            totalAnagrams += value;
        }
    });

    console.log(`${totalAnagrams} anagrams`);
    return totalAnagrams;
}

function updateAnagramCount(letterMap, anagramMap) {
    let inc = false;

    anagramMap.forEach((value, key, map) => {
        if (deepEqual(key, letterMap)) {
            value++;
            map.set(key, value);
            inc = true;;
            return;
        }
    });

    if (!inc) {
        anagramMap.set(letterMap, 1);
    }
}

function deepEqual(a, b) {
    for (let key in a) {
        if (!b[key]) {
            return false;
        }
    }
    return true;
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
    
console.log('Tests pass!');
