// Chore functions
function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve(true);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(`${name} finished using the weed eater.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after mowing the yard.`);
                reject(false);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log(`${name} finished trimming the hedges.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after weed eating the yard.`);
                reject(false);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                console.log(`${name} finished collecting wood.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after trimming the hedges.`);
                reject(false);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                console.log(`${name} finished watering the garden.`);
                resolve(true);
            } else {
                console.log(`${name} fell asleep after collecting wood.`);
                reject(false);
            }
        }, 500);
    });
}

// Async/Await function
async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} finished all their chores!`);
    } catch {
        console.log(`${name}'s chore routine was interrupted.`);
    }
}

// Start task
doSummerChores("Amanda");


