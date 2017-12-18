// Below is our namespace which contains interface and function.
export namespace foodNamespace{
    //interface that describes certain food.
    export interface food{
        dislikedFood();
    }

    // Function that prints details about person's favorite food.
    export function favoriteFood(){
            console.log(`My favorite food is biryani which is a type of Indian cuisine. It is a very popular dish.`);
    }
}
