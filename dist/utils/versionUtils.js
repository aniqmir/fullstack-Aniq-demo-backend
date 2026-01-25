"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isVersionSupported = isVersionSupported;
function isVersionSupported(clientVersion, minVersion) {
    const parse = (v) => v.split('.').map(Number);
    const [cMajor, cMinor, cPatch] = parse(clientVersion);
    const [mMajor, mMinor, mPatch] = parse(minVersion);
    if (cMajor > mMajor)
        return true;
    if (cMajor < mMajor)
        return false;
    if (cMinor > mMinor)
        return true;
    if (cMinor < mMinor)
        return false;
    if (cPatch >= mPatch)
        return true;
    return false;
}
//# sourceMappingURL=versionUtils.js.map