export function isVersionSupported(clientVersion: string, minVersion: string): boolean {
    const parse = (v: string) => v.split('.').map(Number);
    const [cMajor, cMinor, cPatch] = parse(clientVersion);
    const [mMajor, mMinor, mPatch] = parse(minVersion);

    if (cMajor > mMajor) return true;
    if (cMajor < mMajor) return false;
    if (cMinor > mMinor) return true;
    if (cMinor < mMinor) return false;
    if (cPatch >= mPatch) return true;
    return false;
}
