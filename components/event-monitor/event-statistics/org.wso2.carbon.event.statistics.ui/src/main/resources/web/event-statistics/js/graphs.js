/*This js mainly concern with the data structures related to graphs*/
function eventStatsGraph(xscale) {
    this.array = new Array();
    this.last=-1.0;
    for (var i = 0; i < xscale; i++) {
        this.array[i] = [i, 0.0];
    }
    this.xscale = xscale;
}

function getData() {
    return this.array;
}

function addData(newValue) {

    if(this.last<0.0){
        this.last=newValue;
    }

    //shift to left
    for (var i = 0; i < this.xscale - 1; i++) {
        this.array[i] = [i,this.array[i + 1][1]];  // (x,y)
    }
    
    //add the value to the last postion
    this.array[this.xscale - 1] = [this.xscale - 1,newValue-this.last];

    //to show the difference
    this.last=newValue;
}

function graphTickGenerator() {
    var tickArray = [];
    var startTick = 10;
    var i = startTick - 1;
    var weight = this.xscale / 10;
    do {
        var t = (startTick - i) * weight - 1;
        var v = i * weight;
        if (v == 0) {
            v = "0";
        }
        tickArray.push([t, v]);
        i--;
    } while (i > -1);
    return tickArray;
}

eventStatsGraph.prototype.get = getData;
eventStatsGraph.prototype.add = addData;
eventStatsGraph.prototype.tick = graphTickGenerator;
