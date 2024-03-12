/**
 * Count the number of matching items in language tags.
 * @param {string} lang1 The first language.
 * @param {string} lang2 The second language.
 * @returns {number} The number of matching items.
 */
function countMatchLanguageTagItem(lang1, lang2) {
    const lang1Array = lang1.toLowerCase().replaceAll("_", "-").split("-");
    const lang2Array = lang2.toLowerCase().replaceAll("_", "-").split("-");

    // If at least the first block does not match, it's a mismatch
    if (lang1Array[0] !== lang2Array[0]) {
        return 0;
    }

    let matchCount = 1;
    let i = 1;
    let j = 1;
    // Search for elements that match both and count them. The number of gaps does not necessarily match.
    // If it's gg-bb-cc-dd-ee-aa and gg-cc-ee-ff-aa, 4 will match.
    // Assume there is no intersection.
    while ( i < lang1Array.length && j < lang2Array.length ) {
        const ni = lang1Array.indexOf( lang2Array[j], i );
        const nj = lang2Array.indexOf( lang1Array[i], j );
        if ( ni < 0 && nj < 0 ) {
            i++;
            j++;
            continue;
        } else if ( ni < 0 && nj >= 0 ) {
            matchCount++;
            i++;
            j = nj + 1;
        } else if ( ni >= 0 && nj < 0 ) {
            matchCount++;
            i = ni + 1;
            j++;
        }
        if ( ni >= 0 && nj >= 0 ) {
            matchCount++;
            // It seems to be a cross pattern, but adopt the one with the smaller start index.
            if ( i < j ) {
                i++;
                j = nj + 1;
            } else {
                i = ni + 1;
                j++;
            }
        }
    }

    return matchCount;
}

/**
 * Get the best match language from the available languages.
 * @param {string[]} availableLanguages The available languages.
 * @param {string[]} preferredLanguages The preferred languages.
 * @param {string} fallbackLanguage The fallback language.
 * @returns {string} The best match language.
 */
function getBestMatchLanguage( availableLanguages, preferredLanguages, fallbackLanguage ) {
    for ( let i = 0; i < preferredLanguages.length; i++ ) {
        let maxMatchCount = 0;
        let maxMatchIndex = -1;
        for ( let j = 0; j < availableLanguages.length; j++ ) {
            const matchCount = countMatchLanguageTagItem( preferredLanguages[i], availableLanguages[j] );
            if ( matchCount > maxMatchCount ) {
                maxMatchCount = matchCount;
                maxMatchIndex = j;
            }
        }
        if ( maxMatchIndex >= 0 ) {
            return availableLanguages[maxMatchIndex];
        }
    }
    return fallbackLanguage;
}

module.exports = {
    countMatchLanguageTagItem,
    getBestMatchLanguage
};
