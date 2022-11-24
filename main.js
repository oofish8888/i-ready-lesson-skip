// utils
function exposeObj(fun) {
    debug(fun) // enter dun scope when fun called.
    fun() //calls fun.
}

function hookObj(extractLocation, obj) {
    window[extractLocation] = obj // creates global hook.
}

//part 1
exposeObj(lessonBridge.close) //exposes the 'lessonBridge.close' fun.

// part 2
hookObj('hook', _0xcc7fd3) // extracts the '_0xcc7fd3' variable

function p1(score) {
    let csid = html5Iframe.src.split('csid=')[1].split('&type')[0] // gets the current lesson csid
    objScore = { // makes the score an obj
        score: score
    }
    hook.completeLessonComponent(csid, objScore); // sends the request to complete the lesson
}
