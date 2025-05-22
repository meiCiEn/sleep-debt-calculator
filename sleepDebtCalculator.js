// Returns the number of sleep hours for a given day
function getSleepHours ( day )
{
    switch ( day )
    {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 6;
            break;
        case 'wednesday':
            return 5;
            break;
        case 'thursday':
            return 4.5;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 6.5;
            break;
        case 'sunday':
            return 5.5;
            break;

        default:
            return 'invalid day';
            break;
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