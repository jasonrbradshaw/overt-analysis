function overtDrop() {
            var dec = document.getElementById("1").innerHTML;
            var intr = document.getElementById("2").innerHTML;
            
            if (dec == "")
                document.getElementById("1").innerHTML = 
                "<a href='DBE/DecodingBritishEmpiricism.html' target='_blank'>Decoding British Empiricism</a>";
                else
                document.getElementById("1").innerHTML = "";
                
            /* if (intr == "")
                document.getElementById("2").innerHTML = 
                "<a href='IntriguingInterpretation.html' target='_blank'>Intriguing Interpretation</a>";
                else
                document.getElementById("2").innerHTML = ""; */
        }
        
        function webDrop() {
            var coe = document.getElementById("3").innerHTML;
            var text = document.getElementById("4").innerHTML;
            
            if (coe == "")
                document.getElementById("3").innerHTML = 
                "<a href='CityofEdmonton.html' target='_blank'>City of Edmonton Projects</a>";
                else
                document.getElementById("3").innerHTML = "";
                
            if (text == "")
                document.getElementById("4").innerHTML = 
                "<a href='DigitalHumanities.html' target='_blank'>Digital Humanities Projects</a>";
                else
                document.getElementById("4").innerHTML = "";
        }