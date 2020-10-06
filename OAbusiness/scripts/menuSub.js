function services() {
            var web = document.getElementById("1").innerHTML;
            var des = document.getElementById("2").innerHTML;
            var soc = document.getElementById("3").innerHTML;
            var con = document.getElementById("4").innerHTML;
            
            if (web == "")
                document.getElementById("1").innerHTML = 
                "<a href='services.html'>Web Development</a>";
                else
                document.getElementById("1").innerHTML = "";
                
            if (des == "")
                document.getElementById("2").innerHTML = 
                "<a href='services.html#des'>Graphic Design</a>";
                else
                document.getElementById("2").innerHTML = "";

            if (soc == "")
                document.getElementById("3").innerHTML = 
                "<a href='services.html#soc'>Social Media Management & Metrics</a>";
                else
                document.getElementById("3").innerHTML = "";

            if (con == "")
                document.getElementById("4").innerHTML = 
                "<a href='services.html#con'>Consultation</a>";
                else
                document.getElementById("4").innerHTML = "";
        }

function serviceArrow() {
            var service = document.getElementById("serv");
            if (service.innerHTML === "Services ⬇") {
                service.innerHTML = "Services ⬆";
            } else {
                service.innerHTML = "Services ⬇";
            }
        }