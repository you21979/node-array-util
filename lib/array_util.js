'use strict'

var ArrayUtil = exports;

ArrayUtil.distribute = function(list, max) {
    list = list instanceof Array ? list : [list]
    max = max || 10

    var w = [];
    var split = Math.ceil(list.length / max);
    for(var i = 0; i < split; ++i){
        w.push(list.slice(i * max, i * max + max));
    }
    return w
}

