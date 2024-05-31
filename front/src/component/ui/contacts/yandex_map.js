async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [28.740627, 60.713955], 
                zoom: 15
            }
        }
    );

    map.addChild(new YMapDefaultSchemeLayer());
}

initMap();