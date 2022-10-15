var countDownDate = new Date("Oct 20, 2022 00:00:00").getTime();
        var x = setInterval(function(){
            var now = new Date().getTime();
            var distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            days = days.toString();
            console.log(days.length);
            //days
            if(days.length<2){
                days = "0"+days
                console.log(days);
            }
            hours = hours.toString();
            //hours
            if(hours.length<2){
                hours = "0"+hours
                console.log(hours);
            }
            minutes = minutes.toString();
            //minutes
            if(minutes.length<2){
                minutes = "0"+minutes
                console.log(minutes);
            }
            seconds = seconds.toString();
            //seconds
            if(seconds.length<2){
                seconds = "0"+seconds
                console.log(seconds);
            }

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            if(distance < 0){
                clearInterval(x);
                document.getElementById("days").innerHTML = "00";
                document.getElementById("hours").innerHTML = "00";
                document.getElementById("minutes").innerHTML = "00";
                document.getElementById("seconds").innerHTML = "00";
            }
        },1000);

        