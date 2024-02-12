var config = {
    style: 'mapbox://styles/conniechow/clshw71rc002i01qwey6q2kdl',
    accessToken: 'pk.eyJ1IjoiY29ubmllY2hvdyIsImEiOiJjbHMxN2c5cWIwOHFsMmpsZDJmcmUzM3I5In0.W1X7TebBdSg0UdTRSYN7LQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Public Housing Estates in Hong Kong',
    subtitle: 'Public housing distribution and its correlation to higher education',
    byline: 'CHOW Hong Kiu',
    nav: '<a href="landing.html">landing</a> <a href="logic.html">logical progression</a> <a href="statistic.html">data analysis</a> ',
    footer: '<a href="landing.html">landing</a> <a href="logic.html">logical progression</a> <a href="statistic.html">data analysis</a> <br> Source: Hong Kong CSDI. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'ch1',
            alignment: 'left',
            hidden: false,
            title: 'Public Housing Estates Distribution',
            image: './Images/image1.JPG',
            description: 'Public housing in Hong Kong is a set of housing programme intended to provide affordable rental housing options for people in need. They are intended for only populations without the capacity to afford housing by their own financial capacity. They are allocated based on priority and dwelling unit type. Currently, the average waiting time exceeds 20 years with more than 200,000 person registered on the list. As there are an income limit for households to be eligible for registration, it is often used as a measure of poverty population in Hong Kong. <a href="https://www.gov.hk/en/residents/housing/publichousing/index.htm"> <strong>Read more</strong></a>',
            location: {
                center: [114.08688, 22.4451],
                zoom: 9.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'mgwr',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'edu',
                    opacity: 0,
                    duration: 2000              
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                },
                {
                    layer: 'mgwr',
                    opacity: 0
                },
                {
                    layer: 'edu',
                    opacity: 0                
                },
                {
                    layer: 'symbols',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            hidden: false,
            title: 'Correlated factors: Education',
            description: 'As shown, the distribution of population with a degree in Hong Kong is not evenly distributed. A Moran I value of 0.1925 shows a tendency of clustering of population with higher education.',
            location: {
                center: [114.08688, 22.4451],
                zoom: 9.7,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'mgwr',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'edu',
                    opacity: 1,
                    duration: 2000              
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0
                },
                {
                    layer: 'mgwr',
                    opacity: 0
                },
                {
                    layer: 'edu',
                    opacity: 1                
                },
                {
                    layer: 'symbols',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: 'Correlation between education level and pubic housing estates',
            description: 'This map shows the result of multiscale geographically weighted regreesion (MGWR) between population density of people with a degree and residence of public estates. A positive correlation indicates that surprisingly, the increase of population with higher education is correlated to more population living in public estates. Whether a causation relationship exists, and the reason behind is not known though. Further data processing on population intensity is necessary.',
            location: {
                center: [114.08688, 22.4451],
                zoom: 9.7,
                pitch: 0,
                bearing: 0,
                speed: 2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'mgwr',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'edu',
                    opacity: 0,
                    duration: 2000              
                },
                {
                    layer: 'symbols',
                    opacity: 0,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 0
                },
                {
                    layer: 'mgwr',
                    opacity: 1
                },
                {
                    layer: 'edu',
                    opacity: 0                
                },
                {
                    layer: 'symbols',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'ch4',
            alignment: 'right',
            hidden: false,
            title: 'Distribution of Higher Education',
            image: './Images/image2.jpeg',
            description: 'Sometimes the higher education institutions locates close to public housing estates, providing the residents high connectivity.',
            location: {
                center: [114.17874, 22.33735],
                zoom: 14.4,
                pitch: 45,
                bearing: 0,
                speed: 2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'mgwr',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'edu',
                    opacity: 0,
                    duration: 2000              
                },
                {
                    layer: 'symbols',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                },
                {
                    layer: 'mgwr',
                    opacity: 0
                },
                {
                    layer: 'edu',
                    opacity: 0                
                },
                {
                    layer: 'symbols',
                    opacity: 1                
                }
            ]
        },
        {
            id: 'ch5',
            alignment: 'right',
            hidden: false,
            title: 'Distribution of Higher Education',
            image: './Images/image3.jpeg',
            description: 'While sometimes they are remote from any public housing.',
            location: {
                center: [114.26326, 22.33774],
                zoom: 15,
                pitch: 45,
                bearing: 0,
                speed: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1,
                    duration: 2000
                },
                {
                    layer: 'mgwr',
                    opacity: 0,
                    duration: 2000
                },
                {
                    layer: 'edu',
                    opacity: 0,
                    duration: 2000              
                },
                {
                    layer: 'symbols',
                    opacity: 1,
                    duration: 2000                
                }
            ],
            onChapterExit: [
                {
                    layer: 'data-driven-circles',
                    opacity: 1
                },
                {
                    layer: 'mgwr',
                    opacity: 0
                },
                {
                    layer: 'edu',
                    opacity: 0                
                },
                {
                    layer: 'symbols',
                    opacity: 1                
                }
            ]
        }
    ]
};
