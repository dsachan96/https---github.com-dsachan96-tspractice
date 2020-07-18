"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like(likeCount, button) {
        this.likeCount = likeCount;
        this.button = button;
    }
    Like.prototype.onClick = function () {
        if (!this.button) {
            this.likeCount++;
            this.button = true;
        }
        else {
            this.button = false;
            this.likeCount--;
        }
        console.log('TotalLikes :' + this.likeCount);
    };
    Object.defineProperty(Like.prototype, "LikeCount", {
        get: function () {
            return this.likeCount;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
console.log('deepak');
