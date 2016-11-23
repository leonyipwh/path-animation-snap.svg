var order = 0;
var totalPath = 0;
var s = Snap("#svg");

Snap.load("./img/reindeer-01.svg", function (f) {
    g = f.select("g").attr({
        fill: "none", 
        stroke: "#868686",
        strokeWidth: 0.25
    });
    s.append(g);
    g.drag();

    _.each(s.selectAll("path"), function(item, index){
        item.attr({ class: 'st'+ index })
    })

    totalPath = s.selectAll("path").length;

    // console.log(Snap.path.getTotalLength(s.select('.st10')))

    var interval = setInterval(function(){ 
        // console.log(s.select('.st' + order))
        s.select('.st' + order ).attr({opacity:1})
        order++;
        if(order == totalPath){
            console.log('clear')
            window.clearInterval(interval);
        }
    }, 10);
})



// drawing effect
var s2 = Snap("#svg2");
// Snap.load("./img/reindeer-01.svg", function (f) {
//     g = f.select("g").attr({
//         fill: "none", 
//         stroke: "#868686",
//         strokeWidth: 0.25
//     });
//     s2.append(g);
//     g.drag();

//     _.each(s2.selectAll("path"), function(item, index){
//         item.attr({ class: 'path'+ index })
//         var pathLength = Snap.path.getTotalLength(s2.select('.path'+ index))
//         item.attr({
//             'stroke-dasharray': '' + pathLength
//         });
//         Snap.animate(0, pathLength, function(t){
//              console.log(t)
//             item.attr({'stroke-dasharray': '' + t + ' ' + (pathLength - t)});
//         }, 3000);
//     })
// })
