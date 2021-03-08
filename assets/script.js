let today = [

    {
        id:'0',
        hour:'8',
        time:'08',
        when:'am',
        reminder:''
    },

    {
        id:'1',
        hour:'9',
        time:'09',
        when:'am',
        reminder:''
    },

    {
        id:'2',
        hour:'10',
        time:'10',
        when:'am',
        reminder:''
    },

    {
        id:'3',
        hour:'11',
        time:'11',
        when:'am',
        reminder:''
    },

    {
        id:'4',
        hour:'12',
        time:'12',
        when:'pm',
        reminder:''
    },

    {
        id:'5',
        hour:'1',
        time:'13',
        when:'pm',
        reminder:''
    },

    {
        id:'6',
        hour:'2',
        time:'14',
        when:'pm',
        reminder:''
    },

    {
        id:'7',
        hour:'3',
        time:'15',
        when:'pm',
        reminder:''
    },

    {
        id:'8',
        hour:'4',
        time:'16',
        when:'pm',
        reminder:''
    },

    {
        id:'9',
        hour:'5',
        time:'17',
        when:'pm',
        reminder:''
    },
    

    {
        id:'10',
        hour:'6',
        time:'18',
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

}

function myReminders() {

    today.forEach(function(thisTime){

        $(`#${thisTime.id}`).val(thisTime.reminder);

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
    mySchedule.attr('id', thisTime.id);
   
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

headerDate();
init();


   
$('.saveBtn').on('click', function(event){
    event.preventDefault();


     let saveContent = $(this).siblings('.description').children('.future').attr('id');
    
    today[saveContent].reminder = $(this).siblings('.description').children('.future').val();
      
    
     saveDate();
     myReminders();
    
})









