x=0;
y = 0;
draw_circle = "";
draw_rect = "";


var Speechrecognition = window.webkitSpeechRecognition;

var recognition = new Speechrecognition();

function start()
{
    document.getElementById("status").innerHTML = 'system is listining please speak or .';
    recognition.start





































































































































































































































































































































































































































































































































































































































































































    





































































































































































































































































































































































































































































































































































































































































































}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;


    document.getElementById("status".innerHTML = 'The speech has benn recognised as:')+ content;
    if(content =="circle")
    {
        x = Math.floor(math.random() * 900);
        y = Math.floor(math.random() * 600);
        document.getElementById("status").innerHTML = "started drawing circle ";
        draw_circle = "set";
    }
    if(content=="rectangle")
    {
    x = Math.floor(math.random() * 900);
    y = mMth.floor(Math.random() * 600);
    decodeURIComponent.getElementById("satus").innerHTML = "started drawing rectanglessssss";
    draw_rect = "set";
    }
}







































































































































































































































































































































































































































































































































































































































































































    




































































































































































































































































































































































































































































































































































































































































































    




































































































































































































































































































































































































































































































































































































































































































    function setup() {
        canvas = createCanvas(900, 600);
    }

    function draw() {
        if(draw_circle =="set")
        {
            redius = Math.floor(Math.random() * 100);
            circle(y,x,radius);
            document.getElementById("status").innerHTML = "Circle is drawn. ";
            draw_circle = "";
        }

        if(draw_rect =="set")
        {
           
            rect(y,x,radius);
            document.getElementById("status").innerHTML = "rectangle is drawn is drawn. ";
            draw_rect = "";
        }
    }
    