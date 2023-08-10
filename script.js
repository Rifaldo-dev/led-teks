onload = function () {
        var d = document;

        function feedin (feed, speed) {
                var filter = 0;
                feed.style.opacity = 0;
                feed.style.MozOpacity = 0;
                var timer =setInterval(function () {
                        filter ++;
                        feed.style.opacity = (filter / 10);
                        feed.style.MozOpacity = (filter / 10) ;
                        if (filter == 10)
                                clearInterval(timer);
                                  
                }
        },speed);
}

        //I LOVE YOU

        var str = [36,37,38,72,107,142,176,177,178,
41,76,111,146,181,182, 183,
185,150,115,80,45,46,47,82,117,152,187,
186,49,84,119,154,190 ,
156,121,86,51,53,54,55,88, 123, 158, 193, 124, 125, 194,195,
58,93,128,129,130,95,60,164,199,
202,167,132,97,62,63,64,99,134,169,204,
203,66,101,136,171,206,207,208,173,138,103,68]