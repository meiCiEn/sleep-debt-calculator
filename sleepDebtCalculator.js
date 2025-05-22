// Returns the number of sleep hours for a given day
function getSleepHours ( day )
{
    switch ( day )
    {
        case 'monday':
            return 8;
        case 'tuesday':
            return 6;
        case 'wednesday':
            return 5;
        case 'thursday':
            return 4.5;
        case 'friday':
            return 7;
        case 'saturday':
            return 6.5;
        case 'sunday':
            return 5.5;

        default:
            return 'invalid day';
    }
}


// Calculates the total actual sleep hours in a week 
// Arrow function implicitly returns the results (no need to use 'return' keyword)
const getActualSleepHours = () =>
    getSleepHours( 'monday' ) +
    getSleepHours( 'tuesday' ) +
    getSleepHours( 'wednesday' ) +
    getSleepHours( 'thursday' ) +
    getSleepHours( 'friday' ) +
    getSleepHours( 'saturday' ) +
    getSleepHours( 'sunday' );


// Calculates ideal sleep hours based on user-defined daily target
function getIdealSleepHours ( hours )
{
    let idealHours = hours;
    return idealHours * 7;
}

// Compares actual sleep to ideal sleep and logs the result
function calculateSleepDebt ()
{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours( 8 ); // assuming 8 ideal hours per night
    let sleepDebt = idealSleepHours - actualSleepHours;

    if ( actualSleepHours === idealSleepHours ) 
    {
        console.log( `You got ${ actualSleepHours } hours sleep, and you have ${ sleepDebt } hours sleep debt. That's exactly what you need!` );
    }
    else if ( actualSleepHours > idealSleepHours )
    {
        console.log( `You got ${ actualSleepHours } sleep.  That's ${ Math.abs( sleepDebt ) } hours more sleep than you need.` );
    } else
    {
        console.log( `You got ${ actualSleepHours } sleep. That's ${ sleepDebt } less sleep than you need. You have to get some rest!` );
    }

}

// Run the program
calculateSleepDebt();