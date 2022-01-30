mapboxgl.accessToken = 'pk.eyJ1Ijoic2FjaGluNzk3NyIsImEiOiJja3FnZ3I2MTUxdHQyMnFwaW82aTE4aWFuIn0.fihqFAtbFxHEdspGFBQcUA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [72.901390, 19.085097], // starting position [lng, lat]
    zoom: 12 // starting zoom
});
const projection = map.getProjection();
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserHeading: true
}));
const geojson = {
    type: 'FeatureCollection',
    features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.832764, 19.086060]
            },
            properties: {
                title: 'Kapila Khandvala College Of Education',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.887970, 19.111891]
            },
            properties: {
                title: 'Nav Hind Jr College Of Vocational Educational',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.836390, 19.123097]
            },
            properties: {
                title: 'Sardar Patel Institute of Technology',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.913311, 19.134131]
            },
            properties: {
                title: 'IIT Bombay',
                description: 'Mumbai'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.908798, 19.061235]
            },
            properties: {
                title: 'Sree Narayana Guru College of Commerce',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.904648, 19.082952]
            },
            properties: {
                title: 'Prin Smt P N Doshi Collage',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.903465, 19.089218]
            },
            properties: {
                title: 'Maheshwari Vidyalaya & Junior, Night Jr. College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.893204, 19.054363]
            },
            properties: {
                title: 'Bhavna Trust Junior And Degree College Of Commerce And Science',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.858452, 19.069649]
            },
            properties: {
                title: 'Alkesh Dinesh Mody Institute for Financial & Management Studies',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.888878, 19.081011]
            },
            properties: {
                title: 'Don Bosco College BMS',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.899139, 19.075972]
            },
            properties: {
                title: 'S.k Somaiya College Placement Cell',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.898537, 19.072495]
            },
            properties: {
                title: 'K J Somaiya Polytechnic',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.851151, 19.121859]
            },
            properties: {
                title: 'Sheth Laherchand Uttamchand Jhaveri College of Arts & SIR Mathuradas Vissanji College of Science & Commerce',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.844910, 19.120180]
            },
            properties: {
                title: 'IIT - Ans Pace Junior Science College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.842461, 19.114279]
            },
            properties: {
                title: 'Saraswati College of Distance Education.',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.846001, 19.121599]
            },
            properties: {
                title: 'Swami Vivekanand College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.844482, 19.109131]
            },
            properties: {
                title: 'Acharya Ambalal V Patel Junior College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.850731, 19.117817]
            },
            properties: {
                title: 'Shree G P M Degree College Of Science And Commerce',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.845543, 19.118570]
            },
            properties: {
                title: 'St City College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.853561, 19.116655]
            },
            properties: {
                title: 'Aakash Jr College Of SCI & Comm',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.839569, 19.131964]
            },
            properties: {
                title: 'Mvm College of Commerce and Science',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.866386, 19.128910]
            },
            properties: {
                title: 'K J Somaiya College of Science & Commerce',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.855576, 19.104856]
            },
            properties: {
                title: 'Shriniwas Bagarka Jr. College And S. P. D. T Degree College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.838425, 19.149681]
            },
            properties: {
                title: 'H K College of Pharmacy',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.832748, 19.105091]
            },
            properties: {
                title: 'B L Amlani College Of Commerce And Economics',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.837234, 19.107645]
            },
            properties: {
                title: 'D J Sanghvi College Of Engineer',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.837372, 19.102848]
            },
            properties: {
                title: 'Mithibai College',
                description: 'Mumbai'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.850266, 19.099249]
            },
            properties: {
                title: 'Sathaye College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.841026, 19.096497]
            },
            properties: {
                title: 'Maniben Nanavati Womens College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.844482, 19.109131]
            },
            properties: {
                title: 'Acharya Ambalal V Patel Junior College',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.834106, 19.105713]
            },
            properties: {
                title: 'USMS Vidyanidhi Junior College of Science',
                description: 'Mumbai'
            }
        }, {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [72.846771, 19.103239]
            },
            properties: {
                title: 'Shri GPM College Of Science And Commerce',
                description: 'Mumbai'
            }
        },
    ]
};
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}