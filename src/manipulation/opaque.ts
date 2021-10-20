/**
 * Opaque type
 */

type FirstName = string & { __isFirstName: true }
type LastName = string & { __isLastName: true }
type FullName = string & { __isFullName: true }

function fullName(firstName: FirstName, lastName: LastName): FullName {
    return firstName + lastName as FullName;
}

// fullName('Eugene', 'Obrezkov')

function firstName(name: string): FirstName {
    return name as FirstName;
}

function lastName(name: string): LastName {
    return name as LastName;
}

fullName(firstName('Eugene'), lastName('Obrezkov'))
