var on_load = function(){

    
    if((1.2*window.innerHeight)>=window.innerWidth){
        alert('Switch to Portrait mode for better viewing.');
    }
    


    var skill_set = [
        {
            "name":"HTML",
            "value":"90"
        },
        {
            "name":"CSS",
            "value":"85"
        },
        {
            "name":"Javascript",
            "value":"80"
        },
        {
            "name":"Photoshop",
            "value":"80"
        },
        {
            "name":"Illustrator",
            "value":"75"
        },
        {
            "name":"React JS",
            "value":"75"
        },
        {
            "name":"Angular JS",
            "value":"80"
        },
        {
            "name":"UI-UX",
            "value":"80"
        },
    ];


    skill_set.sort(function(a, b) {
        return -parseFloat(a.value) + parseFloat(b.value);
    })

    skill_set.forEach(element => {
        $('#skills_ul').append(`              
        <!-- 90% -->
        <div style="height:25vh; width:25vh;" class='skills_donut'>
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                    <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill-opacity="0"></circle>
                    <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="" stroke-width="3"></circle> 
                    <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#0a1340" stroke-width="4" stroke-dasharray="`+element.value+` `+(100- parseInt(element.value)).toString() +`" stroke-dashoffset=""></circle>
                    <g class="chart-text">
                            <text x="50%" y="50%" class="chart-number">`
                              +element.value+`%
                            </text>
                            <text x="50%" y="50%" class="chart-label">
                              `+element.name+`
                        </text>
                    </g>
               
                </svg>
    
            </div>
    `);
    $('html').css({'max-height': '2vh'});
    $('#wrapper').css({'max-height': '2vh'});
    // console.log(typeof(100- parseInt(element.value)));

    });

//scrolling

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });
    
}