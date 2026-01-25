"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVersionSupported = isVersionSupported;
function isVersionSupported(currentVersion, minVersion) {
    const parse = (version) => {
        const parts = version.split('.').map(Number);
        if (parts.length !== 3 ||
            parts[0] === undefined ||
            parts[1] === undefined ||
            parts[2] === undefined ||
            Number.isNaN(parts[0]) ||
            Number.isNaN(parts[1]) ||
            Number.isNaN(parts[2])) {
            throw new Error(`Invalid version format: ${version}`);
        }
        // ✅ Explicit tuple construction (this is the key)
        return [parts[0], parts[1], parts[2]];
    };
    const [cMajor, cMinor, cPatch] = parse(currentVersion);
    const [mMajor, mMinor, mPatch] = parse(minVersion);
    if (cMajor !== mMajor)
        return cMajor > mMajor;
    if (cMinor !== mMinor)
        return cMinor > mMinor;
    return cPatch >= mPatch;
}
//# sourceMappingURL=versionUtils.js.map