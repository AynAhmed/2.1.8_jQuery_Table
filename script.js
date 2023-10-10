$(document).ready(function(){
    $(document).ready(function () {
        $('th').css({
            'font-size': '20px',
            'font-style': 'italic'
        });
        $('tr td:nth-child(odd)').css('background-color', 'lightblue');
        $('tr td:nth-child(even)').css('background-color', 'tomato');
    });
})