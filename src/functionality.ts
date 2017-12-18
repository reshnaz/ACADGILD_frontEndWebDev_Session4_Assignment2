import { foodNamespace } from './interface'

    // Here we include another function under same namespace referenced from interface.ts file.
    // Function that prints details about person's most disliked food.

    export class fns implements foodNamespace.food{
        dislikedFood(){
                console.log(`The food I hate most is pizza which is a type of Italian cuisine. It is very popular.`);
        }
    }
