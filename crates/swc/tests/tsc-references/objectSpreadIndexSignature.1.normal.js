//// [objectSpreadIndexSignature.ts]
import _object_spread from "@swc/helpers/src/_object_spread.mjs";
import _object_spread_props from "@swc/helpers/src/_object_spread_props.mjs";
var i = _object_spread_props(_object_spread({}, indexed1), {
    b: 11
});
// only indexed has indexer, so i[101]: any
i[101];
var ii = _object_spread({}, indexed1, indexed2);
// both have indexer, so i[1001]: number | boolean
ii[1001];
indexed3 = _object_spread({}, b ? indexed3 : undefined);
var writable = _object_spread({}, roindex);
writable.a = 0; // should be ok.
