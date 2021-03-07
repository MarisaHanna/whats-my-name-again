let today = [

    {
        column:'0',
        hour:'8',
        time:'08',
        when:'am',
        reminder:''
    },

    {
        column:'1',
        hour:'9',
        time:'09',
        when:'am',
        reminder:''
    },

    {
        column:'2',
        hour:'10',
        time:'10',
        when:'am',
        reminder:''
    },

    {
        column:'3',
        hour:'11',
        time:'11',
        when:'am',
        reminder:''
    },

    {
        column:'4',
        hour:'12',
        time:'12',
        when:'pm',
        reminder:''
    },

    {
        column:'5',
        hour:'1',
        time:'13',
        when:'pm',
        reminder:''
    },

    {
        column:'6',
        hour:'2',
        time:'14',
        when:'pm',
        reminder:''
    },

    {
        column:'7',
        hour:'3',
        time:'15',
        when:'pm',
        reminder:''
    },

    {
        column:'8',
        hour:'4',
        time:'16',
        when:'pm',
        reminder:''
    },

    {
        column:'9',
        hour:'5',
        time:'17',
        when:'pm',
        reminder:''
    },
    


]

function headerDate() {
    let currentDate = moment().format('ll');
    $('#current-date').text(currentDate);
}

function saveDate() {

    localStorage.setItem('today', JSON.stringify(today));
    console.log('now')

}

function myReminders() {

    today.forEach(function(thisTime){
        $(`#${thisTime.column}`).val(thisTime.reminder);
       console.log('hello')
    })
}


function init() {
    let savedDay = JSON.parse(localStorage.getItem('today'));

    if (savedDay) {
        today = savedDay;
    }

    saveDate();
    myReminders();

}

headerDate();

today.forEach(function(thisTime) {
    let hourBlock = $('<form>').attr({
        'class': 'row'
    });

    $('.container-fluid').append(hourBlock);

    let timeDisplay = $('<div>').text(`${thisTime.hour} ${thisTime.when}`)
        .attr({
        'class': 'col-md-2 hour'
    });

    

let eachHour = $('<div>').attr({
    'class': 'col-md-9 description p-0'
});

let mySchedule = $('<textarea>');
    eachHour.append(mySchedule);
    mySchedule.attr('column', thisTime.column);
   
    if (thisTime.time < moment().format('HH')){
        mySchedule.attr({
            'class': 'past',

        })

    } else if (thisTime.time === moment().format('HH')) {
        mySchedule.attr({
            'class': 'present'
        })
        
    } else if (thisTime.time > moment().format('HH')) {
        mySchedule.attr( {
            'class': 'future'
        })
    }

    let saveIcon =  $('<i class="far fa-save fa-1x"></i>')

    let saveText = $('<button>')
        .attr({
        'class':  'col-md-1 saveBtn'
    });

    saveText.append(saveIcon);
    hourBlock.append(timeDisplay, eachHour, saveText);
     
        
})

init();
console.log(init)
   
$('.saveBtn').on('click', function(event){
    event.preventDefault();
    
    let saveContent = $(this).siblings('.description').children('.future').attr('column');
    console.log(saveContent)
    
    today[saveContent].reminder = $(this).siblings('.description').children('.future').val();
    console.log(saveContent)
    
    saveDate();
    myReminders();
    
})









