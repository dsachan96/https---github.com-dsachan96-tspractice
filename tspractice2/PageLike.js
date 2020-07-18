"use strict";
exports.__esModule = true;
exports.PageLike = void 0;
var PageLike = /** @class */ (function () {
    function PageLike(likeCount, button) {
        this.likeCount = likeCount;
        this.button = button;
    }
    PageLike.prototype.onClick = function () {
        if (this.button) {
            this.likeCount--;
            this.button = false;
        }
        else {
            this.likeCount++;
            this.button = true;
        }
        console.log(this.likeCount + " " + this.button);
    };
    return PageLike;
}());
exports.PageLike = PageLike;
