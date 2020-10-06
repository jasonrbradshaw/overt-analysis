/* HIDE FOOTER ONCLICK*/
function HideFooter()
{
    var display = document.getElementById("footer").style.display;
    if(display=="none")
        document.getElementById("footer").style.display="block";
    else
        document.getElementById("footer").style.display="none";
        
    document.getElementById("button").classList.toggle('buttonW');
    
    if(display == "none")
        document.getElementById("button").value="HIDE";
    else
        document.getElementById("button").value="SHOW";
}


function overtDrop() {
            var dec = document.getElementById("1").innerHTML;
            var intr = document.getElementById("2").innerHTML;
            
            if (dec == "")
                document.getElementById("1").innerHTML = 
                "<a href='DecodingEmpiricism.html' target='_blank'>Decoding British Empiricism</a>";
                else
                document.getElementById("1").innerHTML = "";
                
            if (intr == "")
                document.getElementById("2").innerHTML = 
                "<a href='IntriguingInterpretation.html' target='_blank'>Intriguing Interpretation</a>";
                else
                document.getElementById("2").innerHTML = "";
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
                "<a href='https://hucodev.artsrn.ualberta.ca/jrb1/textvis/textvis.php' target='_blank'>Text-Vis</a>";
                else
                document.getElementById("4").innerHTML = "";
        }
        