var cloud = new Vue ({
    el:'#cloud',
    data: {
        radius : 120,
        dtr: Math.PI/180,
        d:300,
        mcList: [],
        active: false,
        lasta: 1,
        lastb: 1,
        distr: true,
        tspeed: 10,
        size: 250,
        mouseX: 0,
        mouseY: 0,
        howelliptical:1,
        aA:null,
        oDiv:null,
        i:0,
        oTag:null,
    },
    methods: {
        
    },
});