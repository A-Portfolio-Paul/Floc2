
<script>
    const TWO_PI = Math.PI * 2;

// canvas settings
var viewWidth = 768,
    viewHeight = 512,
    drawingCanvas = document.getElementById("drawing_canvas"),
    ctx,
    timeStep = (1/60),
    time = 0;

var sheep = [];
var clicks = [];
var exploded = 0;


function initDrawingCanvas() {
    drawingCanvas.width = viewWidth;
    drawingCanvas.height = viewHeight;
    ctx = drawingCanvas.getContext('2d');
}

function createSheep() {
    sheep[0] = new Sheep(128, 256);
    sheep[1] = new Sheep(384, 256);
    sheep[2] = new Sheep(640, 256);
}

function addClickHandlers() {
    clicks[0] = document.getElementById('left');
    clicks[1] = document.getElementById('center');
    clicks[2] = document.getElementById('right');
    clicks[0].onclick = function() {click(0)};
    clicks[1].onclick = function() {click(1)};
    clicks[2].onclick = function() {click(2)};

    function click(i) {
        sheep[i].timeStep += (1/18);
        sheep[i].scaleFactor += (1/10);

        if (sheep[i].explode === true) {
            clicks[i].style.display = 'none';
            if (++exploded === 3) {
                setTimeout(function() {
                    document.getElementById('monster').style.display = 'block';
                }, 1000);
            }
        }
        else {
            clearTimeout(sheep[i].tid);
            clearInterval(sheep[i].iid);
            sheep[i].tid = setTimeout(function() {
                sheep[i].iid = setInterval(function() {
                    sheep[i].timeStep -= (1/18);
                    sheep[i].scaleFactor -= (1/10);

                    if (sheep[i].scaleFactor === 1) {
                        clearInterval(sheep[i].iid);
                    }
                }, 250);
            }, 750);
        }
    }
}


function update() {
    sheep.forEach(function(s) {
        s.update();
    });
}

function draw() {
    ctx.fillStyle = '#84e184';
    ctx.fillRect(0, 0, viewWidth, viewHeight);

    sheep.forEach(function(s) {
        s.draw();
    });
}

function loop() {
    update();
    draw();
    time += timeStep;
    requestAnimationFrame(loop);
}

function Sheep(x, y) {
    this.x = x;
    this.y = y;
    this.time = Math.random() * 10;
    this._timeStep = (1/24);
    this._scaleFactor = 1;

    this.explode = false;
    this.explosionTime = 0;
    this.explosionProgress = 0;
    this.alpha = 1;
    this.furScaleX = 1;
    this.furScaleY = 1;
    this.faceOffsetY = 0;
    this.faceRotation = 0;
    this.leftEarRotation = 0;
    this.rightEarRotation = 0;
}
Sheep.prototype = {
    set scaleFactor(s) {
        this._scaleFactor = Math.max(1, s);

        if (this._scaleFactor > 3) {
            this.explode = true;
        }
    },
    get scaleFactor() {
        return this._scaleFactor;
    },
    set timeStep(s) {
        this._timeStep = Math.min(1, Math.max((1/24), s));
    },
    get timeStep() {
        return this._timeStep;
    },
    update:function() {
        if (this.explosionTime === 1) return;

        this.time += this.timeStep;

        if (this.explode) {
            this.explosionTime = Math.min(this.explosionTime + (1/30), 1);
            this.explosionProgress = Ease.inBack(this.explosionTime, 0, 1, 1);
            this.furScaleX = 1 + this.explosionProgress * 1.8;
            this.furScaleY = 1 + this.explosionProgress * 1.8;
            this.alpha = 1 - this.explosionProgress;
        }
        else {
            this.faceOffsetY = Math.sin(this.time) * 2;
            this.furScaleX = 1 + Math.sin(this.time) * 0.025 * this.scaleFactor;
            this.furScaleY = 1 + Math.cos(this.time) * 0.01 * this.scaleFactor;
            this.faceRotation = 0.05 * Math.cos(this.time);
            this.leftEarRotation = Math.sin(this.time) * 0.15;
            this.rightEarRotation = -this.leftEarRotation;
        }
    },
    draw:function() {
        if (this.explosionTime === 1) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.alpha;
        // fur
        ctx.save();
        ctx.scale(this.furScaleX, this.furScaleY);
        ctx.fillStyle = '#fff';

        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 16; j++) {
                ctx.beginPath();
                ctx.arc(
                    Math.cos(j / 16 * TWO_PI) * i * 16,
                    Math.sin(j / 16 * TWO_PI) * i * 16,
                    18,
                    0,
                    TWO_PI
                );
                ctx.fill();
            }
        }

        ctx.restore();

        // face
        ctx.save();
        ctx.rotate(this.faceRotation);
        ctx.translate(0, this.faceOffsetY);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(-32, 0);
        ctx.arcTo(-32, -32, 0, -32, 32);
        ctx.arcTo(32, -32, 32, 0, 32);
        ctx.lineTo(32, 72);
        ctx.arcTo(32, 96, 0, 104, 32);
        ctx.arcTo(-32, 104, -32, 64, 32);
        ctx.closePath();
        ctx.fill();
        // left eye
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(-12, 0, 4, 0, TWO_PI);
        ctx.fill();
        // right eye
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(12, 0, 4, 0, TWO_PI);
        ctx.fill();
        // left ear
        ctx.save();
        ctx.rotate(this.leftEarRotation);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(-32, -12, 12, 0, Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        // right ear
        ctx.save();
        ctx.rotate(this.rightEarRotation);
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(32, -12, 12, 0, Math.PI, true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        ctx.restore();

        ctx.restore();
    }
};

/**
 * easing equations from http://gizma.com/easing/
 * t = current time
 * b = start value
 * c = delta value
 * d = duration
 */
var Ease = {
    inCubic:function (t, b, c, d) {
        t /= d;
        return c*t*t*t + b;
    },
    outCubic:function(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t + 1) + b;
    },
    inOutCubic:function(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t + 2) + b;
    },
    inBack: function (t, b, c, d, s) {
        s = s || 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
    }
};

</script>

<link href='https://fonts.googleapis.com/css?family=Sigmar+One' rel='stylesheet' type='text/css'>

<div id="container">
    <canvas id="drawing_canvas"></canvas>

    <div id="monster">You monster!</div>

    <div id="left" class="left click_catcher"></div>
    <div id="center" class="center click_catcher"></div>
    <div id="right" class="right click_catcher"></div>
</div>
<style>
    body {
    background-color: #000;
    margin: 0;
}

#container {
    position: absolute;
    margin: auto;
    width: 768px;
    height: 512px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

#drawing_canvas {
    position: absolute;
}

#monster {
    position: absolute;
    width: 768px;
    height: 128px;
    top: 200px;
    font-family: 'Sigmar One';
    text-align: center;
    font-size: 5em;
    font-weight: 800;
    display: none;
    pointer-events: none;
}

.click_catcher {
    position: absolute;
    width: 184px;
    height: 184px;
    top: 164px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0);
    cursor: pointer;
}

.left {
    left: 36px;
}

.center {
    left: 292px;
}

.right {
    left: 548px;
}
</style>